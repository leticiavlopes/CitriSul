const taxonomia = [
  { rank: 'Reino',    valor: 'Plantae' },
  { rank: 'Divisão',  valor: 'Magnoliophyta' },
  { rank: 'Classe',   valor: 'Magnoliopsida' },
  { rank: 'Ordem',    valor: 'Sapindales' },
  { rank: 'Família',  valor: 'Rutaceae' },
  { rank: 'Gênero',   valor: 'Citrus' },
  { rank: 'Espécie',  valor: 'C. reticulata' }
];

const rankingEstados = [
  { estado: 'São Paulo',         pct: 30.9, destaque: false },
  { estado: 'Minas Gerais',      pct: 28.0, destaque: false },
  { estado: 'Rio Grande do Sul', pct: 15.4, destaque: false },
  { estado: 'Paraná',            pct: 10.9, destaque: true  }
];

const producaoCards = [
  {
    titulo: 'Produtividade no campo',
    descricao: 'Com técnicas adequadas de poda, adubação e irrigação orientadas pela assistência técnica municipal, o pequeno produtor de Pinhão alcança alta produtividade por planta, garantindo rentabilidade mesmo em pequenas áreas.'
  },
  {
    titulo: 'Qualidade da fruta',
    descricao: 'A amplitude térmica e o relevo de Pinhão produzem tangerinas com coloração alaranjada intensa, alta suculência e sabor doce — características que conquistam mercados exigentes, do CEASA local às gôndolas de supermercados.'
  },
  {
    titulo: 'Acesso a mercados',
    descricao: 'Feiras livres, mercados locais e canais institucionais são viabilizados pelo trabalho conjunto das associações rurais e da Secretaria de Agricultura.'
  }
];

/* 4º bloco ("Comercialização competitiva") removido conforme solicitado */
const associativismoCards = [
  {
    titulo: 'Assistência técnica ampliada',
    descricao: 'Técnicos da Secretaria Municipal de Agricultura orientam sobre manejo, pragas e boas práticas, atendendo mais famílias de forma organizada graças à estrutura das associações rurais.'
  },
  {
    titulo: 'Compra conjunta de insumos',
    descricao: 'A união dos associados permite negociar preços mais vantajosos para fertilizantes, mudas certificadas e defensivos, reduzindo o custo de produção de cada família.'
  },
  {
    titulo: 'Troca de experiências',
    descricao: 'As associações reúnem produtores com os mesmos desafios e interesses. Essa troca constante eleva o nível técnico de todos e fortalece o sentimento de pertencimento ao campo.'
  }
];

const variedadesCards = [
  {
    nome: '🍊 Ponkan',
    descricao: 'A mais doce e popular. Casca grossa e fácil de descascar, perfume inconfundível. Responsável pela maior parte da produção do Paraná e destaque em Pinhão.',
    consumo: 'Consumo in natura, merenda escolar e sucos'
  },
  {
    nome: '🍊 Murcott (Morgote)',
    descricao: 'Híbrido com sabor intenso, polpa firme e alaranjada. Muito apreciada na região Sul do Brasil pela sua doçura e acidez equilibradas.',
    consumo: 'Mesa e indústria de suco'
  },
  {
    nome: '🍊 Mexerica do Rio',
    descricao: 'Casca fina, segmentos bem definidos, sabor suave e aroma inconfundível. Uma das variedades mais antigas cultivadas no Brasil.',
    consumo: 'Consumo doméstico e feiras'
  },
  {
    nome: '🍊 Dekopon',
    descricao: 'Frutos grandes, sem sementes, formato com protuberância característica no topo. Sabor muito doce e sofisticado, apreciada no mercado premium.',
    consumo: 'Mercado gourmet e exportação'
  },
  {
    nome: '🍊 Montenegrina (Mimosa)',
    descricao: 'Variedade tardia, muito produtiva e resistente. Casca fina e polpa suculenta, comum em pomares familiares de todo o Sul do Brasil.',
    consumo: 'In natura e feiras livres'
  }
];

