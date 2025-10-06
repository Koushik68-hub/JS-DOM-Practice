const paragraph = document.getElementById('para');
const button = document.getElementById('btn');

button.addEventListener('click',function(){
    paragraph.innerText = 'Hello, JavaScript DOM!';
});
console.log("hello world");

let toggle = 0
let buttonClicked = () => {
    if(toggle == 0){
        toggle = true;
        document.body.style.backgroundColor = 'red'
    }
    else{
        toggle = false;
        document.body.style.backgroundColor = 'white';
    }
}

const num = document.getElementById('count');
const button2 = document.getElementById('btn3');

let count = 0;

button2.addEventListener("click", function() {
    count++ ;
    num.innerText = count;
})

// const input = document.getElementById('text1');
// const text = document.getElementsById('text2');

// input.addEventListener("input", function(){
//     text.textContent = input.value;
// })


const img = document.querySelector("#image");
const prevButton = document.querySelector("#prevBtn")
const nextButton = document.querySelector("#nextBtn")

const images = ['image/portfolio-1.jpg','image/portfolio-3.jpg', 'image/portfolio-4.jpg', 'image/portfolio-5.jpg'];

let index = 0;

prevButton.addEventListener("click", function(){
    index--;
    if(index < 0){
        index = images.length - 1;
    }
    img.setAttribute("src", images[index]);
});

nextButton.addEventListener("click", function(){
    index++;
    if(index >= images.length){
        index = 0;
    }
    img.setAttribute("src", images[index]);
});

const para2 = document.getElementById('para2');
const btn4 = document.getElementById('btn4');

btn4.addEventListener("click", function(){
    if(para2.style.display === "none"){
        para2.style.display = "block";
        btn4.innerText = "Hide"
    }
    else{
        para2.style.display = "none";
        btn4.innerText = "Show";
    }
});

 const form = document.getElementById("form");
 const emailInput = document.getElementById('email')
 const warning = document.getElementById('warning');

 form.addEventListener("submit", function(e){
    e.preventDefault();

    if(emailInput.value.trim() === ""){
        warning.innerText = "Please enter your email"
    
    }
    else{
        warning.innerText = "";
        alert("From submitted succesfully!");
    }
 })

 const box = document.getElementById('div');
 
box.addEventListener("mouseover", function(){
    box.style.backgroundColor = "red"
})
box.addEventListener('mouseout', function(){
    box.style.backgroundColor = "";
})



// const deleteBtn = document.querySelectorAll(".delete-btn")

// deleteBtn.forEach(function(button){
//     button.addEventListener("click",function(){
//         this.parentElement.remove();
//     });
// });

const deleteButtons = document.querySelectorAll(".delete-btn");

// Add click event to each button
deleteButtons.forEach(function(button) {
  button.addEventListener("click", function() {
    this.parentElement.remove(); // remove the parent <li>
  });
});

