const burger = document.querySelector('.btm-burger');
const navigation = document.querySelector('.header__navigation'); 

const toggleMenu =()=>{
    navigation.classList.toggle('show');
    burger.classList.toggle('open');
}

burger.addEventListener('click', toggleMenu)