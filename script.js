// Formulario
const formulario = document.getElementById('meuFormulario')
const inputNome = document.getElementById('nome')
const alertaSucesso = document.getElementById('mensagemSucesso')

formulario.addEventListener('submit', function (event) {
    event.preventDefault()

    if (inputNome.value.trim() === "") {
        alert("Por favor, digite seu nome!")
    }
    else {
        alertaSucesso.classList.remove('d-none')
    }
})


// Botao tema claro e escuro
const botaoTema = document.getElementById('botaoTema');
const corpo = document.body;
const temaSalvo = localStorage.getItem('tema')

if (temaSalvo === 'escuro') {
    corpo.classList.add('dark-mode');
    botaoTema.innerHTML = '<i class="fa-solid fa-sun me-1"></i> Ativar Modo Claro';
    botaoTema.classList.replace('btn-outline-light', 'btn-warning');
}

botaoTema.addEventListener('click', function () {
    corpo.classList.toggle('dark-mode')

    if (corpo.classList.contains('dark-mode')) {
        localStorage.setItem('tema', 'escuro');
        botaoTema.innerHTML = '<i class="fa-solid fa-sun me-1"></i> Ativar Modo Claro';
        botaoTema.classList.replace('btn-outline-light', 'btn-warning');
    }
    else {
        localStorage.setItem('tema', 'claro')
        botaoTema.innerHTML = '<i class="fa-solid fa-moon me-1"></i> Ativar Modo Escuro';
        botaoTema.classList.replace('btn-warning', 'btn-outline-light');
    }
});

// Botao voltar para o topo
const btnTopo = document.getElementById('btnTopo');

window.onscroll = function () {
    if (document.documentElement.scrollTop > 280) {
        btnTopo.classList.add('visivel')
    }
    else {
        btnTopo.classList.remove('visivel')
    }
};

btnTopo.addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
})