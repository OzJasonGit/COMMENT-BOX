


















//card
const elementCard = ([name, email, date, button]) => {
  return {
    name,
    email,
    date,
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
                        <input  type="text"  id="full-name" class="TEXT-AREA"  placeholder="Full Name">${this.name}
                    </input>                       
                    </form>
                

                    <h3 id="LABEL-2"><label>Email Address</label></h3>
                    <form id="TEXT-AREA-2">
                        <input  type="text"  id="email-address"  class="TEXT-AREA"  placeholder="darth.vader@deathstar.com"> <p id='result'></p>       
                    </input>                  
                    </form>

                    <h3 id="DATE"><label>Date</label></h3>
                    <form id="TEXT-AREA-3">
                        <input type="date" id="DATE" class="TEXT-AREA">
                        <p id='result'></p>
                        </input>
                    </form>
                
                    
                    <form id="COMMENT-AREA">
                        <textarea id="comments" class="TEXT-AREA">
                        </textarea>   
                    </form>

                    <button id="SUBMIT-COMMENT">
                        <h3>SUBMIT COMMENT!</h3>                       
                    </button>

                

            <div id="COMMENT-HOLDER">
                <h3>COMMENTS</h3>
                <div id="COMMENTS-APPEND">

        </div>`
        }
      };
    };

    let elementsUpdate = elementCard(['Oz Nwachukwu', 'oz.nwachukwu', 'date', 'button']); 
    document.querySelector("aside.center-holder").innerHTML = elementsUpdate.documentBody();