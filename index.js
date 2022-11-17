

//
function render(data){
    let html = <div id='COMMENT-BOX'> 
                    
                    <div id='COMMENTS-APPEND'> 
                        <span> "+ data.name +" </span> 
                        <div id='ACTUAL-DATE'> "+ data.date +" </div>
                        <p> "+ data.body +" </p>
                    </div>
                    
                    <div class='clear'></div>
                </div>
    $('COMMENTS').append(html);
}






$(document).ready(function(){
    const comment = [ {name:"", email:"", commentText:""} ];

    for (let i=0; i<comment.length; i+=1){
        render(comment[i]);   
    }

    $('SUBMIT-COMMENT').click(function(){       
        let addObject = {
            "name": $('#name').val(),
            "date": $('#date').val(),
            "email":$('#email').val(),
            "commentText":$('#commentText').val()
        };
        console.log(addObject);
        comment.push(addObject);
        render(addObject);
        $('#name').val('');
        $('#date').val('dd/mm/yyyy');
        $('#email').val('');
    });

});








