export function ProjectsSection({ projects }) {
  return (
    <section className="secao-conteudo" id="projetos" aria-labelledby="titulo-projetos">
      <div className="cabecalho-secao">
        <h2 id="titulo-projetos">Projetos que demonstram minha evolução técnica</h2>
      </div>
      <div className="grade-cartoes">
        {projects.map((project) => (
          <article key={project.title} className="cartao cartao-projeto">
            <div className="lista-badges" aria-label={`Tecnologias de ${project.title}`}>
              {project.stack.map((item) => (
                <span key={item} className="badge-tecnologia">
                  {item}
                </span>
              ))}
            </div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="linha-links">
              {project.links.map((link) => (
                <a
                  key={link.label}
                  className="botao-projeto"
                  href={link.href}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
