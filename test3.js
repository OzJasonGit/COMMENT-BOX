











//card
const detailsCard = (name, email, comment, button) => {

  return {
    name,
    email,
    comment,
    button,
    showDetails(){
    return `<h4>${this.name}</h4>


                <input id="NAME" placeholder="name"></input>
                <input id="EMAIL" placeholder="oznwachukwu@deathstar.com"></input>


                <textarea type="text" id="INPUT-STATUS" placeholder="What's on your mind?">
                </textarea>


<div class="d-flex">
<button class="ml-auto" onclick="addToFunc(); eraseText()" type="button">${this.button}</button>
</div>
</div>
</div>
<div class="row">
<div class="col-12">
<div id="addTask">
</div>
</div>
</div>
`
  }
};
};

let detailsUpdate = detailsCard("Comment Box", "oz.nwachukwu.com", "Update Status");

document.querySelector("aside.card").innerHTML = detailsUpdate.showDetails();

const addToFunc = () =>{
   // gets value from main text area
    let userName = detailsUpdate.name;
    let nameInput = document.getElementById('INPUT-STATUS').value;

    //gets value from email input
    let userEmail = detailsUpdate.email;
    let emailInput = document.getElementById('EMAIL').value;
    

     // creates element for the value of nameInput
    let title = document.createElement("h6");
    let status = document.createElement("p");
    let reply = document.createElement("ul");
   
    

   
    title.innerHTML = userName;
  //creates a node for the original input
    let textnode = document.createTextNode(nameInput);
    status.appendChild(textnode);
    status.prepend(title);
    status.appendChild(reply);

   
 
    document.getElementById('addTask').appendChild(status);
    status.classList.add("statusBox");

    replyList.classList.add("reply");
    //userName.classList.add("title");      
};


const eraseText = () => {
  //erases placeholder text in textarea
    document.getElementById("inputStatus").value = "";
};