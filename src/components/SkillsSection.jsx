export function SkillsSection({ skills }) {
  return (
    <section className="secao-conteudo" id="competencias" aria-labelledby="titulo-competencias">
      <div className="cabecalho-secao">
        <h2 id="titulo-competencias">Stack e fundamentos aplicados</h2>
      </div>
      <div className="grade-cartoes">
        {skills.map((skill) => (
          <article key={skill.name} className="cartao cartao-skill">
            <div className="topo-skill">
              <div className="icone-stack-devicon" title={skill.name}>
                <i className={skill.icone} aria-hidden="true"></i>
              </div>
              <h3>{skill.name}</h3>
            </div>
            <p>{skill.level}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
