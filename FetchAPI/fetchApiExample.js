fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=> response.json())
.then((data)=>console.log(data))

async function postData(url='',data={}){
    const response = await fetch(url, {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body:JSON.stringify(data)
    });
    return response.json()
}

postData('https://jsonplaceholder.typicode.com/users',{answer: 10}).then((data)=>{
    console.log(data);
})

const data = {username: 'example'};
fetch('https://jsonplaceholder.typicode.com/users',{
    method: 'POST',
    headers: {
        'Contact-Type': 'application/json',
    },
    body: JSON.stringify(data),
}).then((response)=>response.json())
.then((data)=>{
    console.log('Success:', data)
})
.catch((error)=>{
    console.log('Error:', error)
})