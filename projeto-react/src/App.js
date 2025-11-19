import './App.css';

function App() {

  const fotoP = require('./imagens/foto.jpeg');

  return (
    <div className="App">
      <header className="main-header">
        <h1 className="logo">Rafael Alves</h1>
        
        <nav className="main-nav">
            <a href="#inicio" className="nav-link">Início</a>
            <a href="#projetos" className="nav-link">Projetos</a>
            <a href="#contato" className="nav-link">Contato</a>
        </nav>
    </header>
    <div className="sobre-mim" id="inicio">
        <div className="visualg">
            <img src={fotoP} alt="Imagem de um programador" className="foto-perfil" />
        </div>
        
        <p className="texto-sobre"> Olá, meu nome é <strong>Rafael Alves</strong>, sou estudante de Analise e desenvolvimento de sistemas, tenho 31 anos, moro no Rio de Janeiro, com minha filha e esposa, sou apaixonado por elas e por tecnologia. Estou em busca da minha primeira oportunidade na área de desenvolvimento web, tenho conhecimentos em <strong>HTML5</strong>, <strong>CSS3</strong>, <strong>JavaScript</strong>, <strong>Git e GitHub</strong>, estou estudando <strong>JAVA</strong> e <strong>SQL</strong> por conta da Universidade Veiga de Almeida e estou descobrindo que amo programar, gosto de desafios e de aprender com eles. Eu construo sites simples desde 2021, e estou em busca de uma oportunidade para mostrar meu trabalho e crescer profissionalmente. Vou criar este portifólio para mostrar meus projetos como uma rede social particular e também para praticar minhas habilidades.
        </p>
    </div>

    
    <div className="projetos" id="projetos">
        <h2 className="sub-titulo">Meus Projetos & Ferramentas</h2>
    
        <div className="container-projetos">
            <article className="projeto">
                <h3>Gerenciador de Frotas</h3>
                <p>Este projeto é um sistema simples de cadastro e listagem de veículos de transporte (Aviões e Navios) desenvolvido em Java. Ele foi criado para demonstrar os principais conceitos da Programação Orientada a Objetos (POO), como Herança, Polimorfismo e Encapsulamento.</p>
    
            <div className="ferramenta">
                <span className="ferramenta-tag java-tag">JAVA</span>
            </div>
    
            <div className="botoes-projeto">
                <a href="https://github.com/FaelAlvezzz/Gerenciador-frota" target="_blank" className="btn-projeto btn-codigo" rel="noreferrer">
                    <i className="fab fa-github"></i> Código Fonte (GitHub)
                </a>
            </div>
            </article>

            <article className="projeto">
                <h3>Projeto dia dos namorados</h3>
                <p>Um projeto interativo e temático criado para o Dia dos Namorados. Desenvolvido para praticar o uso de HTML e CSS puros para construir um layout focado em UI/UX, com um toque leve e pessoal. Um bom exemplo de aplicação básica em Web Design.</p>
            
                <div className="ferramentas">
                    <span className="ferramenta-tag html-tag">HTML5</span>
                    <span className="ferramenta-tag css-tag">CSS3</span>
                    <span className="ferramenta-tag ui-ux-tag">UI/UX Básico</span>
                </div>
            
                <div className="botoes-projeto">
                    <a href="https://faelalvezzz.github.io/projeto-dia-dos-namorados/" target="_blank" className="btn-projeto btn-demo" rel="noreferrer">
                        <i className="fas fa-desktop"></i> Ver Projeto
                    </a>
                    <a href="https://github.com/FaelAlvezzz/projeto-dia-dos-namorados" target="_blank" className="btn-projeto btn-codigo" rel="noreferrer">
                        <i className="fab fa-github"></i> Código Fonte (GitHub)
                    </a>
            </div>
            </article>
                    
            <article className="projeto projeto-extra">
                <h3>Mais Projetos em Breve!</h3>
                <p>Estou sempre trabalhando em novos projetos e melhorando minhas habilidades. Clique para ver todos os meus códigos e evoluções!</p>
            
                <a href="https://github.com/FaelAlvezzz" target="_blank" className="btn-ver-projeto btn-github-full" rel="noreferrer">
                <i className="fab fa-github"></i> Meu GitHub Completo
                </a>
            </article>
        
        </div>
    </div>

    <div className="cta-contato" id="contato">
        <h2 className="sub-titulo">Quer me contratar?</h2>
        <p>Vamos conversar sobre como minhas habilidades podem ajudar o seu projeto ou sua empresa.</p>
        <div className="cta-botoes">
            <a href="mailto:FaelAlvezzz@Gmail.com" className="btn-cta btn-primario">
            <i className="fas fa-envelope"></i> Fale Comigo (E-mail)
            </a>
        
            <a href="https://www.linkedin.com/in/rafaelalvezzz/" target="_blank" className="btn-cta btn-secundario" rel="noreferrer">
            <i className="fab fa-linkedin"></i> Veja meu Linkedin
            </a>
            
            <a href="https://www.instagram.com/rafaelalvezz/" target="_blank" className="btn-cta btn-secundario" rel="noreferrer">
                <i className="fab fa-instagram"></i> Esse é meu instagram
            </a>
    </div>
</div>

<footer className="roda-pe">
    Site autoral de Rafael Alves.&copy;
</footer>    
    </div>
  );
}

export default App;
