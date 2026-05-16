export function Header({ name }) {
  return (
    <header className="cabecalho-site">
      <div className="bloco-marca">
        <span className="texto-destaque">Portfólio profissional</span>
      </div>
      <nav aria-label="Navegação principal">
        <ul className="lista-navegacao">
          <li>
            <a href="#inicio">Início</a>
          </li>
          <li>
            <a href="#resumo">Resumo</a>
          </li>
          <li>
            <a href="#competencias">Competências</a>
          </li>
          <li>
            <a href="#projetos">Projetos</a>
          </li>
          <li>
            <a href="#contato">Contato</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
