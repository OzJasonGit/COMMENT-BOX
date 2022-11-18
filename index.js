


















//card
const elementCard = ([name, email, date, comments, button]) => {
  return {
    name,
    email,
    date,
    comments,
    button,

    documentBody(){
    return `<div id="MAIN-CONTAINER">
        
            
            <section id="TITLE">               
                <h1 id="GRID">Comment Box!</h1>                    
            </section>
                   
            
            <div id="COMMENT_BOX" class="HOLDER">
                <div id="COMMENT_GRID">
                
                    <h3 id="LABEL-1><label">Name</label></h3>
                    <form id="TEXT-AREA-1">
                        <input  type="text"  id="full-name" class="TEXT-AREA"  placeholder="Full Name">
                    </input>                       
                    </form>
                

                    <h3 id="LABEL-2"><label>Email Address</label></h3>
                    <form id="TEXT-AREA-2">
                        <input  type="text"  id="email-address"  class="TEXT-AREA"  
                        placeholder="darth.vader@deathstar.com">       
                    </input>                  
                    </form>

                    <h3 id="DATE"><label>Date</label></h3>
                    <form id="TEXT-AREA-3">
                        <input type="date" id="DATE" class="TEXT-AREA">
                        <p id='result'></p>
                        </input>
                    </form>
                
                    
                    <form id="COMMENT-AREA">
                        <textarea id="comments" type="text" class="TEXT-AREA">${this.comments}
                        </textarea>   
                    </form>

                    <button onclick="dataCapture" id="SUBMIT-COMMENT">
                        <h3>SUBMIT COMMENT!</h3>                       
                    </button>

                

            <div id="COMMENT-HOLDER">
                <h3>COMMENTS</h3>
                <div id="COMMENTS-APPEND">

        </div>`
        }
      };
    };

function dataCapture () { 

    let name = document.getElementById("full-name").value;
    let email = document.getElementById("email-address").value;
    let date = document.getElementById("date").value;
    let comments = document.getElementById("comments").value;

    

    document.write("Hello!!, " + name);
}
    

    
let elementsUpdate = elementCard([]); 
document.querySelector("aside.center-holder").innerHTML = elementsUpdate.documentBody();







function dataCapture () {

        


        

        let addObject = {'full-name': name,
                         'email': email,
                         'date': date,
                         'comments': comments        
        };


let commentsArr = []


}

    


