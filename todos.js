var li=document.querySelectorAll("li");    
for(var i=0; i<li.length; i++){
    li[i].addEventListener("click",function(){
        this.classList.toggle("clicked");
    })
}

var span = document.querySelectorAll("span");
for(var i=0; i<span.length; i++){
    span[i].addEventListener("click",function(event){
        this.closest("li").remove();
        event.stopPropagation();
    })
}

function addTodo(){
    var Li = document.createElement("li");
    Li.innerHTML = "<span><i class='fas fa-trash'></i></span> " + input.value;
    return Li;
}

var ul = document.querySelector("ul");
var input = document.querySelector("input[type='text']");
input.addEventListener("keydown",function(event){
    if(event.key === "Enter"){
        ul.appendChild(addTodo());
        input.value="";
    }
})

var plus = document.querySelector(".fa-plus");
plus.addEventListener("click",function(){
    input.classList.toggle("fade");
})
