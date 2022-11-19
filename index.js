
let commentsArray = [];

function dataCapture (ev) { 
    ev.preventDefault();

        let dataObject = {
            fullname: document.getElementById("fullname").value,
            emailaddress: document.getElementById("emailaddress").value,
            date: Date.now(),
            comments: document.getElementById("comments").value
        }

        commentsArray.push(dataObject);
        document.querySelector('form').reset();

        console.log('added', {dataObject});




        
  
document.addEventListener('DOMContentLoaded', () => {
document.getElementById('SUBMIT-COMMENT').addEventListener('click', dataCapture);
});


}


 









