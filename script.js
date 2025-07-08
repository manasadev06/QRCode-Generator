const qrText=document.getElementById("qr-text");
let sizes=document.getElementById("sizes");
let generateBtn=document.getElementById("generateBtn");
let downloadBtn=document.getElementById("downloadBtn");

let qrContainer=document.querySelector(".qr-body");

generateBtn.addEventListener('click',(e)=>{
    e.preventDefault(); // used to stop the defualt action  of button like it wont submit when u clcik on generate QR
    if(qrText.value.length>0){
        generateQRCode();
    }

    else{
        alert("enter text in the field to generate QR Code");
    }
}
);

sizes.addEventListener('change',(e)=>{
    size=e.target.value;
 isEmpty();
}
);

downloadBtn.addEventListener('click',()=>{
    let img=document.querySelector('.qr-body img');
    if(img!==null){
        let imgAttr=img.getAttribute('src');
        downloadBtn.setAttribute("href",imgAttr);
    }
    else{
        alert("generate QR code first");
    }
})
function isEmpty(){
    if(qrText.value.length>0){
        generateQRCode();
    }

    else{
        alert("enter text in the field to generate QR Code");
    }

}
function generateQRCode() {
    qrContainer.innerHTML = ""; // Clear previous QR code

    const size = parseInt(sizes.value); // Get size as number if its like "300" it will convert to 300 integer

    new QRCode(qrContainer, {
        text: qrText.value,
        width: size,
        height: size,
        colorLight: "#fff",
        colorDark: "#000",
    });
}