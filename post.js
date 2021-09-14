function getPost(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => showPost(data));
}


function showPost(posts){
    const blog = document.getElementById('posts');
    for(const post of posts){
        const div = document.createElement('div');
        div.innerHTML = `<h3>${post.title}</h3>
                         <p>${post.body}</p>`;
        div.classList.add('post');                 
        blog.appendChild(div);
    }
}