


const commentArea = document.getElementsByClassName('aside.card');

const fullname = 'Oz Nwachukwu';
const email = dataObject.emailaddress.value;
const date = dataObject.date.value;
const comments = dataObject.comments.value;

const commentsUpdate = `
    <div id="COMMENTS-APPEND">
        <h3 id="nameResult">${fullname}</h3>
        <h3 id="emailResult">${email}</h3>
        <h3 id="dateResult">${date}</h3>
        <p> id="commentResult">${comments}</p>
    </div>`;
            
commentArea.innerHTML = commentsUpdate;
   
    










