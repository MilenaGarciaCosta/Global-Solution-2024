//Menu selecionado
const menuItem = document.querySelectorAll('.item-menu');

function selectLink() {
    menuItem.forEach((item) =>
        item.classList.remove('ativo')
    )
    this.classList.add('ativo')
}

menuItem.forEach((item) =>
    item.addEventListener('click', selectLink)
)

 // Expandir o menu
const btnExpandir = document.querySelector('.btn-expandir')
const menuLateral = document.querySelector('.menu-lateral')

btnExpandir.addEventListener('click', function() {
    menuLateral.classList.toggle('expandir')
})