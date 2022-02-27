const bill = document.querySelector('.bill');
const people = document.querySelector('.people');
const messagues = document.querySelectorAll('.messague');
const percentagues = document.querySelectorAll('.percentage');
const formulario = document.querySelector('.formulario');
const btnReset = document.querySelector('#reset');

ejecutarEventos();

function ejecutarEventos() {
    bill.addEventListener('keyup', validarCampos);
    people.addEventListener('keyup', validarCampos);
    percentagues.forEach(i => {
        i.addEventListener('click', activarBtn);
    })

    btnReset.addEventListener('click', limpiarCampos);
}

function validarCampos(e) {
    let msj;
    if (e.target.value != "0" && e.target.value.length > 0) {
        e.target.parentElement.style.border = '2px solid hsl(172, 67%, 45%)';
        if (e.target.classList.contains('bill')) {
            messagues[0].style.display = 'none';
        } else {
            messagues[1].style.display = 'none';
        }
    } else {
        e.target.parentElement.style.border = '2px solid hsl(0, 100%, 56%)';
        if (e.target.classList.contains('bill')) {
            messagues[0].style.display = 'flex';
        } else {
            messagues[1].style.display = 'flex';
        }
    }

    realizarOperation();
}

function activarBtn(e) {
    desactivarBtn();
    if (e.target.type == "text") {
        e.target.classList.add('active-custom');
    } else {
        e.target.classList.add('active')
    }
    realizarOperation();
}

function desactivarBtn() {

    percentagues.forEach(i => {
        if (i.classList.contains('active') || i.classList.contains('active-custom')) {
            if (i.classList.contains('active-custom')) {
                i.classList.remove('active-custom');
                return;
            }
            i.classList.remove('active')
        };
    })
}

function realizarOperation() {
    let peoples = parseFloat(people.value);
    let bills = parseFloat(bill.value);
    let porcent;
    percentagues.forEach(i => {
        if (i.classList.contains('active') || i.classList.contains('active-custom')) {
            porcent = parseFloat(i.value);
        }
    })
    console.log(bills);
    if (!Number.isNaN(peoples) && !Number.isNaN(bills) && !Number.isNaN(porcent)) {
        let tipmont = parseFloat((bills * porcent) / peoples);
        let total = (bills * porcent + bills) / peoples;
        document.querySelector('.amount').innerHTML = tipmont.toFixed(2);
        document.querySelector('.total').innerHTML = total.toFixed(2);
    }
}

function limpiarCampos() {
    formulario.reset();
    document.querySelector('.amount').innerHTML = "$0.00";
    document.querySelector('.total').innerHTML = "$0.00";
}