



const $btnAbreModalBeto = document.querySelector('#btn-abre-modal-beto')
const $petBetoClasse = document.querySelector('#pet-beto')
const $btnVerOutroBeto = document.querySelector('.btn-veroutro-beto')

function abreModalBeto() {
    fechaModalAmora()
    fechaModalTonho()
    fechaModalSol()
    fechaModalRobert()
    fechaModalKevinRoger()
    return $petBetoClasse.classList.toggle('modal-pet-beto')
}

function fechaModalBeto() {
    return $petBetoClasse.classList.remove('modal-pet-beto')
}

$btnAbreModalBeto.addEventListener('click', abreModalBeto)
$btnVerOutroBeto.addEventListener('click', fechaModalBeto)

// -----------------------------------------------

const $btnAbreModalTonho = document.querySelector('#btn-abre-modal-tonho')
const $petTonhoClasse = document.querySelector('#pet-tonho')
const $btnVerOutroTonho = document.querySelector('.btn-veroutro-tonho')

function abreModalTonho() {
    fechaModalBeto()
    fechaModalAmora()
    fechaModalSol()
    fechaModalRobert()
    fechaModalKevinRoger()
    return $petTonhoClasse.classList.toggle('modal-pet-tonho')
}

function fechaModalTonho() {
    return $petTonhoClasse.classList.remove('modal-pet-tonho')
}

$btnAbreModalTonho.addEventListener('click', abreModalTonho)

$btnVerOutroTonho.addEventListener('click', fechaModalTonho)

// -----------------------------------------------

const $btnAbreModalAmora = document.querySelector('#btn-abre-modal-amora')
const $petAmoraClasse = document.querySelector('#pet-amora')
const $btnVerOutroAmora = document.querySelector('.btn-veroutro-amora')

function abreModalAmora() {
    fechaModalBeto()
    fechaModalTonho()
    fechaModalSol()
    fechaModalRobert()
    fechaModalKevinRoger()
    return $petAmoraClasse.classList.toggle('modal-pet-amora')
}

function fechaModalAmora() {
    return $petAmoraClasse.classList.remove('modal-pet-amora')
}

$btnAbreModalAmora.addEventListener('click', abreModalAmora)
$btnVerOutroAmora.addEventListener('click', fechaModalAmora)

// -----------------------------------------------

const $btnAbreModalRobert = document.querySelector('#btn-abre-modal-robert')
const $petRobertClasse = document.querySelector('#pet-robert')
const $btnVerOutroRobert = document.querySelector('.btn-veroutro-robert')

function abreModalRobert() {
    fechaModalBeto()
    fechaModalAmora()
    fechaModalTonho()
    fechaModalSol()
    fechaModalKevinRoger()
    return $petRobertClasse.classList.toggle('modal-pet-robert')
}

function fechaModalRobert() {
    return $petRobertClasse.classList.remove('modal-pet-robert')
}

$btnAbreModalRobert.addEventListener('click', abreModalRobert)
$btnVerOutroRobert.addEventListener('click', fechaModalRobert)

// -----------------------------------------------

const $btnAbreModalSol = document.querySelector('#btn-abre-modal-sol')
const $petSolClasse = document.querySelector('#pet-sol')
const $btnVerOutroSol = document.querySelector('.btn-veroutro-sol')

function abreModalSol() {
    fechaModalBeto()
    fechaModalAmora()
    fechaModalTonho()
    fechaModalRobert()
    fechaModalKevinRoger()
    return $petSolClasse.classList.toggle('modal-pet-sol')
}

function fechaModalSol() {
    return $petSolClasse.classList.remove('modal-pet-sol')
}

$btnAbreModalSol.addEventListener('click', abreModalSol)
$btnVerOutroSol.addEventListener('click', fechaModalSol)

// -----------------------------------------------

const $btnAbreModalKevinRoger = document.querySelector('#btn-abre-modal-kevin-roger')
const $petKevinRogerClasse = document.querySelector('#pets-kevin-roger')
const $btnVerOutroKevinRoger = document.querySelector('.btn-veroutro-kevin-roger')

function abreModalKevinRoger() {
    fechaModalBeto()
    fechaModalAmora()
    fechaModalTonho()
    fechaModalSol()
    fechaModalRobert()
    return $petKevinRogerClasse.classList.toggle('modal-pets-kevin-roger')
}

function fechaModalKevinRoger() {
    return $petKevinRogerClasse.classList.remove('modal-pets-kevin-roger')
}

$btnAbreModalKevinRoger.addEventListener('click', abreModalKevinRoger)
$btnVerOutroKevinRoger.addEventListener('click', fechaModalKevinRoger)

// -----------------------------------------------


// -----------------------------------------------
function irParaAdotar(){
    window.open('../adote.html', '_blank')
}


document.querySelector('#home').addEventListener('click', () => {
document.querySelector('#checkbox-menu-lateral').checked = false;
});

document.querySelector('#match').addEventListener('click', () => {
document.querySelector('#checkbox-menu-lateral').checked = false;
});

document.querySelector('#sobre').addEventListener('click', () => {
document.querySelector('#checkbox-menu-lateral').checked = false;
});

document.querySelector('#contato').addEventListener('click', () => {
document.querySelector('#checkbox-menu-lateral').checked = false;
});

document.querySelector('footer').addEventListener('click', () => {
document.querySelector('#checkbox-menu-lateral').checked = false;
});
    


document.querySelector('#link-nav').addEventListener('click', ()=> document.querySelector('.nav-ul').classList.toggle('modal-nav-li'))