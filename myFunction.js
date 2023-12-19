let button = document.getElementsByClassName("btn-cart");
let shoppingBasket = document.querySelector(".shopping-basket");
let tax = document.querySelector(".tax")
let priceWithTax = document.querySelector(".price-with-tax");
let itemNone = document.querySelector(`.no-item`)
let tableResult = document.querySelectorAll(`.table-result`)
let tableBody = document.querySelector(`.table-body`)
let quantitylist= new Array(button.length).fill(0)
let numberOfItem = 0
let result =0
let taxpal = 0

function display (button,quantity){
  let itemName = button.parentNode.parentNode.children[0].innerHTML;
  let itemPrice = parseInt(button.parentNode.parentNode.children[2].innerHTML)
  let cell = []
  let row;
  let priceWithQuantity = quantity*itemPrice;
  if(quantity === 1){
    row = document.createElement("tr");
    row.id = itemName
    console.log(row.id)
    for(let i =0;i<5;i++){
      cell[i] = document.createElement("td")
      cell[i].id = itemName + i
      console.log(cell[i].id)
    }
    cell[0].innerHTML = numberOfItem ; 
    cell[1].innerHTML = itemName
    cell[2].innerHTML = itemPrice
    cell[3].innerHTML = quantity
    cell[4].innerHTML = priceWithQuantity

    for(let i =0 ; i<5;i++){
      row.appendChild(cell[i])
    }
    tableBody.appendChild(row)
  }
  else{
     document.getElementById(itemName +"1").innerHTML = itemName; 
     document.getElementById(itemName + "2").innerHTML = itemPrice; 
     document.getElementById(itemName+ "3").innerHTML = quantity; 
     document.getElementById(itemName+ "4").innerHTML = priceWithQuantity;
  }
}



for(let i = 0; i<button.length;i++){
  button[i].onclick = function(){
    quantitylist[i]++;
    result +=parseInt(button[i].parentElement.parentElement.children[2].innerHTML)
    
    taxpal =0
    
    taxpal = (result*5) / 100
    
    tax.textContent = taxpal
    
    priceWithTax.textContent = result + taxpal
    
    itemNone.classList.add("hidden")

    for(let i =0; i<tableResult.length;i++){
      tableResult[i].classList.remove("hidden")
    }


    if( quantitylist[i] === 1){
      ++numberOfItem
    }
    display(button[i],quantitylist[i])
  }
}


// Captcha

const fonts = ["cursive","sans-serif","serif" ,"monospace"]
let captchaValue = "";

function generateCaptcha(){
  let value = btoa(Math.random() * 10000000)
  value = value.substr(0.5+Math.random() * 5)
  captchaValue = value;
}




function setCaptcha(){
 let html = captchaValue.split("").map((char=>{
    const rotate =-200 + Math.trunc(Math.random()*100)
    const font = Math.trunc(Math.random() *fonts.length)
    return `  
      <span style = "transform:rotate(${rotate}deg);font-family:${fonts[font]}">${char}</span>
    
    `
  })).join(" ");
  document.querySelector(`.preview`).innerHTML = html
}

function initCaptcha(){
  document.querySelector(`.captcha-refresh`).addEventListener("click",function(){
    generateCaptcha();
    setCaptcha();
  })
  generateCaptcha();
  setCaptcha();
}
initCaptcha();

let userName = /[\u0600-\u06FF]/;
const allowedNumbers = '051|015|014|016|052|022|023|033|043|041|031|021|011';

// Create a regular expression pattern
const pattern = new RegExp(`^(${allowedNumbers})\\d*`);

const phoneNumber = /^09\d*$/;

document.querySelector(`.submit`).addEventListener("click",function(){
  let inputCaptchaValue =document.querySelector(`.captcha-input`).value
  // if(inputCaptchaValue == captchaValue){
  //   swal
  // }
})
