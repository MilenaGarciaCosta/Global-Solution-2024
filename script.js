// Expandir o menu
const btnExpandir = document.querySelector('.btn-expandir')
const menuLateral = document.querySelector('.menu-lateral')

btnExpandir.addEventListener('click', function () {
    menuLateral.classList.toggle('expandir')
})

// Sinalizar em qual seção o usuário está
document.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('.section-conteudo');
    const menuItems = document.querySelectorAll('.item-menu');
    const scrollPosition = window.scrollY + window.innerHeight / 2;

    sections.forEach(section => {
        const sectionId = `#${section.id}`;
        const menuItem = document.querySelector(`.item-menu[data-target="${sectionId}"]`);

        if (scrollPosition >= section.offsetTop && scrollPosition < section.offsetTop + section.offsetHeight) {
            if (menuItem) {
                menuItem.classList.add('ativo');
            }
        } else {
            section.classList.remove('ativo');
            if (menuItem) {
                menuItem.classList.remove('ativo');
            }
        }
    });
});

// Alterar o conteúdo de acordo com a solução selecionada
const lixeiraBtn = document.querySelector('#lixeira-btn')
const droneBtn = document.querySelector('#drone-btn')
const img = document.querySelector('#img-solucao');
const conteudo = document.querySelector('.info-container');

lixeiraBtn.addEventListener('click', () => {
    img.classList.remove('drone-height')
    img.classList.add('lixeira-height')
    lixeiraBtn.classList.remove('selecionado')
    droneBtn.classList.add('selecionado')

    img.setAttribute('src', `media/lixeira-premiada.png`);
    img.setAttribute('alt', `Protótipo lixeira premiada`);

    conteudo.innerHTML = `
    <h5>Lixeira Premiada</h5>
    <br>
        <p>
            &emsp;&emsp; Utilizando um método de recompensa, este projeto visa garantir que o plástico seja destinado a empresas que necessitam de plástico reciclável em sua produção para evitar seu descarte incorreto.
        </p>
    <a href="https://github.com/guta231/Lixeira-Premiada" target="_blank"><h6>Saiba mais</h6></a>
    `
});

droneBtn.addEventListener('click', () => {
    img.classList.remove('lixeira-height')
    img.classList.add('drone-height')
    lixeiraBtn.classList.add('selecionado')
    droneBtn.classList.remove('selecionado')

    img.setAttribute('src', `media/drone.png`);
    img.setAttribute('alt', `Protótipo drone BlueGuard`);

    conteudo.innerHTML = `
    <h5>BlueGuard</h5>
    <br>
    <p>
      &emsp;&emsp; Os BlueGuards são drones inteligentes capazes de identificar e sinalizar resíduos poluentes nos oceanos em tempo real, auxiliando na limpeza marinha e ajudando ONGs dedicadas à sustentabilidade oceânica. 
    </p>
    <a href="https://github.com/medeirossteffany/Deteccao_lixos_oceanos" target="_blank"><h6>Saiba mais</h6></a>
    `
})

// Slide automático
let count = 1;

setInterval(function () {
    nextImage();
}, 2000)

function nextImage(){
    count++;
    if (count > 4){
        count = 1
    }
    document.getElementById('radio'+count).checked = true;
}
