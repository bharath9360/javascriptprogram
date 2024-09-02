




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