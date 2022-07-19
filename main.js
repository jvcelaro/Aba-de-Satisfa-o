let listItems=document.querySelectorAll('li');
let submit=document.getElementById('submit');
let thank=document.getElementById('thank');
let rateElement=document.getElementById('rate');
let value=document.getElementById('value');
var rate;

listItems.forEach(item=>{
    item.addEventListener('click',(e)=>{
        if(rate){
            rate.style.backgroundColor= "#272E38";
            rate.style.color= "#818A96";
        }
        e.target.style.backgroundColor= "#7C8798";
         e.target.style.color= "#fff";
        rate=e.target;
    })
})


submit.addEventListener('click',(e)=>{
    rateElement.style.display="none";
    thank.style.display="block";
    let val=rate ?rate.innerText :0;
    value.innerText = `You selected ${val} of 5 `;
})
