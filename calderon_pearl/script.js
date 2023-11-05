function onTextChange() {
    let name = document.getElementById("name");
    let comment = document.getElementById("comment");
    let commentButton = document.getElementById("comment_button")

    if (comment.value.length > 0 && name.value.length > 0) {
        commentButton.disabled = false;
    }
    else {
        commentButton.disabled = true;
    }
}