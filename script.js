/* =======================================
   1. ROLAGEM SUAVE (SMOOTH SCROLL)
   ======================================= */

const linksInternos = document.querySelectorAll('a[href^="#"]');

linksInternos.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();

        const id = this.getAttribute('href');
        const targetElement = document.querySelector(id);

        if(targetElement) {
            //Aqui rola a tela suavemente até o elemento alvo
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

/* =======================================
   2. MENU FIXO (STICKY HEADER)
   ======================================= */

const mainHeader = document.getElementById("mainHeader");
if (mainHeader) {
    const stickOffset = mainHeader.offsetTop;
    
    function stickyHeader() {
        if(window.scrollY >= stickOffset) {
            mainHeader.classList.add("sticky");
        }else {
            mainHeader.classList.remove("sticky");
        }
    }

    window.addEventListener("scroll", stickyHeader);
}

/* =======================================
   3. FUNCIONALIDADE DO MENU HAMBÚRGUER (MOBILE)
   ======================================= */

const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

if (menuToggle && mainNav) {
    menuToggle.addEventListener('click', function() {
        mainNav.classList.toggle('active');

        if(mainNav.classList.contains('active')) {
            menuToggle.innerHTML = '✖'; // Ícone de fechar
        }else {
            menuToggle.innerHTML = '☰'; // Ícone de menu
        }
    });
    
    // Melhora a UX: Fecha o menu mobile após clicar em um link
    const mobileLinks = mainNav.querySelectorAll('a[href^="#"]');
    mobileLinks.forEach(link => {
        link.addEventListener('click', function() {
          //Fechar Menu se estiver aberto
          if (mainNav.classList.contains('active')) {
            mainNav.classList.remove('active');
            menuToggle.innerHTML = "☰";
          }  
        })
    })
}

/* =======================================
   4. BOTÃO VOLTAR AO TOPO
   ======================================= */

const btnTopo = document.getElementById('btnTopo');

//Evento que monitora a rolagem da página
window.addEventListener('scroll', function() {

    if (document.documentElement.scrollTop > 300) {
        btnTopo.style.display = 'block';
    }else {
        btnTopo.style.display = 'none'; 
    }
});

//Evento do clique para voltar ao topo
btnTopo.addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
});