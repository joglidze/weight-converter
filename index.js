let input1=document.querySelector(".input1");
let btn=document.querySelector("button");
let kg=document.querySelector("h3");
btn.addEventListener("click",function(event){
    let result=input1.value/2.2;
    let str=result.toString();
    str=str.slice(0,4)
    kg.style.opacity=1;
    return kg.innerHTML=`KG=${str}`
    

})