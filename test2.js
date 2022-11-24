











































   
function comment(){

    let commentObject = { 
        name:document.getElementById('NAME').value,
        email:document.getElementById('EMAIL').value,
        comment:document.getElementById('COMMENTS').value,
    }

    let comment = [commentObject.name, commentObject.email, commentObject.comment ]
   
    let personsComment = comment

    console.log(personsComment)

    document.getElementById("NAME-MESSAGE").innerText = personsComment;
   }
   comment();



document.addEventListener('DOMContentLoaded',() => {
    document.getElementById('BUTTON').addEventListener('click',personsComment);
});