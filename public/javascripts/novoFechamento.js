/* :::::::: NOVO FECHAMENTO :::::::: */
const dataLancamento = document.querySelector('#data');
const tipoMovimento = document.querySelector('#tipo-movimento');
const valorLancamento = document.querySelector('#valor');
const subTipoMovimento = document.querySelector('.sub-tipo-movimento');
const saidaParcelas = document.querySelector('div.saida-parcelas');
const checkboxSaidaParcelas = document.querySelector('input#saida-parcelas');
const descricaoLancamento = document.querySelector('#descricao');
const buttonOk = document.querySelector('.enviar-lancamento button');
const tbody = document.querySelector('.table-lancamentos tbody');
const linhasLancamento = document.querySelector('tr.linhas');
// const dataPickerNextHide = document.querySelector('a.ui-datepicker-prev');

/* :::::::: NOVO FECHAMENTO :::::::: */
tipoMovimento.addEventListener('input', function () {
    if (this.value == "ENTRADA") {
        subTipoMovimento.classList.toggle('mostrar');
        saidaParcelas.classList.toggle('mostrar');

        if (subTipoMovimento.value == "OFERTA" || subTipoMovimento.value == "DÍZIMOS" ) {
            descricaoLancamento.value = `ENTRADA - ${subTipoMovimento.value}`;
        } else {
            descricaoLancamento.value = subTipoMovimento.value;
        }
    } else {
        subTipoMovimento.classList.toggle('mostrar');
        saidaParcelas.classList.toggle('mostrar');
        
        descricaoLancamento.value = ""
    }
})
subTipoMovimento.addEventListener('click', function () {
    if (this.value == "OFERTA" || this.value == "DÍZIMOS" ) {
        descricaoLancamento.value = `ENTRADA - ${this.value}`;
    } else {
        descricaoLancamento.value = this.value;
    }
})

valorLancamento.addEventListener('input', function(){moeda(valorLancamento)})
function moeda(input){
    let v = input.value.replace(/\D/g,'');
    v = (v/100).toFixed(2) + '';
    
    v = v.replace(".", ",");
    v = v.replace(/-?(\d)(\d{3})(\d{3}),/g, "$1.$2.$3,");
    v = v.replace(/-?(\d)(\d{3}),/g, "$1.$2,");
    input.value = v;
}

buttonOk.addEventListener('click', function() {
    if (tipoMovimento.value == "SAIDA") {
        subTipoMovimento.classList.toggle('mostrar')
        saidaParcelas.classList.toggle('mostrar')
    }
    let linhaLancamento = document.createElement('tr');
    linhaLancamento.classList.add("linhas")
    let linhaLancamento_data_1 = document.createElement('td');
    linhaLancamento_data_1.classList.add("col-data")
    linhaLancamento_data_1.innerHTML = dataLancamento.value;
    let linhaLancamento_data_2 = document.createElement('td');
    linhaLancamento_data_2.classList.add("col-descricao")
    linhaLancamento_data_2.innerHTML = descricaoLancamento.value;
    let linhaLancamento_data_3 = document.createElement('td');
    let linhaLancamento_data_4 = document.createElement('td');
    if (valorLancamento.value < 0) {
        linhaLancamento_data_3.classList.add("col-valor-negativo")
        linhaLancamento_data_3.innerHTML = -valorLancamento.value;
        linhaLancamento_data_4.classList.add("col-valor-positivo")
        linhaLancamento_data_4.innerHTML = "";
    } else {
        linhaLancamento_data_3.classList.add("col-valor-negativo")
        linhaLancamento_data_3.innerHTML = "";
        linhaLancamento_data_4.classList.add("col-valor-positivo")
        linhaLancamento_data_4.innerHTML = valorLancamento.value;
    }
    let linhaLancamento_data_5 = document.createElement('td');
    linhaLancamento_data_5.classList.add("col-acoes")
    linhaLancamento_data_5.innerHTML = `<a href=""><span class="material-symbols-outlined edit">edit</span></a>
                                <a href=""><span class="material-symbols-outlined delete">delete</span></a>`;
    
    linhaLancamento.appendChild(linhaLancamento_data_1);
    linhaLancamento.appendChild(linhaLancamento_data_2);
    linhaLancamento.appendChild(linhaLancamento_data_3);
    linhaLancamento.appendChild(linhaLancamento_data_4);
    linhaLancamento.appendChild(linhaLancamento_data_5);
    tbody.appendChild(linhaLancamento);
    
    dataLancamento.value = "";
    tipoMovimento.selectedIndex = 0;
    subTipoMovimento.selectedIndex = 0;
    valorLancamento.value = "0,00";
    descricaoLancamento.value = "";

    tbody.scrollBy(0,100)
})
// $( dataLancamento ).datepicker({
//     dateFormat: 'dd/mm/yy',
//     dayNames: ['Domingo','Segunda','Terça','Quarta','Quinta','Sexta','Sábado','Domingo'],
//     dayNamesMin: ['D','S','T','Q','Q','S','S','D'],
//     dayNamesShort: ['Dom','Seg','Ter','Qua','Qui','Sex','Sáb','Dom'],
//     monthNames: ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'],
//     monthNamesShort: ['Jan','Fev','Mar','Abr','Mai','Jun','Jul','Ago','Set','Out','Nov','Dez'],

//     showOn: "button",
//     buttonImage: "/images/calendar.png", 
//     buttonImageOnly: true,

//     hideIfNoPrevNext: true,
//     prevText: 'Anterior', // Display text for previous month link
//     nextText: 'Próximo', // Display text for next month link

//     // changeMonth: true,
//     // changeYear: true,
//     // showOtherMonths: true,
//     // selectOtherMonths: true,
// });