let input = document.querySelector("#user_phone"); // plugin for check mobile nubmer 
intlTelInput(input, {
    utilsScript:'./src/utils.js',
    preferredCountries:["ua"],
    separateDialCode:true
 
}); 

const BODY = document.body


// toggle burger menu 
const toggler = (event) =>{
    event.preventDefault()
    BODY.classList.toggle('opened')
}

//scroll to top
let scrollToTopBtn = document.querySelector('.back-to-top')

const scrollFunction = () =>{

    if(window.pageYOffset > 400){
        scrollToTopBtn.classList.add('back-to-top--active')
    }else{
        scrollToTopBtn.classList.remove('back-to-top--active')
    }
}

const scrollToTop = (event) => {
    window.scrollTo(0,0)
}


//mobile menu 
const headerMenu = document.querySelector('.nav__list')

const addEvent =  () => {
    if(window.innerWidth <= 992){
        console.log("addEvent")
        headerMenu.addEventListener('click',(event) => {
            let {target} = event 
            let link = target.classList.contains('nav__link')
                if(link){
                    BODY.classList.remove('opened')
                   
                }
        })

    }
}

scrollToTopBtn.addEventListener('click',scrollToTop)
window.addEventListener('scroll',scrollFunction)
window.addEventListener('resize', addEvent)
addEvent()