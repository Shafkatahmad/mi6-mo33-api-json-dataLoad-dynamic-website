function loadPosts() {
  fetch('https://jsonplaceholder.typicode.com/posts')
  .then(res => res.json())
  .then(data => displayPosts(data));
}

function displayPosts(posts) {
  const postDiv = document.getElementById('posts-container');
  for(const post of posts) {
    const userId = document.createElement('h4');
    userId.classList.add('post');
    userId.innerText = `user ID: ${post.userId}`;
    postDiv.appendChild(userId);
    const id = document.createElement('h4');
    id.innerText = `ID: ${post.id}`;
    postDiv.appendChild(id);
    const title = document.createElement('h3');
    title.innerText = `Title: ${post.title}`;
    postDiv.appendChild(title);
    const body = document.createElement('h3');
    body.innerText = `Body: ${post.body}`;
    postDiv.appendChild(body);
  }
}

loadPosts();