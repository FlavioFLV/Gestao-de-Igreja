/* :::::::: SIDE_MENu :::::::: */
const dropSlide = document.querySelectorAll('.drop-slide');
const dropMenuCheck = document.querySelectorAll('#drop-menu-check');
const slide = document.querySelectorAll('ul.slide');

/* :::::::: FECHAMENTO :::::::: */
const calendario = document.querySelectorAll('table.td')

window.addEventListener('load', function() {
    /* :::::::: side-menu ::::::::: */
    dropSlide.forEach((element, index) => {
        element.addEventListener('click', function () {
            if(dropMenuCheck[index].checked == true) {
                element.classList.toggle('active');
                dropMenuCheck[index].checked = false
                slide[index].style.height = '0'
            } else {
                element.classList.toggle('active');
                dropMenuCheck[index].checked = true;
                
                let qtdItem = slide[index].childElementCount;
                slide[index].style.setProperty('height', `calc(${qtdItem} * 30px)`);
                slide[index].style.transition = 'height .3s ease';
            }
        })
    });
})