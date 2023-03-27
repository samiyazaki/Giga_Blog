const postId = document.querySelector('input[name="post-id"]').value;

console.log("testing");
console.log(postId);

const commentFormHandler = async (event) => {
  event.preventDefault();

  const commentContent = document.querySelector('textarea[name="comment-body"]').value.trim();
  console.log(commentContent);

  if (commentContent) {
    const response = await fetch(`/api/comment`, {
      method: 'POST',
      body: JSON.stringify({ commentContent, postId }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.reload();
    } else {
      alert('Failed to create comment');
    }
  };
}

document
  .querySelector('#new-comment-form')
  .addEventListener('submit', commentFormHandler);