
    const burger = document.querySelector('.btn-burger');
    const navigation = document.querySelector('.header__navigation');

    const toggleMenu = () => {
        navigation.classList.toggle('show');
        burger.classList.toggle('open');
    }

    burger.addEventListener('click', toggleMenu );