"use client";

import { useState, useSyncExternalStore } from "react";

const skills = [
  ["Procedimentos clínicos", "Punção venosa, sondagem nasogástrica e vesical, curativos complexos e cuidados com feridas."],
  ["Urgência e cuidados intensivos", "Suporte Básico e Avançado de Vida, cuidados com dispositivos e manejo de pacientes críticos."],
  ["Gestão e prontuários", "Registros criteriosos, administração segura de medicamentos e auditoria de processos."],
  ["Atitudes profissionais", "Comunicação assertiva, trabalho em equipe, ética e empatia no atendimento humanizado."],
];

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const themeStorageKey = "maria-gabriela-theme";

function getThemeSnapshot() {
  if (typeof window === "undefined") return false;
  const savedTheme = window.localStorage.getItem(themeStorageKey);
  return savedTheme ? savedTheme === "dark" : window.matchMedia("(prefers-color-scheme: dark)").matches;
}

function subscribeToTheme(onThemeChange: () => void) {
  const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
  window.addEventListener("storage", onThemeChange);
  window.addEventListener("maria-gabriela-theme-change", onThemeChange);
  mediaQuery.addEventListener("change", onThemeChange);

  return () => {
    window.removeEventListener("storage", onThemeChange);
    window.removeEventListener("maria-gabriela-theme-change", onThemeChange);
    mediaQuery.removeEventListener("change", onThemeChange);
  };
}

