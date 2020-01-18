
let land = ["Stockholm-Sverige", "Oslo-Norge", "Helsingfors-Finland", "Köpenhamn-Denmark", "Reykjavik-Island"];
let stad = document.getElementsByTagName("p");

 
    for(let i = 0; i < land.length; i++)
     {
         stad[i].addEventListener("click", function(){
             stad[i].innerHTML=land[i];
         });
     
    
    
     }
    