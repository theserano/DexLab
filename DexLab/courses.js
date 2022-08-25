//navbar styling
(function(){

    window.addEventListener('scroll', () => {
        document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0);
    })

    // show/hide nav menu
    const menu = document.querySelector('.nav__menu');
    const menuBtn = document.querySelector('#open-menu-btn');
    const closeBtn = document.querySelector('#close-menu-btn');

    menuBtn.addEventListener('click', function(){

        menu.style.display = "flex";
        closeBtn.style.display = "inline-block";
        menuBtn.style.display = "none";

    });

    //close nav menu
    const closeNav = () => {
        menu.style.display = "none";
        closeBtn.style.display = "none";
        menuBtn.style.display = "inline-block";
    }

    closeBtn.addEventListener('click', closeNav);

})();



//Display heading when page loads

window.addEventListener('load', () => {

    const browse = document.querySelector('.image__text-container h1');
    const from = document.querySelector('.image__text-container p');

    setTimeout( () => {
        browse.style.opacity = 1;

        setTimeout ( () => {
            from.style.opacity = 1;

        }, 800);
    }, 1000);

});