export default function Home() {
  const [photoAvailable, setPhotoAvailable] = useState(true);
  const darkMode = useSyncExternalStore(subscribeToTheme, getThemeSnapshot, () => false);

  function toggleTheme() {
    const nextMode = !darkMode;
    window.localStorage.setItem(themeStorageKey, nextMode ? "dark" : "light");
    window.dispatchEvent(new Event("maria-gabriela-theme-change"));
  }

  return (
    <main className={darkMode ? "dark-theme" : ""}>
      <nav className="site-nav" aria-label="Navegação principal">
        <a className="monogram" href="#inicio" aria-label="Maria Gabriela, início">MG<span>.</span></a>
        <div className="nav-links"><a href="#sobre">Sobre mim</a><a href="#experiencia">Experiência</a><a href="#competencias">Competências</a><a href="#contato">Contato</a></div>
        <div className="nav-actions"><button className="theme-toggle" type="button" onClick={toggleTheme} aria-label={darkMode ? "Ativar tema claro" : "Ativar tema escuro"} title={darkMode ? "Tema claro" : "Tema escuro"}><span aria-hidden="true">{darkMode ? "☼" : "☾"}</span></button><a className="nav-download" href={`${basePath}/documents/curriculo-maria-gabriela.pdf`} download><span>Baixar currículo</span><span aria-hidden="true">↗</span></a></div>
      </nav>

      <section className="hero" id="inicio">
        <div className="hero-copy"><p className="eyebrow"><span className="eyebrow-mark" />Enfermagem com presença e propósito</p><h1>Maria Gabriela<br /><em>de Oliveira Nery</em></h1><p className="hero-intro">Cuidado que combina precisão clínica, escuta atenta e uma visão verdadeiramente humana.</p><div className="hero-actions"><a className="button button-dark" href="#sobre">Conheça minha trajetória <span>↓</span></a><a className="text-link" href={`${basePath}/documents/curriculo-maria-gabriela.pdf`} download>Currículo em PDF <span>↗</span></a></div></div>
        <div className="hero-visual"><div className="visual-note note-top">Atenção<br /><strong>humanizada</strong></div><div className="portrait-frame"><div className="portrait-fallback" aria-hidden="true"><span>MG</span></div>{photoAvailable && <img className="portrait" src={`${basePath}/images/maria-gabriela.jpg`} alt="Foto de apresentação de Maria Gabriela de Oliveira Nery" onError={() => setPhotoAvailable(false)} />}<div className="portrait-caption"><span>01</span><span>Porto Velho / RO</span></div></div><div className="visual-note note-bottom">COREN-RO<br /><strong>1012471</strong></div></div>
      </section>

      <section className="ticker" aria-label="Áreas de atuação"><span>ATENÇÃO PRIMÁRIA</span><i /> <span>URGÊNCIA &amp; EMERGÊNCIA</span><i /> <span>MATERNIDADE</span><i /> <span>SEGURANÇA DO PACIENTE</span></section>

      <section className="about section-grid" id="sobre"><div className="section-label"><span>01</span><span>Perfil</span></div><div className="section-content"><p className="section-kicker">Um cuidado que começa na escuta</p><h2>Enfermagem é técnica.<br /><em>Também é presença.</em></h2><p className="body-copy">Enfermeira graduada pelo Centro Universitário Aparício Carvalho (FIMCA), com sólida formação prática em Atenção Primária, Urgência/Emergência e Maternidade.</p><p className="body-copy">Pós-graduanda em Auditoria em Serviços de Saúde e em Urgência/Emergência com ênfase em UTI. Minha atuação é guiada pela assistência humanizada, pela segurança do paciente e pela prática baseada em evidências científicas.</p><a className="text-link" href="https://lattes.cnpq.br/5506554419322085" target="_blank" rel="noreferrer">Ver Currículo Lattes <span>↗</span></a></div><div className="about-aside"><span className="aside-number">02</span><p>Especialização<br />em andamento</p><span className="aside-line" /></div></section>

      <section className="experience section-grid" id="experiencia"><div className="section-label"><span>02</span><span>Experiência</span></div><div className="section-content wide-content"><p className="section-kicker">Formação que acontece na prática</p><div className="timeline-item"><div className="timeline-date">2025 — 2026</div><div><h3>Estágio Supervisionado II <span>Hospitalar · 400h</span></h3><p className="institution">Hospital e Pronto Socorro João Paulo II / Hospital de Base Dr. Ary Pinheiro</p><p className="body-copy">Atuação direta na Sala de Emergência e Clínica Médica, com triagem, monitorização de pacientes críticos e administração de terapêutica. Assistência em Centro Obstétrico, acompanhando o parto humanizado e prestando cuidados ao recém-nascido e à puérpera.</p></div></div><div className="timeline-item"><div className="timeline-date">2025 — 2026</div><div><h3>Estágio Supervisionado I <span>Atenção Primária · 400h</span></h3><p className="institution">Unidade Básica de Saúde · Porto Velho / RO</p><p className="body-copy">Acolhimento, triagem, triagem neonatal e imunização. Educação em saúde, acompanhamento de pré-natal, consultas de enfermagem e procedimentos ambulatoriais.</p></div></div></div></section>

      <section className="skills section-grid" id="competencias"><div className="section-label"><span>03</span><span>Competências</span></div><div className="section-content skills-content"><p className="section-kicker">O que levo para cada atendimento</p><h2>Precisão no gesto,<br /><em>cuidado no olhar.</em></h2><div className="skill-list">{skills.map(([title, description], index) => <article className="skill" key={title}><span className="skill-index">0{index + 1}</span><div><h3>{title}</h3><p>{description}</p></div></article>)}</div></div></section>

      <footer className="footer" id="contato"><div><p className="eyebrow"><span className="eyebrow-mark" />Vamos conversar</p><h2>Pronta para cuidar<br /><em>do que importa.</em></h2></div><div className="footer-contact"><a href="mailto:gabi.onery06@gmail.com">gabi.onery06@gmail.com</a><a href="tel:+5569984829851">(69) 98482-9851</a><span>Porto Velho — RO</span></div><div className="footer-bottom"><span>© 2026 Maria Gabriela Nery</span><a href="#inicio">Voltar ao topo ↑</a></div></footer>
    </main>
  );
}
