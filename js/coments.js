function loadComments() {
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(response => response.json())
        .then(data => showSpecific(data));
}
loadComments();
function showSpecific(datum) {
    const reserve = document.getElementById('comentContainer');
    for (const show of datum) {
        const div = document.createElement('div');
        div.style.backgroundColor = 'red';
        div.innerHTML = `
        ${show.id}
        `;
        reserve.appendChild(div);

        // console.log(show.id);
    }

}