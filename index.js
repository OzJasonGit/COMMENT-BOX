














function render(data){
    let html = <div class='commentBox'> <div class='leftPanelling'> 
    <img src='https://placeholdit.img.net/~text?w=100&h=100'/> </div> 
    <div class='rightPanel'> <span> "+ data.name +" </span> <div class='date'> "+ data.date +" </div>
    <p> "+ data.body +" </p></div><div class='clear'></div></div>"
    $(#'container').append(html);
}



$(document).ready(function(){
    const comment = [ {name:"", email:"", commentText:""} ];

    for (let i=0; i<comment.length; i+=1){
        render(comment[i]);   
    }

    $(#'addcomment').click(function(){       
        let addObject = {"name":,
                         "email":,
                         "commentText":}

    });

});








