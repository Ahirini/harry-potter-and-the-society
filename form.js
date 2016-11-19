$('#submit').on('click', function(){
    $('.result-text').hide();
    mySubmit();
    return false;
});


function mySubmit(){
   var result = $('input[name=book]:checked').val();
   console.log( result);
   var book ='';
switch(result) {
    case "stone":
        book = '#stone';
        break;
    case "chamber":
        book = '#chamber';
        break;
    case "prisoner":
        book = '#prisoner';
        break;
    case "goblet":
        book = '#goblet';
        break;
    case "order":
        book = '#order';
        break;
    case "prince":
        book = '#prince';
        break;
    case "hallows":
        book = '#hallows';
        break;
}
    
 $(book).show(); 
    return false;
}
        
