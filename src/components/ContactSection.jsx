export function ContactSection({ contact }) {
  return (
    <section className="secao-conteudo secao-contato" id="contato" aria-labelledby="titulo-contato">
      <div className="cabecalho-secao">
        <h2 id="titulo-contato">{contact.title}</h2>
      </div>
      <div className="cartao cartao-contato">
        <p>{contact.text}</p>
        <ul className="lista-contato">
          {contact.items.map((item) => (
            <li key={item.label}>
              <span>{item.label}</span>
              <a
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noreferrer noopener' : undefined}
              >
                {item.value}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
