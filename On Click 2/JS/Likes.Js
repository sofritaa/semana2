var likeHandler = (e) => {
    let num = parseInt(e.previousElementSibling.firstChild.innerText)
    e.previousElementSibling.firstChild.innerText = num + 1;
}