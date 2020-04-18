let input = document.querySelector("#user_phone");
intlTelInput(input, {
    utilsScript:'./src/utils.js',
    preferredCountries:["ua"],
    separateDialCode:true
 
}); 

