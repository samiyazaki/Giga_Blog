const post_id = document.querySelector('input[name="post-id"]').value;


const editFormHandler = async (event) => {
    event.preventDefault();

    const title = document.querySelector('input[name="post-title"]').value;
    const content = document.querySelector('textarea[name="post-content"]').value;

    const response = await fetch(`/api/posts/${post_id}`, {
        method: "PUT",
        body: JSON.stringify({
            title,
            content,
        }),
        headers: {
            "Content-Type": "application/json",
        },
    }); 
    
    if (response.ok) {
        document.location.replace("/dashboard/");
    } else {
        alert(response.statusText);
    }
    document.location.replace("/dashboard/");
};

const deleteClickHandler = async () => {
    await fetch('/api/posts/${post_id}', {
        method: "DELETE",
        });

    document.location.replace("/dashboard/");
};

document
    .querySelector(".edit-post-form")
    .addEventListener("submit", editFormHandler);
document
    .querySelector(".delete-post-btn")
    .addEventListener("click", deleteClickHandler);