const etapas = [
  {
    etapa: 'Preparo do solo e plantio',
    desc: 'Análise de solo, correção de acidez com calcário (calagem), espaçamento adequado entre plantas e escolha de muda certificada e selecionada — garantindo sanidade desde a origem.'
  },
  {
    etapa: 'Tratos culturais — poda e adubação',
    desc: 'Poda de formação para definir a estrutura da planta e poda de limpeza para arejamento. Adubação com fertilizantes orgânicos e químicos conforme estágio de desenvolvimento e análise de solo.'
  },
  {
    etapa: 'Manejo fitossanitário',
    desc: 'Monitoramento constante de pragas como mosca-das-frutas. Uso prioritário de defensivos orgânicos e biológicos, com defensivos químicos apenas quando necessário — preservando a saúde do solo e da água.'
  },
  {
    etapa: 'Ceifa (roçadas)',
    desc: 'Controle das plantas daninhas entre as linhas do pomar por meio de roçadas periódicas, mantendo o ambiente limpo, reduzindo a competição por nutrientes e facilitando a circulação no campo.'
  },
  {
    etapa: 'Colheita',
    desc: 'Realizada no ponto ideal de maturação, com colheita manual cuidadosa para evitar danos à casca. Transporte rápido garante a qualidade da fruta do campo até o destino final.'
  },
  {
    etapa: 'Pós-colheita e comercialização',
    desc: 'Seleção e classificação dos frutos, lavagem, embalagem adequada e distribuição via associação ou cooperativa para mercados locais, regionais e institucionais como a merenda escolar.'
  }
];

const tratosCulturais = [
  { icone: '🪨', nome: 'Calagem',            desc: 'Aplicação de calcário para correção da acidez do solo' },
  { icone: '🌿', nome: 'Adubação orgânica',  desc: 'Compostos e estercos para nutrir e estruturar o solo' },
  { icone: '⚗️', nome: 'Adubação química',   desc: 'Fertilizantes minerais conforme análise de solo' },
  { icone: '🛡️', nome: 'Defensivos biológicos', desc: 'Controle de pragas com agentes naturais' },
  { icone: '✂️', nome: 'Poda de formação',   desc: 'Define a estrutura e o crescimento da planta' },
  { icone: '🌾', nome: 'Ceifa (roçadas)',    desc: 'Controle de plantas daninhas entre as linhas' }
];

/* ============================================================
   INICIALIZAÇÃO DO DOM
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {

  /* Tabela taxonômica */
  const taxoBody = document.getElementById('taxonomia-tabela-body');
  if (taxoBody) {
    taxonomia.forEach(item => {
      taxoBody.innerHTML += `
        <tr>
          <td>${item.rank}</td>
          <td><em>${item.valor}</em></td>
        </tr>
      `;
    });
  }

  /* Ranking de estados */
  const rankingEl = document.getElementById('ranking-lista');
  if (rankingEl) {
    const max = Math.max(...rankingEstados.map(e => e.pct));
    rankingEstados.forEach(item => {
      const largura = ((item.pct / max) * 100).toFixed(1);
      rankingEl.innerHTML += `
        <div class="ranking-item">
          <span class="ranking-estado">${item.estado}</span>
          <div class="ranking-barra-wrap"
               role="progressbar"
               aria-valuenow="${item.pct}"
               aria-valuemin="0"
               aria-valuemax="100"
               aria-label="${item.estado}: ${item.pct}%">
            <div class="ranking-barra${item.destaque ? ' destaque' : ''}" style="width:${largura}%"></div>
          </div>
          <span class="ranking-pct">${item.pct}%</span>
        </div>
      `;
    });
  }

  /* Cards de produção */
  const prodContainer = document.getElementById('producao-cards');
  if (prodContainer) {
    producaoCards.forEach(item => {
      prodContainer.innerHTML += `
        <article class="surface-block">
          <h3>${item.titulo}</h3>
          <p>${item.descricao}</p>
        </article>
      `;
    });
  }

  /* Cards de associativismo (3 blocos — 4.º removido) */
  const assocContainer = document.getElementById('associativismo-cards');
  if (assocContainer) {
    associativismoCards.forEach(item => {
      assocContainer.innerHTML += `
        <article class="surface-block">
          <h3>${item.titulo}</h3>
          <p>${item.descricao}</p>
        </article>
      `;
    });
  }

  /* Cards de variedades */
  const varContainer = document.getElementById('variedades-cards');
  if (varContainer) {
    variedadesCards.forEach(item => {
      varContainer.innerHTML += `
        <article class="surface-block">
          <h3>${item.nome}</h3>
          <p>${item.descricao}</p>
          <small><strong>Uso principal:</strong> ${item.consumo}</small>
        </article>
      `;
    });
  }

  /* Timeline de etapas */
  const etapasContainer = document.getElementById('etapas-timeline');
  if (etapasContainer) {
    etapas.forEach((item, index) => {
      etapasContainer.innerHTML += `
        <div class="timeline-item">
          <div class="timeline-marker" aria-hidden="true"></div>
          <div class="timeline-content">
            <h3>${index + 1}. ${item.etapa}</h3>
            <p>${item.desc}</p>
          </div>
        </div>
      `;
    });
  }

  /* Grid de tratos culturais */
  const tratosEl = document.getElementById('tratos-grid');
  if (tratosEl) {
    tratosCulturais.forEach(item => {
      tratosEl.innerHTML += `
        <div class="trato-item" title="${item.desc}">
          <span class="trato-icone" aria-hidden="true">${item.icone}</span>
          <span>${item.nome}</span>
        </div>
      `;
    });
  }

  /* Dispara reveal inicial para elementos já visíveis */
  revealOnScroll();
});

