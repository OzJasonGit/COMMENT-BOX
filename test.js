








































let comment = [];

const addComment = (ev)=>{
    ev.preventDefault(); // stops form from submitting without content

    //user inputs are stored in a js object
    let comment = {
        name: document.getElementById('NAME').value,
        emailaddress: document.getElementById('EMAIL').value,
        message: document.getElementById('COMMENTS').value
    }

    //add comment object to comments array

    document.getElementById("CLOCK").innerText = time;


    comment.push(comments);
    document.querySelector('form').reset(); // clear the form for the next entry 

    console.warn('added', {comments});
    let pre = document.querySelector('MESSAGE pre');
    pre.textContent = '\n' + JSON.stringify(comments, '\t', 2);


}





//ensure page is loaded before running function
document.addEventListener('DOMContentLoaded',() => {
    document.getElementById('BUTTON').addEventListener('click',addComment);
});



//render clock in html 
    
    
    clock();






function comment(){
    let personsName = document.getElementById('NAME').value;

    console.log(personsName)

    document.getElementById("NAME-MESSAGE").innerText = personsName;
   }
   date();