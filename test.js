








































let comments = [];

const addComment = (ev)=>{
    ev.preventDefault(); // stops form from submitting without content

    //user inputs are stored in a js object
    let comment = {
        name: document.getElementById('#NAME').value,
        emailaddress: document.getElementById('#EMAIL').value,
        message: document.getElementById('#COMMENTS').value
    }

    //add


}


















//ensure page is loaded before running function
document.addEventListener('DOMContentLoaded',()=>{
    document.getElementById('BUTTON').addEventListener('click',addComment);
});