/* ============================================================
   ACESSIBILIDADE — FONTE
   ============================================================ */
const DEFAULT_FONT_SIZE = 16;
const MIN_FONT_SIZE     = 14;
const MAX_FONT_SIZE     = 22;
let currentFontSize = DEFAULT_FONT_SIZE;

function applyFontSize() {
  document.documentElement.style.fontSize = `${currentFontSize}px`;
}

function increaseFont() {
  currentFontSize = Math.min(MAX_FONT_SIZE, currentFontSize + 2);
  applyFontSize();
}

function decreaseFont() {
  currentFontSize = Math.max(MIN_FONT_SIZE, currentFontSize - 2);
  applyFontSize();
}

/* ============================================================
   ACESSIBILIDADE — ALTO CONTRASTE
   Aplica / remove a classe em <body> e marca o botão como ativo
   ============================================================ */
function toggleContrast() {
  const isActive = document.body.classList.toggle('high-contrast');
  const btn = document.getElementById('contrast-btn');
  if (btn) {
    btn.classList.toggle('active', isActive);
    btn.setAttribute('aria-pressed', String(isActive));
    btn.textContent = isActive ? 'Desativar contraste' : 'Alto contraste';
  }
}

/* ============================================================
   MENU DE ACESSIBILIDADE
   ============================================================ */
const accessibilityBtn  = document.getElementById('accessibility-btn');
const accessibilityMenu = document.getElementById('accessibility-menu');

if (accessibilityBtn && accessibilityMenu) {
  accessibilityBtn.addEventListener('click', () => {
    const isHidden = accessibilityMenu.classList.toggle('hidden');
    accessibilityBtn.setAttribute('aria-expanded', String(!isHidden));
  });

  /* Fecha o menu ao clicar fora */
  document.addEventListener('click', (e) => {
    if (
      !accessibilityBtn.contains(e.target) &&
      !accessibilityMenu.contains(e.target)
    ) {
      accessibilityMenu.classList.add('hidden');
      accessibilityBtn.setAttribute('aria-expanded', 'false');
    }
  });
}

/* ============================================================
   MENU HAMBÚRGUER
   ============================================================ */
const hamburger = document.getElementById('menu-toggle');
const navLinks  = document.getElementById('nav-links');

if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('show');
    hamburger.setAttribute('aria-expanded', String(isOpen));
  });

  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('show');
      hamburger.setAttribute('aria-expanded', 'false');
    });
  });
}

/* ============================================================
   REVEAL AO ROLAR
   ============================================================ */
const revealElements = document.querySelectorAll('.reveal');

function revealOnScroll() {
  const windowHeight = window.innerHeight;
  revealElements.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < windowHeight - 60) {
      el.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', revealOnScroll, { passive: true });
window.addEventListener('load',   revealOnScroll);
