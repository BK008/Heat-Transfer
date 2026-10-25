import { FormEvent, useState } from 'react'
import {
  ArrowDown, ArrowRight, Building2, Check, ChevronDown, Factory,
  HardHat, Leaf, MapPin, Menu, MessageCircle, MountainSnow,
  ShieldCheck, Snowflake, ThermometerSnowflake, Waves, X,
} from 'lucide-react'
import './App.css'
// Reemplazar por el número comercial real antes de publicar.
const WHATSAPP_NUMBER = '56900000000'
const whatsappUrl = (message = 'Hola Heat Transfer, quiero evaluar esta solución para un proyecto en una zona de frío extremo.') =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
function Brand({ light = false }: { light?: boolean }) {
  return (
    <a className={`brand ${light ? 'brand--light' : ''}`} href="#inicio" aria-label="Heat Transfer, inicio">
      <svg className="brand__mark" viewBox="0 0 44 44" fill="none" aria-hidden="true">
        <path d="M7 29.5 18.5 9h8L38 29.5" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M11 30c4-4 7 4 11 0s7 4 11 0M11 36c4-4 7 4 11 0s7 4 11 0" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
      <span><strong>HEAT</strong><b>RANSFER</b></span>
    </a>
  )
}
function PipeVisual() {
  return (
    <div className="pipe-card" aria-label="Representación conceptual de la tubería Heat Transfer">
      <div className="pipe-card__top">
        <span>TECNOLOGÍA TÉRMICA</span>
        <span className="live-dot">FLUJO ACTIVO</span>
      </div>
      <svg className="pipe-visual" viewBox="0 0 560 390" fill="none" role="img" aria-label="Tubería con protección térmica y agua fluyendo">
        <defs>
          <linearGradient id="pipeBody" x1="90" y1="60" x2="420" y2="340" gradientUnits="userSpaceOnUse">
            <stop stopColor="#F7FFFF" /><stop offset=".45" stopColor="#9CC5C5" /><stop offset="1" stopColor="#456C72" />
          </linearGradient>
          <linearGradient id="water" x1="100" y1="0" x2="480" y2="0" gradientUnits="userSpaceOnUse">
            <stop stopColor="#82E6E0" /><stop offset="1" stopColor="#D4FFFA" />
          </linearGradient>
          <filter id="glow"><feGaussianBlur stdDeviation="8" result="blur" /><feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge></filter>
        </defs>
        <g opacity=".2" stroke="#B8E4E1"><path d="M40 70h480M40 140h480M40 210h480M40 280h480M40 350h480" /><path d="M90 30v330M190 30v330M290 30v330M390 30v330M490 30v330" /></g>
        <path d="M-20 270 400 100" stroke="#092B32" strokeWidth="106" strokeLinecap="round" opacity=".35" />
        <path d="M-20 250 400 80" stroke="url(#pipeBody)" strokeWidth="94" strokeLinecap="round" />
        <path d="M-20 250 400 80" stroke="#DDF6F3" strokeWidth="70" strokeLinecap="round" opacity=".32" />
        <path d="M-20 250 400 80" stroke="#173F46" strokeWidth="43" strokeLinecap="round" />
        <path className="water-line" d="M-20 250 400 80" stroke="url(#water)" strokeWidth="12" strokeLinecap="round" filter="url(#glow)" />
        <g transform="translate(402 78) rotate(-22)">
          <ellipse rx="32" ry="52" fill="#739B9E" /><ellipse rx="25" ry="43" fill="#D9EEEB" /><ellipse rx="18" ry="32" fill="#123C44" /><ellipse rx="9" ry="22" fill="#8CF2E9" filter="url(#glow)" />
        </g>
        <g className="cold-particles" fill="#D8FAF7"><path d="m105 80 5 12 12 5-12 5-5 12-5-12-12-5 12-5 5-12Z" /><path d="m450 230 4 10 10 4-10 4-4 10-4-10-10-4 10-4 4-10Z" /><circle cx="180" cy="42" r="4" /><circle cx="480" cy="175" r="5" /><circle cx="65" cy="180" r="3" /></g>
      </svg>
      <div className="pipe-card__bottom">
        <div><ThermometerSnowflake size={20} /><span>Protección frente al frío</span></div>
        <div><Waves size={20} /><span>Continuidad del suministro</span></div>
      </div>
      <p>Imagen conceptual del producto</p>
    </div>
  )
}
const sectors = [
  { icon: HardHat, title: 'Constructoras', text: 'Infraestructura sanitaria pensada desde el diseño para operar en climas exigentes.', image: '/images/construccion.jpg' },
  { icon: MountainSnow, title: 'Cabañas y turismo', text: 'Una experiencia sin interrupciones para huéspedes, incluso durante la temporada invernal.', image: '/images/cabanas.jpg' },
  { icon: Leaf, title: 'Agricultura', text: 'Continuidad hídrica para recintos, riego y apoyo a la operación diaria en zonas heladas.', image: '/images/agricultura.jpg' },
  { icon: Factory, title: 'Industria', text: 'Protección de redes y procesos donde detener el agua también detiene la operación.', image: '/images/industria.jpg' },
]
const faqs = [
  { q: '¿El producto ya está disponible en Chile?', a: 'Estamos en la etapa de introducción del producto al mercado chileno. Por eso trabajamos con evaluación previa de cada proyecto y conversamos directamente con potenciales clientes y partners para planificar su implementación.' },
  { q: '¿Sirve para instalaciones existentes?', a: 'Depende de la configuración de la red, su exposición y las condiciones del terreno. Revisamos cada caso para determinar la alternativa adecuada antes de recomendar una solución.' },
  { q: '¿En qué zonas pueden evaluar proyectos?', a: 'Nuestro foco está en localidades expuestas a heladas y frío extremo, como Puerto Natales, Punta Arenas, Coyhaique y otras zonas del sur de Chile. También evaluamos proyectos en otras regiones.' },
  { q: '¿Cómo solicito una cotización?', a: 'Escríbenos por WhatsApp con la ubicación, el tipo de proyecto y una breve descripción de la necesidad. Con esa información podremos coordinar una evaluación y solicitar los antecedentes técnicos necesarios.' },
]
export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(0)
  const [formSent, setFormSent] = useState(false)
  const submitContact = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const message = [
      'Hola Heat Transfer, quiero evaluar un proyecto.',
      `Nombre: ${data.get('name')}`,
      `Empresa: ${data.get('company') || 'No indicada'}`,
      `Sector: ${data.get('sector')}`,
      `Ubicación: ${data.get('location')}`,
      `Proyecto: ${data.get('message')}`,
    ].join('\n')
    window.open(whatsappUrl(message), '_blank', 'noopener,noreferrer')
    setFormSent(true)
  }
  return (
    <main>
      <header className="site-header">
        <div className="container header-inner">
          <Brand light />
          <nav className={menuOpen ? 'nav nav--open' : 'nav'} aria-label="Navegación principal">
            <a href="#solucion" onClick={() => setMenuOpen(false)}>La solución</a>
            <a href="#aplicaciones" onClick={() => setMenuOpen(false)}>Aplicaciones</a>
            <a href="#nosotros" onClick={() => setMenuOpen(false)}>Nosotros</a>
            <a href="#preguntas" onClick={() => setMenuOpen(false)}>Preguntas</a>
            <a className="button button--small button--light nav__cta" href="#contacto" onClick={() => setMenuOpen(false)}>Evaluar mi proyecto <ArrowRight size={16} /></a>
          </nav>
          <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}>
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>
      <section className="hero" id="inicio">
        <div className="hero__background" />
        <div className="container hero__grid">
          <div className="hero__content">
            <div className="eyebrow eyebrow--light"><Snowflake size={15} /> Tecnología para climas extremos</div>
            <h1>Que el frío no<br />detenga <em>tu agua.</em></h1>
            <p>Una tubería especial para proteger el suministro en zonas de heladas intensas. La solución que el sur de Chile estaba esperando.</p>
            <div className="hero__actions">
              <a className="button button--accent" href="#contacto">Conversemos de tu proyecto <ArrowRight size={18} /></a>
              <a className="text-link text-link--light" href="#solucion">Descubrir la solución <ArrowDown size={17} /></a>
            </div>
            <div className="hero__note"><span /> Producto en etapa de introducción a Chile</div>
          </div>
          <PipeVisual />
        </div>
        <div className="container hero__footer">
          <span>Diseñado para proyectos donde el agua no puede detenerse</span>
          <div><span>PUERTO NATALES</span><i /><span>PUNTA ARENAS</span><i /><span>COYHAIQUE</span></div>
        </div>
      </section>
      <section className="trust-strip" aria-label="Características del servicio">
        <div className="container trust-strip__inner">
          <div><ShieldCheck /><span><strong>Evaluación por proyecto</strong><small>Una recomendación según tu necesidad real</small></span></div>
          <div><Building2 /><span><strong>Enfoque B2B</strong><small>Soluciones para operaciones e infraestructura</small></span></div>
          <div><MapPin /><span><strong>Foco en el sur de Chile</strong><small>Atención a zonas expuestas a frío extremo</small></span></div>
        </div>
      </section>
      <section className="section problem" id="problema">
        <div className="container">
          <div className="section-heading section-heading--split">
            <div><span className="kicker">EL PROBLEMA</span><h2>El hielo no avisa.<br />Pero sí <em>se puede prevenir.</em></h2></div>
            <p>Cuando una tubería se congela, el problema deja de ser solo sanitario. Se transforma en interrupciones, reparaciones y una operación que no puede continuar.</p>
          </div>
          <div className="problem-grid">
            <article className="problem-card"><span>01</span><Snowflake /><h3>Agua detenida</h3><p>El suministro se interrumpe justo cuando las condiciones exteriores son más difíciles.</p></article>
            <article className="problem-card problem-card--featured"><span>02</span><ThermometerSnowflake /><h3>Daños en la red</h3><p>La expansión del hielo puede comprometer tuberías, conexiones y puntos críticos de la instalación.</p></article>
            <article className="problem-card"><span>03</span><Factory /><h3>Operación en pausa</h3><p>Una falla de agua afecta a personas, procesos, servicios y la continuidad del negocio.</p></article>
          </div>
        </div>
      </section>
      <section className="section solution" id="solucion">
        <div className="container solution__grid">
          <div className="solution__visual">
            <div className="solution__rings"><span /><span /><span /></div>
            <div className="mini-pipe"><div className="mini-pipe__outer"><div className="mini-pipe__inner"><Waves /></div></div></div>
            <div className="tech-label tech-label--one"><span>01</span> Protección térmica</div>
            <div className="tech-label tech-label--two"><span>02</span> Flujo protegido</div>
            <small>REPRESENTACIÓN CONCEPTUAL</small>
          </div>
          <div className="solution__content">
            <span className="kicker kicker--teal">LA SOLUCIÓN</span>
            <h2>Tecnología que trabaja<br />cuando el termómetro baja.</h2>
            <p className="lead">Heat Transfer es una tubería especial concebida para reducir el riesgo de congelamiento del agua en instalaciones expuestas a bajas temperaturas.</p>
            <p>Su propósito es simple: ayudar a mantener la continuidad del suministro y entregar una alternativa más confiable para proyectos en climas severos.</p>
            <ul className="check-list">
              <li><Check /> Evaluación según temperatura, exposición y tipo de instalación</li>
              <li><Check /> Aplicación en proyectos nuevos y revisión de redes existentes</li>
              <li><Check /> Orientación técnica para definir la implementación adecuada</li>
            </ul>
            <a className="button button--dark" href="#contacto">Quiero información técnica <ArrowRight size={18} /></a>
          </div>
        </div>
      </section>
      <section className="section applications" id="aplicaciones">
        <div className="container">
          <div className="section-heading section-heading--split section-heading--baseline">
            <div><span className="kicker">APLICACIONES</span><h2>Una necesidad transversal.<br /><em>Una solución austral.</em></h2></div>
            <p>Desde una cabaña aislada hasta una red industrial: evaluamos el contexto para proteger lo que no puede detenerse.</p>
          </div>
          <div className="sector-grid">
            {sectors.map(({ icon: Icon, title, text, image }, index) => (
              <article className="sector-card" key={title}>
                <img src={image} alt={`Referencia para ${title.toLowerCase()}`} loading="lazy" />
                <div className="sector-card__shade" />
                <span className="sector-card__number">0{index + 1}</span>
                <div className="sector-card__content"><Icon /><h3>{title}</h3><p>{text}</p></div>
              </article>
            ))}
          </div>
          <div className="municipal-banner">
            <div className="municipal-banner__icon"><Building2 /></div>
            <div><span>TAMBIÉN PARA EL SECTOR PÚBLICO</span><h3>Municipios y servicios comunitarios</h3></div>
            <p>Infraestructura para localidades y comunidades que necesitan mantener servicios esenciales durante el invierno.</p>
            <a href="#contacto" aria-label="Consultar por proyectos municipales"><ArrowRight /></a>
          </div>
        </div>
      </section>
      <section className="section origin" id="nosotros">
        <div className="container origin__grid">
          <div className="origin__intro">
            <span className="kicker kicker--light">NUESTRA HISTORIA</span>
            <h2>A veces, la innovación<br />es saber <em>mirar distinto.</em></h2>
            <div className="origin__seal"><MountainSnow /><span>DESCUBIERTO EN ASIA<br /><strong>PARA EL SUR DE CHILE</strong></span></div>
          </div>
          <div className="origin__story">
            <span className="quote-mark">“</span>
            <p className="origin__lead">En una feria de empresarios chinos, casi nadie se detenía frente a este producto. Nosotros sí.</p>
            <p>Porque donde otros veían una tubería más, nosotros veíamos los inviernos de Puerto Natales, las heladas de Coyhaique y los proyectos que cada año enfrentan el mismo problema.</p>
            <p>Decidimos acercar esta tecnología a Chile y construir una solución con sentido local: entender cada proyecto, conversar directo y ayudar a que el agua siga fluyendo.</p>
            <div className="origin__signature"><span /><strong>El equipo de Heat Transfer</strong></div>
          </div>
        </div>
      </section>
      <section className="section process">
        <div className="container">
          <div className="section-heading section-heading--center"><span className="kicker">CÓMO PARTIMOS</span><h2>De tu proyecto a una solución<br /><em>en tres conversaciones.</em></h2></div>
          <div className="process-grid">
            <article><div className="process-icon"><MessageCircle /><span>1</span></div><h3>Cuéntanos el contexto</h3><p>Ubicación, tipo de instalación y problema que necesitas resolver.</p></article>
            <article><div className="process-icon"><ThermometerSnowflake /><span>2</span></div><h3>Evaluamos la necesidad</h3><p>Revisamos los antecedentes y definimos qué información técnica falta.</p></article>
            <article><div className="process-icon"><ShieldCheck /><span>3</span></div><h3>Proponemos el camino</h3><p>Coordinamos la alternativa de implementación y los siguientes pasos.</p></article>
          </div>
        </div>
      </section>
      <section className="section faq" id="preguntas">
        <div className="container faq__grid">
          <div className="faq__heading"><span className="kicker">PREGUNTAS FRECUENTES</span><h2>Antes de conversar,<br />resolvamos lo esencial.</h2><p>¿Tu pregunta no está aquí? Escríbenos y la revisamos directamente.</p><a className="text-link" href={whatsappUrl()} target="_blank" rel="noreferrer">Hacer otra pregunta <ArrowRight size={17} /></a></div>
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <article className={`faq-item ${openFaq === index ? 'faq-item--open' : ''}`} key={faq.q}>
                <button onClick={() => setOpenFaq(openFaq === index ? null : index)} aria-expanded={openFaq === index}><span>{faq.q}</span><ChevronDown /></button>
                <div className="faq-item__answer"><p>{faq.a}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="contact" id="contacto">
        <div className="container contact__grid">
          <div className="contact__content">
            <div className="eyebrow eyebrow--light"><Snowflake size={15} /> Hablemos de tu proyecto</div>
            <h2>El próximo invierno<br />puede ser <em>diferente.</em></h2>
            <p>Cuéntanos dónde está tu proyecto y qué necesitas proteger. Iniciemos una conversación directa, sin compromiso.</p>
            <div className="contact__points"><span><Check /> Atención personalizada</span><span><Check /> Enfoque B2B</span><span><Check /> Evaluación inicial</span></div>
          </div>
          <form className="contact-form" onSubmit={submitContact}>
            <div className="form-heading"><div><MessageCircle /></div><span><strong>Conversemos por WhatsApp</strong><small>Completa lo básico. Nosotros seguimos la conversación.</small></span></div>
            <div className="form-row">
              <label>Nombre *<input name="name" type="text" placeholder="Tu nombre" required /></label>
              <label>Empresa<input name="company" type="text" placeholder="Nombre de tu empresa" /></label>
            </div>
            <div className="form-row">
              <label>Sector *<select name="sector" required defaultValue=""><option value="" disabled>Selecciona una opción</option><option>Construcción</option><option>Municipio / Sector público</option><option>Agricultura</option><option>Cabañas / Turismo</option><option>Industria</option><option>Otro</option></select></label>
              <label>Ubicación *<input name="location" type="text" placeholder="Ciudad o localidad" required /></label>
            </div>
            <label>Cuéntanos brevemente tu necesidad *<textarea name="message" placeholder="Ej: Necesitamos proteger una red de agua expuesta a heladas..." rows={3} required /></label>
            <button className="button button--whatsapp" type="submit"><MessageCircle size={19} /> Enviar y abrir WhatsApp <ArrowRight size={18} /></button>
            <p className="form-privacy">Al continuar, se abrirá WhatsApp con tu mensaje listo para enviar.</p>
            {formSent && <p className="form-success" role="status"><Check size={16} /> Tu mensaje está listo en WhatsApp.</p>}
          </form>
        </div>
      </section>
      <footer className="footer">
        <div className="container footer__top"><div><Brand light /><p>Tecnología para mantener el agua en movimiento,<br />incluso cuando el clima dice lo contrario.</p></div><div className="footer__links"><div><strong>EXPLORA</strong><a href="#solucion">La solución</a><a href="#aplicaciones">Aplicaciones</a><a href="#nosotros">Nosotros</a></div><div><strong>CONTACTO</strong><a href="#contacto">Evaluar un proyecto</a><a href={whatsappUrl()} target="_blank" rel="noreferrer">WhatsApp</a><span>Chile · Zona austral</span></div></div></div>
        <div className="container footer__bottom"><span>© {new Date().getFullYear()} Heat Transfer. Todos los derechos reservados.</span><span>Las imágenes son referenciales. Producto en etapa de introducción a Chile.</span></div>
      </footer>
      <a className="floating-whatsapp" href={whatsappUrl()} target="_blank" rel="noreferrer" aria-label="Conversar por WhatsApp"><MessageCircle /><span>¿Conversamos?</span></a>
    </main>
  )
}