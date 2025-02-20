




let imageElement = document.getElementById("image");
let imageWidthelement=document.getElementById("imageWidth");
let warningMessageElement=document.getElementById("warningMessage");
let defaultImageWidth = 200;
imageElement.style.width = defaultImageWidth+"px";
imageWidthelement.textContent=defaultImageWidth+"px";
let maxvalueofwidth=300;
let minvalueOfwidth=100;
let originalvalueofWidth=200;

function increment() {
   if (originalvalueofWidth>=maxvalueofwidth){
       warningMessageElement.textContent="Too big. Decrease the size of the image";
   }
   else{
       originalvalueofWidth=originalvalueofWidth+5;
       let updatedWidth=originalvalueofWidth+"px"
       imageElement.style.width=updatedWidth;
       warningMessageElement.textContent="";
       imageWidthelement.textContent=updatedWidth;
       
   }
}
function decrement() {
   if (originalvalueofWidth<=minvalueOfwidth){
       warningMessageElement.textContent="Can't Visible. Increase the size of the image";
   }
   else{
       originalvalueofWidth=originalvalueofWidth-5;
       let updatedWidth=originalvalueofWidth+"px"
       imageElement.style.width=updatedWidth;
       warningMessageElement.textContent="";
       imageWidthelement.textContent=updatedWidth;
       
   }
}






let timerEl=document.getElementById("timer");
let quoteDisplayEl=document.getElementById("quoteDisplay");
let quoteInputEl=document.getElementById("quoteInput");
let resultEl=document.getElementById("result");
let submitBtnEl=document.getElementById("submitBtn");
let resetBtnEl=document.getElementById("resetBtn");
let countEl=document.getElementById("count")
let roleEl=document.getElementById("role");
let textareaHideEl=document.getElementById("textareaHide");


let value = 0
function myTimer() {
  value = value +1
  countEl.textContent= value ;
}

let myVar = setInterval(myTimer ,1000);


let option ={
    method:"GET"
}
 let url ="https://apis.ccbp.in/random-quote"
 fetch(url,option)
 .then(function(response){
     return response.json()
 })
 .then(function(jsonData){
     quoteDisplayEl.textContent =jsonData.content
 })
 
 
 
 
 submitBtnEl.onclick=function(){
     let quoteInputValue=quoteInputEl.value;
     let quoteDisplayValue=quoteDisplayEl.textContent;
     if (quoteInputValue===quoteDisplayValue){
         clearInterval(myVar);
         let countvalue=countEl.textContent;
         resultEl.textContent="You have finised in "+countvalue+" seconds";
         
     }else{
         resultEl.textContent="You type incorrect sentence";
     }
 }
 
 resetBtnEl.onclick=function(){
     roleEl.classList.remove("d-none");
     textareaHideEl.classList.add("d-none")
     value = 0
     myTimer();
     resultEl.textContent="";
     quoteInputEl.value=""
     let option ={
    method:"GET"
}
 let url ="https://apis.ccbp.in/random-quote"
 fetch(url,option)
 .then(function(response){
     return response.json()
 })
 .then(function(jsonData){
     roleEl.classList.add("d-none");
     textareaHideEl.classList.remove("d-none")
     quoteDisplayEl.textContent =jsonData.content
 })
 }