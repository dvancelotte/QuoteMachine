 $(document).ready(function() {
     
     function changueElever(turn){
         
            if(turn ==0){
                    $("#getQuote").attr("src","leverOff.png");    
        }
         else{
              $("#getQuote").attr("src","leverOn.png");  
         }
     }
     
     
     
    $("#getQuote").on("click", function(){
      $.getJSON("http://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=?", function(json) {
          
      var html = '"' + json.quoteText + '"' + " - " +json.quoteAuthor;  
      var link = "https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=" + html;
      $("#share").attr("href",link); 
      changueElever(0);
      setTimeout(function(){
            changueElever(1);
           $(".quoteMessage").html(html);
             
        }, 500);
          
          
          
     
});
      
      
      // Only change code above this line.
    });

  });