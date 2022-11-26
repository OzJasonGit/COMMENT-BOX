









































let commentArr = []

   
function comment(){

    let commentObject = { 
        name:document.getElementById('NAME').value,
        email:document.getElementById('EMAIL').value,
        comment:document.getElementById('COMMENTS').value,
    };

    let comment = [commentObject.name, commentObject.email, commentObject.comment ]

    commentArr.unshift(comment)
   
    let personsComment = commentArr
    document.querySelector('form').reset(); 

    console.log(personsComment)

    document.getElementById("NAME-MESSAGE").innerText = personsComment;
   }
   comment();


   localStorage.setItem(commentArr, comment)
   console.log(localStorage);



document.addEventListener('DOMContentLoaded',() => {
    document.getElementById('BUTTON').addEventListener('click',personsComment);
});