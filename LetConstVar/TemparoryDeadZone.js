function abc() {
    console.log(a) // undefined
    console.log(b) // b & c temparory Dead Zone
    console.log(c)

    const c = 30;
    let b = 20;
    var a = 10;
}

abc()