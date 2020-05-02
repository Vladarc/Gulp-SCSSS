let input = document.querySelector("#user_phone");
intlTelInput(input, {
    utilsScript:'./src/utils.js',
    preferredCountries:["ua"],
    separateDialCode:true
 
}); 

const toggler = (event) =>{
    event.preventDefault()
    document.body.classList.toggle('opened')
}

window.onresize = displayWindowSize;
window.onload = displayWindowSize;

function displayWindowSize() {
    return  window.innerWidth;
  
};
if(displayWindowSize <= 992){
    console.log(1)
}else{
    console.log(2)
}