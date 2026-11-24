import './style.css';

document.querySelector('#app').innerHTML = `
  <header class="topbar">
    <a class="brand" href="#" aria-label="N&M Arcondicionado - início">
      <span class="brand-mark">N<span>&</span>M</span>
      <span class="brand-name">ARCONDICIONADO</span>
    </a>
    <a class="header-link" href="#servicos">Nossos serviços <span>↗</span></a>
  </header>

  <main>
    <section class="hero">
      <div class="hero-content">
        <p class="eyebrow"><span class="eyebrow-line"></span> CONFORTO E QUALIDADE</p>
        <h1>O clima ideal<br>para o seu <em>ambiente.</em></h1>
        <p class="hero-copy">Soluções em ar-condicionado para deixar seus espaços mais confortáveis, eficientes e agradáveis.</p>
        <a class="primary-button" href="#servicos">Conheça nossos serviços <span>→</span></a>
      </div>
      <div class="hero-art" aria-hidden="true">
        <div class="orb orb-one"></div>
        <div class="orb orb-two"></div>
        <div class="air-symbol">❄</div>
        <div class="art-caption">CONFORTO EM CADA DETALHE</div>
      </div>
    </section>

    <section class="services" id="servicos">
      <div class="section-heading">
        <p class="eyebrow"><span class="eyebrow-line"></span> O QUE FAZEMOS</p>
        <h2>Cuidado completo<br>com o seu <em>ar.</em></h2>
      </div>
      <div class="service-grid">
        <article class="service-card">
          <span class="service-number">01</span>
          <div class="service-icon">＋</div>
          <h3>Instalação</h3>
          <p>Instalação de equipamentos de ar-condicionado com atenção aos detalhes.</p>
        </article>
        <article class="service-card">
          <span class="service-number">02</span>
          <div class="service-icon">↻</div>
          <h3>Manutenção</h3>
          <p>Cuidados preventivos e corretivos para o bom funcionamento do equipamento.</p>
        </article>
        <article class="service-card">
          <span class="service-number">03</span>
          <div class="service-icon">✧</div>
          <h3>Higienização</h3>
          <p>Limpeza do sistema para contribuir com a qualidade do ar e o desempenho.</p>
        </article>
      </div>
    </section>

    <section class="status-section">
      <div>
        <p class="eyebrow"><span class="eyebrow-line"></span> SISTEMA</p>
        <h2>Conexão com a<br><em>nossa API.</em></h2>
        <p class="status-description">Verificação de funcionamento do serviço da N&M Arcondicionado.</p>
      </div>
      <div class="status-panel">
        <div class="status-top"><span class="pulse"></span> MONITORAMENTO DO SISTEMA</div>
        <p class="status-label">Status da API</p>
        <p class="status-value" id="api-status" aria-live="polite">Verificando...</p>
        <p class="status-time" id="api-time">Aguardando resposta do servidor</p>
        <button id="refresh-status" class="refresh-button" type="button">Atualizar status <span>↻</span></button>
      </div>
    </section>
  </main>

  <footer>
    <a class="brand footer-brand" href="#">
      <span class="brand-mark">N<span>&</span>M</span>
      <span class="brand-name">ARCONDICIONADO</span>
    </a>
    <p>© ${new Date().getFullYear()} N&M Arcondicionado. Projeto acadêmico.</p>
  </footer>
`;

const statusElement = document.querySelector('#api-status');
const timeElement = document.querySelector('#api-time');
const refreshButton = document.querySelector('#refresh-status');

async function checkApi() {
  statusElement.textContent = 'Verificando...';
  statusElement.className = 'status-value loading';
  timeElement.textContent = 'Consultando /api/health';

  try {
    const response = await fetch('/api/health');
    if (!response.ok) throw new Error('A API retornou um erro.');

    const data = await response.json();
    statusElement.textContent = `Status da API: ${data.status}`;
    statusElement.className = 'status-value success';

    const date = new Date(data.dataHora);
    timeElement.textContent = `Última verificação: ${date.toLocaleString('pt-BR')}`;
  } catch (error) {
    statusElement.textContent = 'Status da API: indisponível';
    statusElement.className = 'status-value error';
    timeElement.textContent = 'Não foi possível conectar. Confira se a API está iniciada.';
    console.error(error);
  }
}

refreshButton.addEventListener('click', checkApi);
checkApi();
