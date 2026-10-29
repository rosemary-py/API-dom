const getPostForm = document.getElementById("getPostForm");
const getPostInput = document.getElementById("getPostInput");
const getPostTitle = document.getElementById("getPostTitle");
const getPostBody = document.getElementById("getPostBody");
const getPostIds = document.getElementById("getPostIds");



 async function getPost(postId) {
   const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`,);
   const data= await response.json();
   return data;
}


getPostForm.addEventListener("submit",async function(event){
 event.preventDefault();
 const postId = getPostInput.value;
  const post = await getPost(postId);
  const {userId, id, title, body} = post;
 getPostTitle.textContent = title;
 getPostBody.textContent = body;
 getPostIds.textContent = `PostId:${id},UserId:${userId}`;

})

//POSTS
const getPostsForm = document.getElementById("getPostsForm");
const getPostUl = document.getElementById("getPostsUl");



async function getPosts() {
   const response = await fetch(`https://jsonplaceholder.typicode.com/posts/`);
   const data= await response.json();
   return data;
}


getPostsForm.addEventListener("submit",async function(event){
 event.preventDefault();
  const posts = await getPosts();
  getPostsUL.innerHTML = posts.map(function (post, index, posts){
    const{id,userId,title,body}=post;
    return`<li>
    <article>
    <h2> ${title}</h2>
     <p> ${body}</p>
    <p>PostId: ${id}, UserId: ${userId}</p>
    </article>
    </li>`;
  
  })

})
//NEW POST
const postPostForm = document.getElementById("postPostForm");
const postPostInputTitle = document.getElementById("postPostInputTitle");
const postPostInputBody = document.getElementById("postPostInputBody");
const postPostInputUserId = document.getElementById("postPostInputUserId");
const postPostTitle = document.getElementById("postPostTitle");
const postPostBody = document.getElementById("postPostBody");
const postPostIds = document.getElementById("postPostIds");


async function postPost(title,body,userId) {
   const response = await fetch(`https://jsonplaceholder.typicode.com/posts`,{
    method:"POST",
    body:JSON.stringify({
      title: title,
      body: body,
      userId: userId,
    }),
     headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
});
   const data = await response.json();
   return data;
     };
    
 postPostForm.addEventListener("submit",async function(event){
 event.preventDefault();
 const title = postPostInputTitle.value;
 const body = postPostInputBody.value;
 const userId = postPostInputUserId.value;

 const post = await postPost(title,body,userId);

 const { id,userId:newUserId,  title:newTitle, body:newBody} = post;

 postPostTitle.textContent =newTitle;
 postPostBody.textContent = newBody;
 postPostIds.textContent = `PostId:${id}, UserId: ${newUserId}`

});

//PUT

const putPostForm = document.getElementById("putPostForm");
const putPostInputTitle = document.getElementById("putPostInputTitle");
const putPostInputBody = document.getElementById("putPostInputBody");
const putPostInputUserId = document.getElementById("putPostInputUserId");
const putPostInputPostId = document.getElementById("putPostInputPostId");
const putPostTitle = document.getElementById("putPostTitle");
const putPostBody = document.getElementById("putPostBody");
const putPostIds = document.getElementById("putPostIds");
const putPostId = document.getElementById("putPostId");

async function putPost({id,title,body,userId}) {
const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
  method: 'PUT',
  body: JSON.stringify({
    id,
    title,
    body,
    userId,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
});

  const data = await response.json();
  console.log(data);

  return data;
  };
    
 putPostForm.addEventListener("submit",async function(event){
 event.preventDefault();
 const postId = putPostInputPostId.value;
 const title = putPostInputTitle.value;
 const body = putPostInputBody.value;
 const userId = putPostInputUserId.value;

 const post = await putPost({id: postId, title, body, userId});

 const { id, userId:newUserId, title:newTitle, body:newBody} = post;

 putPostTitle.textContent =newTitle;
 putPostBody.textContent =newBody;
 putPostIds.textContent = `PostId:${id}, UserId: ${newUserId}`

});

//PATCH

const patchPostInputTitle = document.getElementById("patchPostInputTitle");
const patchPostInputBody = document.getElementById("patchPostInputBody");
const patchPostInputUserId = document.getElementById("patchPostInputUserId");
const patchPostInputPostId = document.getElementById("patchPostInputPostId");
const patchPostTitle = document.getElementById("patchPostTitle");
const patchPostBody = document.getElementById("patchPostBody");
const patchPostIds = document.getElementById("patchPostIds");
const patchPostId = document.getElementById("patchPostId");

async function patchPost({id,title,body,userId}) {
const response = await fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'PATCH',
  body: JSON.stringify({
    id,
    title,
    body,
    userId,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
});

const data = await response.json();
  
  return data;
  };
  
 patchPostForm.addEventListener("submit",async function(event){
 event.preventDefault();
 const postId = patchPostInputPostId.value;
 const title = patchPostInputTitle.value;
 const body = patchPostInputBody.value;
 const userId = patchPostInputUserId.value;

 const post = await patchPost({id: postId, title, body, userId});

 const { id, userId:newUserId, title:newTitle, body:newBody} = post;

 patchPostTitle.textContent =newTitle;
 patchPostBody.textContent =newBody;
 patchPostIds.textContent = `PostId:${id}, UserId: ${newUserId}`

});

//DELETE

const deletePostForm = document.getElementById("deletePostForm");
const deletePostInput = document.getElementById("deletePostInput");
const deletePostTitle = document.getElementById("deletePostTitle");
const deletePostBody = document.getElementById("deletePostBody");
const deletePostIds = document.getElementById("deletePostIds");



 async function deletePost(postId) {
   const response = await fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'DELETE',
});
   const data= await response.json();
   return data;
};


deletePostForm.addEventListener("submit",async function(event){
 event.preventDefault();
 const postId = deletePostInput.value;
  const post = await deletePost(postId);
  const {userId, id, title, body} = post;
 deletePostTitle.textContent = title;
 deletePostBody.textContent = body;
 deletePostIds.textContent = `PostId:${id},UserId:${userId}`;

});