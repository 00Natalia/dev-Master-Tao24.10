$(document).ready(function(){
    $('#banner').slick();
    arrovs: false;
    dots: false;
    fade: true;
    appendArrows: $('.banner-arrows');
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                arrows: false,
              }
            },
          ]
    });


    const burger = document.querySelector('.btn-burger');
    const navigation = document.querySelector('.header__navigation');

    const toggleMenu = () => {
        navigation.classList.toggle('show');
        burger.classList.toggle('open');
    }

    burger.addEventListener('click', toggleMenu );