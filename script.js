// console.log("hey hey")

const inputField = document.getElementById('post-title')
const textField = document.getElementById('post-body')
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
    // console.log(postsArray)
    renderPostPage()
})


form.addEventListener('submit', function(e){
    e.preventDefault()
    let title = inputField.value
    let body = textField.value
    
})





