export function AboutSection({ about }) {
  return (
    <section className="secao-conteudo grade-secao" id="resumo" aria-labelledby="titulo-resumo">
      <div className="cabecalho-secao">
        <h2 id="titulo-resumo">{about.title}</h2>
      </div>
      <div className="cartao cartao-superficie">
        {about.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
        <ul className="lista-detalhes">
          {about.bullets.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
