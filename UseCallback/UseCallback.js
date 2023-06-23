// A reader of my blog reached me on Facebook with an interesting question. He said his teammates, no matter the situation, were wrapping every callback function inside useCallback():
import React, { useCallback } from "react";

function MyComponent() {
  const handleClick = useCallback(() => {
    // handle the click event
  }, []);

  return <MyChild onClick={handleClick} />;
}

// "Every callback function should be memoized to prevent useless re-rendering of child components that use the callback function" is the reasoning of his teammates.

// This reasoning is far from the truth. Such usage of useCallback() without profiling makes the component slower and increases code complexity.

// In this post, I'm going to explain how to use correctly useCallback().

// Before I go on, let me recommend something to you.

// The path to becoming proficient in React isn't easy... but fortunately with a good teacher you can shortcut.

// 1. Understanding functions equality check
// Before diving into useCallback() use, let's distinguish the problem useCallback() solves — the functions equality check.

// Functions in JavaScript are first-class citizens, meaning that a function is a regular object. The function object can be returned by other functions, be compared, etc.: anything you can do with an object.

// Let's write a function factory() that returns functions that sum numbers:

function factory() {
  return (a, b) => a + b;
}

const sumFunc1 = factory();
const sumFunc2 = factory();

console.log(sumFunc1(1, 2)); // => 3
console.log(sumFunc2(1, 2)); // => 3

console.log(sumFunc1 === sumFunc2); // => false
console.log(sumFunc1 === sumFunc1); // => true

//   sumFunc1 and sumFunc2 are functions that sum two numbers. They've been created by the factory() function.

// The functions sumFunc1 and sumFunc2 share the same code source, but they are different function objects. Comparing them sumFunc1 === sumFunc2 evaluates to false.

// That's just how JavaScript objects work. An object (including a function object) equals only to itself.

// 2. The purpose of useCallback()
// Different function objects sharing the same code are often created inside React components:

function MyComponent() {
  // handleClick is re-created on each render
  const handleClick = () => {
    console.log("Clicked!");
  };

  // ...
}

//   handleClick is a different function object on every rendering of MyComponent.

// Because inline functions are cheap, the re-creation of functions on each rendering is not a problem. A few inline functions per component are acceptable.

// But in some cases you need to maintain a single function instance between renderings:

// A functional component wrapped inside React.memo() accepts a function object as prop
// When the function object is a dependency to other hooks, e.g. useEffect(..., [callback])
// When the function has some internal state, e.g. when the function is debounced or throttled.
// That's when useCallback(callbackFun, deps) is helpful: given the same dependency values deps, the hook returns the same function instance between renderings (aka memoization):

import { useCallback } from "react";

function MyComponent() {
  // handleClick is the same function object
  const handleClick = useCallback(() => {
    console.log("Clicked!");
  }, []);

  // ...
}

// handleClick variable has always the same callback function object between renderings of MyComponent.

// 3. A good use case
// You have a component <MyBigList> that renders a big list of items:

import useSearch from "./fetch-items";

function MyBigList({ term, onItemClick }) {
  const items = useSearch(term);

  const map = (item) => <div onClick={onItemClick}>{item}</div>;

  return <div>{items.map(map)}</div>;
}

export default React.memo(MyBigList);

// The list could be big, maybe hundreds of items. To prevent useless list re-renderings, you wrap it into React.memo().

// The parent component of MyBigList provides a handler function to know when an item is clicked:

import { useCallback } from "react";

export function MyParent({ term }) {
  const onItemClick = useCallback(
    (event) => {
      console.log("You clicked ", event.currentTarget);
    },
    [term]
  );

  return <MyBigList term={term} onItemClick={onItemClick} />;
}

// onItemClick callback is memoized by useCallback(). As long as term is the same, useCallback() returns the same function object.

// When MyParent component re-renders, onItemClick function object remains the same and doesn't break the memoization of MyBigList.

// That was a good use case of useCallback().

// 4. A bad use case
// Let's look at another example:

import { useCallback } from "react";

function MyComponent() {
  // Contrived use of `useCallback()`
  const handleClick = useCallback(() => {
    console.log("You clicked");
  }, []);

  return <MyChild onClick={handleClick} />;
}

function MyChild({ onClick }) {
  return <button onClick={onClick}>I am a child</button>;
}

// The first problem is that useCallback() hook is called every time MyComponent renders. This already reduces the render performance.

// The second problem is that using useCallback() increases the complexity of the code. You have to keep the deps of useCallback(..., deps) in sync with what you're using inside the memoized callback.

// Does it worth using useCallback()? Most likely not because <MyChild> component is light, and its re-rendering doesn't create performance issues. The optimization costs more than not having the optimization.

// Simply accept that rendering creates new function objects:

import { useCallback } from "react";

function MyComponent() {
  const handleClick = () => {
    console.log("You clicked");
  };

  return <MyChild onClick={handleClick} />;
}

function MyChild({ onClick }) {
  return <button onClick={onClick}>I am a child</button>;
}

//   5. Summary
// When thinking about performance tweaks, recall the statement:

// Profile before optimizing

// When deciding to use an optimization technique, such as memoization with useCallback(), do:

// Profile
// Quantify the increased performance (e.g. 150ms vs 50ms render speed increase)
// Ask yourself: does the increased performance, compared to increased complexity, worth using useCallback()?
// To enable the memoization of the entire component output I recommend checking my post Use React.memo() wisely.

// Do you know use cases that are worth using useCallback()? Please share your experience in a comment below.
