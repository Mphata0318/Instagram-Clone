function toggleLike(like){
    like.classList.toggle('Liked');
    console.log("liked");
}

function searchPosts(search){
    const posts = document.querySelectorAll('.post');
    posts.forEach(post =>{
        const username = post.querySelector('.username').textContent.toLowerCase();
        const caption = post.querySelector('.caption-text').textContent.toLowerCase();
        if (username.includes(search.toLowerCase()) || caption.includes(search.toLowerCase())){
            post.style.display = 'block';
            console.log("searched");
        }
        else{
            post.style.display = 'none';
        }
    });
}