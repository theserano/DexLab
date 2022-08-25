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


// show/hide faq answer

(function(){

    const faqs = document.querySelectorAll('.faq');
    faqs.forEach( (faq) => {
        faq.addEventListener('click', function(){
            faq.classList.toggle('open');

            //change icon
            const icon = faq.querySelector('.faq__icon i');
            if(icon.className === 'fa-solid fa-plus'){
                icon.className = "fa-solid fa-minus";
            }
            else{
                icon.className = 'fa-solid fa-plus'; 
            }
        });
    })

})();

//Display heading when page loads

window.addEventListener('load', () => {

    const grow = document.querySelector('.header__left h1');
    const growText = document.querySelector('.header__left p');
    const growButton = document.querySelector('.header__left a');

    setTimeout( () => {
        grow.style.opacity = 1;

        setTimeout ( () => {
            growText.style.opacity = 1;

            setTimeout( () => {
                growButton.style.opacity = 1;

            }, 800);
        }, 800);
    }, 1000);

});

