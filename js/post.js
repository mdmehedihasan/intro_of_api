function loadPost() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(post => displayPost(post))
};
loadPost();
function displayPost(post) {
    const container = document.getElementById('container');

    for (const posts of post) {
        const div = document.createElement('div');
        div.classList.add('postList');
        div.innerHTML = `
    <h1>${posts.title}</h1>
    <p>${posts.body}</p>
    `;
        container.appendChild(div);
    }
}

//add post
function addPost() {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: 'My new post',
            body: 'this is my posts',
            userId: 1
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then(res => res.json())
        .then(data => console.log(data))
}
