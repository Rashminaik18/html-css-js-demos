let ul=document.querySelector("ul");
let button=document.querySelector("button");
let input=document.querySelector("input");
button.addEventListener("click",function(){
    li=document.createElement("li");
    li.innerText=input.value;
    ul.appendChild(li);
    input.value="";
    
})