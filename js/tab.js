var tabs = document.querySelectorAll('.tab');
for (var i = 0; i < tabs.length; i++) {
    Tab(tabs[i]);    
}

function Tab(tab) {

 var span = tab.querySelectorAll(".t-title span");

 var tc = tab.querySelectorAll(".tc");

 for(let i=0;i<span.length;i++){
     span[i].onmouseover = function(){

         for(let j=0;j<span.length;j++){
             span[j].classList.remove("cur");
             tc[j].style.display="none";
             tc[i].style.display="block";
         }
         this.classList.add("cur");
         tc[i].style.display="block";
     }
 }
}