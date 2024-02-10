
// this is for the sliding menu 
let slide = document.querySelector("navbar");
let button = document.querySelector("button");
let btn = document.querySelector(".btn")
button.addEventListener("click", ()=>{
    slide.classList.toggle("active");
});

// this is for the userMessage
let chat = document.querySelector(".chat");
let message = document.querySelector(".message");
chat.addEventListener("click",()=>{
    message.style.height ="350px";
})
document.getElementById("close").addEventListener("click",()=>{
    message.style.height = "0";
});



// retreive user input and send it to the other user 
let btnForSubmit = document.getElementById('submit');
let userField = document.getElementById('userField');
let form = document.querySelector("form");
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    let result = e.target.userField.value;
    document.getElementById("user").innerHTML= result;
});
