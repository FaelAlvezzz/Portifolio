import photo from '../../foto.jpeg';

export function HeroSection({ identity, metrics }) {
  return (
    <section className="secao-destaque" id="inicio" aria-labelledby="titulo-destaque">
      <div className="conteudo-destaque">
        <p className="texto-destaque">Portfólio para recrutadores e times técnicos</p>
        <div className="cabecalho-secao">
          <h1 id="titulo-destaque">{identity.name}</h1>
        </div>
        <p className="cargo-destaque">{identity.role}</p>
        <p className="resumo-destaque">{identity.summary}</p>

        <ul className="lista-destaques" aria-label="Principais stacks">
          {identity.highlights.map((item) => (
            <li key={item.label}>{item.label}</li>
          ))}
        </ul>

        <div className="lista-icones-hero" aria-label="Ícones das principais stacks">
          {identity.highlights.map((item) => (
            <div key={item.label} className="item-icone-hero" title={item.label}>
              <i className={`icone-devicon-hero ${item.icone}`} aria-hidden="true"></i>
              <span>{item.label}</span>
            </div>
          ))}
        </div>

        <div className="linha-acoes">
          {identity.ctas.map((cta) => (
            <a
              key={cta.label}
              className={`botao-link ${cta.variant}`}
              href={cta.href}
              target={cta.href.startsWith('http') ? '_blank' : undefined}
              rel={cta.href.startsWith('http') ? 'noreferrer noopener' : undefined}
            >
              {cta.label}
            </a>
          ))}
        </div>
      </div>
      <div className="painel-destaque">
        <img
          className="imagem-perfil"
          src={photo}
          alt="Foto de Rafael A Serafim em retrato profissional."
        />
        <ul className="lista-metricas" aria-label="Indicadores profissionais">
          {metrics.map((metric) => (
            <li key={metric.label}>
              <strong>{metric.value}</strong>
              <span>{metric.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
