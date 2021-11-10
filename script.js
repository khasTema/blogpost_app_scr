const inputField = document.getElementById('post-title')
const textField = document.getElementById('post-body')
const addingPost = document.getElementById('add-post')
const form = document.getElementById('new-post')
const recentPosts = document.getElementById('recent-posts')
let postsArray = []

function renderPostPage(){
    let recentPostsBody = ''
    for(let post of postsArray){
       recentPostsBody += `
            <div class="recent-posts_item">
                <h3>${post.title}</h3>
                <p>${post.body}</p>
            </div>
        `
        recentPosts.innerHTML = recentPostsBody
   }
}

fetch('https://jsonplaceholder.typicode.com/posts')
.then(response => response.json())
.then(data => {
    postsArray = data.slice(0,8)
    renderPostPage()
})

addingPost.addEventListener('click', function(){
    form.classList.add('post-form')
})

form.addEventListener("submit", function(e){
    e.preventDefault()
    let postTitle = inputField.value
    let postBody = textField.value
    const data = {
        title: postTitle,
        body: postBody
    }
    console.log(data)

    const getRequest = {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'ContentType' : 'application/json'
        },
    }

    fetch('https://jsonplaceholder.typicode.com/posts', getRequest)
        .then(res => res.json())
        .then(newestPost => {

            console.log(newestPost)

            postsArray.unshift(newestPost)

            console.log(postsArray)

            renderPostPage()
            form.reset()
            form.classList.remove('post-form')
        })
    
})