const post_id = document.querySelector('input[name="post-id"]').value;
const comment_text = document.querySelector(
  'textarea[name="comment-body"]'
).value;

const commentFormHandler = async (event) => {
  event.preventDefault();
  if (comment_text) {
    const response = await fetch("/api/comments", {
      method: "POST",
      body: JSON.stringify({ postId, comment_text }),
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      document.location.reload();
    } else {
      alert(response.statusText);
    }
  }
};

document
  .querySelector(".comment-form")
  .addEventListener("submit", commentFormHandler);
