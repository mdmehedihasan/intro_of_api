//load data
function loadData() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(data => console.log(data))
}
//load user
function loadUser() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(user => displayUser(user))
}
//post call
function postUser() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => console.log(data));
}
function displayUser(user) {
    const ul = document.getElementById('users');
    for (const users of user) {
        console.log(users.name);
        const li = document.createElement('li');
        li.innerText = `name: ${users.name} | email: ${users.email}`;
        ul.appendChild(li);
    }
}