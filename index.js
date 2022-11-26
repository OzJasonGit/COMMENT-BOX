
















//card
const detailsCard = (name, email, comment, button) => {

  return {
    name,
    email,
    comment,
    button,
    showDetails(){
    return `

                <input id="NAME" placeholder="name"></input>
                <input id="EMAIL" placeholder="oznwachukwu@deathstar.com"></input>


                <textarea type="text" id="COMMENT" placeholder="What's on your mind?">
                </textarea>


                <div class="d-flex">
                <button class="ml-auto" onclick="addToFunc(); eraseText()" type="button">
                    ${this.button}
                </button>
                </div>
                </div>
                </div>


                <div id="CONTAINER" class="row">
                  <div id="GRID" class="col-12">
                    <div id="ADD-TASK-NAME" class="output"></div>
                    <div id="ADD-TASK-EMAIL" class="output"></div>
                    <div id="ADD-TASK-COMMENT" class="output"></div>
                  </div>
                </div>
             
                `
  }
};
};

let detailsUpdate = detailsCard("Name", "Email", "Comment", "SUBMIT COMMENT!");

document.querySelector("aside.card").innerHTML = detailsUpdate.showDetails();

const addToFunc = () =>{
   // gets value from main text area
    let userName = detailsUpdate.name;
    let nameInput = document.getElementById('NAME').value;
    
     // creates element for the value of nameInput
    let nameTitle = document.createElement("h6");
    let nameStatus = document.createElement("p");
  
    nameTitle.innerHTML = userName;
    //creates a node for the original input
    let textnodeName = document.createTextNode(nameInput);
    nameStatus.appendChild(textnodeName);
    nameStatus.prepend(nameTitle);
   
    document.getElementById('ADD-TASK-NAME').appendChild(nameStatus);
    nameStatus.classList.add("statusBox");
    //userName.classList.add("title"); 
    
    



  
    let userEmail = detailsUpdate.email;
    let emailInput = document.getElementById('EMAIL').value;
    
     // creates element for the value of emailInput
    let emailTitle = document.createElement("h6");
    let emailStatus = document.createElement("p");
  
    emailTitle.innerHTML = userEmail;
    //creates a node for the original input
    let textnodeEmail = document.createTextNode(emailInput);
    emailStatus.appendChild(textnodeEmail);
    emailStatus.prepend(emailTitle);

    document.getElementById('ADD-TASK-EMAIL').appendChild(emailStatus);
    nameStatus.classList.add("statusBox");
    //userName.classList.add("title"); 






    let userComment = detailsUpdate.comment;
    let commentInput = document.getElementById('COMMENT').value;
    
     // creates element for the value of commentInput
    let commentTitle = document.createElement("h6");
    let commentStatus = document.createElement("p");
  
    commentTitle.innerHTML = userComment;
    //creates a node for the original input
    let textnodeComment = document.createTextNode(commentInput);
    commentStatus.appendChild(textnodeComment);
    commentStatus.prepend(commentTitle);

    document.getElementById('ADD-TASK-COMMENT').appendChild(commentStatus);
    nameStatus.classList.add("statusBox");
    //userName.classList.add("title"); 



    
    

   
 
};






