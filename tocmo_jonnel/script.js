
function buttonToggle () {

    let nameInput = document.querySelector("#name").value.trim();
    let commentBox = document.querySelector("#comment").value.trim();
    let commentButton = document.querySelector("#comment_button");

    if(nameInput.length > 0 && commentBox.length > 0) {
        commentButton.disabled = false;
    } else {
        commentButton.disabled = true;
    }
}

function addComment() {
    let nameInput = document.querySelector('#name').value.trim();
    let messageInput = document.querySelector('#message').value.trim();
    let commentSection = document.querySelector('.comment-section');

    if (nameInput.length > 0 && messageInput.length > 0) {
        const commentBox = document.createElement('div');
        commentBox.className = 'comment-box';

        const comment = document.createElement('p');
        comment.className = 'comment-text';
        comment.textContent = `${nameInput}: ${messageInput}`;

        commentBox.appendChild(comment);
        commentSection.appendChild(commentBox);

        document.querySelector('#name').value = '';
        document.querySelector('#message').value = '';

        document.querySelector('#comment_button').disabled = true;
    }
}
