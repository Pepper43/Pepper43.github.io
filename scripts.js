function updateClock()
{
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    document.getElementById('clock').textContent = `${hours}:${minutes}:${seconds}`;
}
setInterval(updateClock, 1000); // Update the clock every second
updateClock(); // Initialize the clock immediately
/*---------------------------------------------------------------------------------*/
function addComment()
{
    // Get the comment input value
    const commentInput = document.getElementById("commentInput");
    const commentText = commentInput.value.trim();

    if (commentText)
    {
        // Create a new comment element
        const commentElement = document.createElement("div");
        commentElement.className = "comment";
        commentElement.textContent = commentText;

        // Append the comment to the comments list
        const commentsList = document.getElementById("commentsList");
        commentsList.appendChild(commentElement);

        // Clear the input field
        commentInput.value = "";
    } 
    else
    {lert("Please write a comment before posting!");}
}
/*---------------------------------------------------------------------------------*/
