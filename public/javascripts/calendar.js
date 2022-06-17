const datepicker = document.querySelector('.datepicker')
const dataCalendario = document.querySelectorAll('.datepicker-calendar tbody tr td')
const calendarButton = document.querySelector('.calendar-button') 

window.addEventListener('load', function () {
    calendarButton.addEventListener('click', function () {
        datepicker.classList.toggle('datepicker-show')
        datepicker.setAttribute('show', true)
    })
    let d = new Date();
    let diaSemana = new Date(d.getFullYear(), d.getMonth(), 1).getDay();
    let data = 1
    let ultimoDiaMes = new Date(d.getFullYear(), d.getMonth() + 1, 0).getDate();
    dataCalendario.forEach((element, index) => {
        if (diaSemana > index) {
            element.style.opacity = 0;
        } else if (diaSemana <= index && data <= ultimoDiaMes) {
            element.childNodes[0].innerText = data
            data += 1
        } else if (data > ultimoDiaMes) {
            element.style.display = "none";
        }
    })
    
})
window.addEventListener('click', function (e) {
    
    // if (datepicker.style.display == 'block') {
    //     datepicker.style.display = 'none'
    // }
})