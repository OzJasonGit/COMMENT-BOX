


function render(data){
    let html = <div class='commentBox'> 
                    <div class='leftPanelling'> 
                    </div> 

                    <div class='rightPanel'> 
                        <span> "+ data.name +" </span> 
                        <div class='date'> "+ data.date +" </div>
                    <p> "+ data.body +" </p>
                    </div>
                    
                    <div class='clear'></div>
                </div>
    $(#'COMMENTS').append(html);
}






$(document).ready(function(){
    const comment = [ {name:"", email:"", commentText:""} ];

    for (let i=0; i<comment.length; i+=1){
        render(comment[i]);   
    }

    $(#'addcomment').click(function(){       
        let addObject = {
            "name": $('#name').val(),
            "email":$('#email').val(),
            "commentText":$('#commentText').val()
        };
        console.log(addObject);
        comment.push(addObject);
        render(addObject);

    });

});








