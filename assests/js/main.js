var grid=document.getElementById("grid");
var imagePath=["assests/img/1.webp","assests/img/2.webp","assests/img/3.webp","assests/img/4.webp","assests/img/5.webp","assests/img/6.webp","assests/img/7.webp","assests/img/8.webp","assests/img/9.webp"];
var title=["minimal design","Paint wall","female light","fourth air","multiply fowl","together sign","green heaven","fly male","season face",]
for(var i=0 ; i<9;i++)
{
    let item = document.createElement("div");
    item.classList.add("item")
    item.innerHTML=`
    <div class="img">
    <img src="${imagePath[i]}" alt="" srcset="">
    <div class="overlay">   
        <p>+</p>  
    </div> 
    </div>
    <div class="content">
    <h4>
        <a>${title[i]}</a>
    </h4>
    <p>Animated, portfolio</p>
    </div>`
    grid.appendChild(item);
}
