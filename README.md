# 🍊 Citricultura PR — Agro Forte, Futuro Sustentável

> **Concurso Agrinho 2026 — SENAR/PR**  
> Tema: *"Agro forte, futuro sustentável: equilíbrio entre produção e meio ambiente"*

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)](https://developer.mozilla.org/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)](https://developer.mozilla.org/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)](https://developer.mozilla.org/docs/Web/JavaScript)
[![Acessibilidade](https://img.shields.io/badge/Acessibilidade-WCAG_2.1-005A9C)](https://www.w3.org/TR/WCAG21/)
[![Responsivo](https://img.shields.io/badge/Design-Responsivo-4CAF50)]()

---

## 📖 Visão Geral do Projeto

Este repositório contém o **site institucional** desenvolvido para o concurso **Agrinho**, promovido pelo **SENAR/PR** (Serviço Nacional de Aprendizagem Rural do Paraná). A aplicação web tem caráter educativo e informativo, sendo voltada à valorização do **pequeno produtor rural paranaense**, ao fortalecimento do **associativismo e cooperativismo** e à divulgação da beleza produtiva dos **pomares do município de Pinhão/PR**.

A proposta central da aplicação é demonstrar, por meio de conteúdo técnico e visualmente acessível, como a citricultura familiar — especialmente a produção de tangerinas — pode conciliar **alta produtividade**, **renda para a agricultura familiar** e **preservação ambiental**, materializando o tema *"equilíbrio entre produção e meio ambiente"*.

### 🎯 Objetivos da Aplicação

- **Educar** o público sobre a cadeia produtiva da tangerina no Paraná;
- **Valorizar** o pequeno produtor rural como agente fundamental do desenvolvimento territorial;
- **Incentivar** o associativismo e o cooperativismo como ferramentas de competitividade coletiva;
- **Divulgar** as condições edafoclimáticas (solo e clima) que tornam Pinhão um *terroir* privilegiado para a citricultura;
- **Promover** práticas agrícolas sustentáveis, com ênfase em manejo orgânico e biológico.

---

## 🌿 Tema Aprofundado: Citricultura no Paraná

O tema escolhido para aprofundamento técnico é a **citricultura no Paraná**, com ênfase na produção de **tangerinas** (*Citrus reticulata*) — em especial as variedades **Ponkan, Bergamota, Murcott (Morgote), Mexerica, Mimosa e Dekopon**.

### Pilares Temáticos Abordados

| Pilar | Descrição |
|-------|-----------|
| 🍊 **Tangerina paranaense** | Classificação taxonômica, variedades, ciclo produtivo e tratos culturais. |
| 👨‍🌾 **Pequeno produtor rural** | Papel central na agricultura familiar, adaptação à pequena propriedade e acesso a mercados institucionais (PNAE/PAA). |
| 🤝 **Associativismo/Cooperativismo** | Compra coletiva de insumos, assistência técnica ampliada, comercialização competitiva e troca de saberes. |
| 🌱 **Sustentabilidade ambiental** | Uso de defensivos biológicos, adubação orgânica integrada e preservação de matas ciliares e polinizadores. |
| 📍 **Pinhão/PR** | Relevo acidentado, alta amplitude térmica e programa municipal de fruticultura como diferenciais de qualidade. |

### Destaque Regional

O site apresenta dados concretos da produção estadual — o Paraná responde por **10,9% da produção nacional de tangerina**, integrando o grupo dos quatro maiores produtores do país — e destaca **Cerro Azul** como a Capital Nacional da Ponkan, além do *terroir* único de **Pinhão**, cujas condições climáticas conferem à fruta **doçura acentuada, suculência e coloração alaranjada intensa**.

---

## 💻 Tecnologias Front-End Utilizadas

O projeto foi desenvolvido exclusivamente com tecnologias **front-end nativas da plataforma web**, sem dependência de *frameworks* ou bibliotecas externas de terceiros, garantindo **leveza**, **performance** e **portabilidade**.

### 3.1 HTML5 (Estrutura Semântica)

- Uso extensivo de **elementos semânticos** (`<header>`, `<main>`, `<section>`, `<article>`, `<footer>`, `<nav>`, `<blockquote>`), favorecendo SEO e interpretação por tecnologias assistivas.
- Atributos **ARIA** (`role`, `aria-label`, `aria-expanded`, `aria-controls`, `aria-valuenow`, `aria-hidden`) para enriquecer a acessibilidade.
- Tabelas com `aria-label` descritivas, listas de progresso (`role="progressbar"`) e navegação estruturada por âncoras.
- Metadados completos (`charset`, `viewport`, `description`) para responsividade e indexação.

### CSS3 (Apresentação e Design Responsivo)

- **Variáveis CSS customizadas** (`:root`) para centralização de cores, espaçamentos, tipografia e raios de borda, facilitando manutenção e temas.
- **Layout moderno** com **CSS Grid** e **Flexbox**, garantindo adaptação fluida entre *mobile*, *tablet* e *desktop*.
- **Media Queries** com *breakpoints* em `767px` e `768px` para reorganização inteligente dos componentes.
- **Gradientes**, *mix-blend-mode*, sombras e transições suaves para uma experiência visual refinada.
- **Importação de tipografia** via Google Fonts (*Parkinsans*) com *fallback* para fontes do sistema.
- **Suporte a `prefers-reduced-motion`**, respeitando preferências de usuários com sensibilidade a animações.
- **Modo de alto contraste** implementado via classe `.high-contrast` no `<body>`, com overrides específicos para todos os componentes.

### JavaScript Vanilla (Interatividade)

- **JavaScript puro (ES6+)**, sem bibliotecas externas, reduzindo o *bundle* e eliminando dependências de build.
- Manipulação eficiente do DOM via `document.querySelector`, `addEventListener` e *template literals*.
- **Renderização dinâmica** de seções (taxonomia, ranking de produção, cards, linha do tempo, tratos culturais) a partir de **estruturas de dados em JSON** (`const`), separando claramente dados de apresentação.
- **Animações de *scroll reveal*** implementadas com `IntersectionObserver` simplificado via `getBoundingClientRect()`.
- **Menu hambúrguer** acessível com controle de `aria-expanded`.
- **Menu de acessibilidade flutuante** com funções para:
  - Aumentar/diminuir tamanho da fonte (faixa de 14px a 22px);
  - Alternar modo de alto contraste.
- Persistência do estado de fonte via variável em tempo de execução.

### Tipografia e Paleta Cromática

| Elemento | Valor |
|----------|-------|
| Fonte principal | *Segoe UI, Roboto, system-ui, sans-serif* |
| Fonte de destaque | *Parkinsans* (Google Fonts) |
| Cor de fundo | `#16222E` (azul-noite) |
| Cor do texto | `#F6D896` (dourado suave) |
| Cor de contorno/destaque | `#CC7630` (laranja tangerina) |
| Cor de cartões | `#1E2D3D` (azul-acinzentado) |

A paleta remete diretamente às cores do **pôr do sol no campo** e à **casca da tangerina**, estabelecendo identidade visual coerente com o tema rural.

---

## ✨ Funcionalidades Implementadas

### Design Integralmente Responsivo

O site adota a filosofia **mobile-first** com aprimoramentos progressivos:

- **Menu de navegação adaptativo**: em telas pequenas, transforma-se em menu hambúrguer expansível; em telas médias e grandes, exibe-se horizontalmente.
- **Grids fluidos**: as seções de cards (produção, variedades, associativismo, tratos culturais) reorganizam-se automaticamente conforme o espaço disponível.
- **Hero section reconfigurável**: o bloco inicial alterna entre layout empilhado (mobile) e lado a lado (desktop).
- **Imagens otimizadas**: uso de `object-fit: cover` e alturas máximas para preservar proporções em qualquer resolução.
- **Tipografia escalável**: baseada em `rem`, permitindo redimensionamento proporcional.

### 4.2 Recursos de Acessibilidade Visual

O projeto implementa um **painel de acessibilidade fixo** (canto inferior direito), oferecendo:

| Recurso | Descrição |
|---------|-----------|
| 🔤 **Aumentar fonte** | Incrementa o tamanho base em 2px (até 22px). |
| 🔡 **Diminuir fonte** | Reduz o tamanho base em 2px (mínimo 14px). |
| 🌓 **Alto contraste** | Alterna para fundo preto, texto branco e contornos brancos, atendendo a usuários com baixa visão ou fotofobia. |

Além disso:

- Todos os elementos interativos possuem **`aria-label`** descritivos.
- O menu de acessibilidade utiliza `role="dialog"` e controla `aria-expanded`.
- A linha do tempo e as barras de progresso possuem **roles ARIA apropriados**.
- O site respeita `prefers-reduced-motion`, desabilitando animações para usuários sensíveis.
- Hierarquia de títulos (`h1` → `h2` → `h3`) respeitada rigorosamente.

Conteúdo Estruturado

- **Seção Hero** com chamada impactante e CTAs claros.
- **Classificação taxonômica** da tangerina em tabela dinâmica.
- **Ranking visual de produção** por estado com barras proporcionais.
- **Cards informativos** sobre produção, associativismo e variedades.
- **Linha do tempo vertical** das etapas produtivas.
- **Grid de tratos culturais** com ícones representativos.
- **Bloco de sustentabilidade** com três eixos (defensivos, adubação, impacto).
- **Seção de créditos** destacando a colaboração técnica.

---

## 📁 Estrutura do Projeto
```
├── index.html # Estrutura semântica e conteúdo principal
├── style.css # Estilos, variáveis CSS, responsividade e modo de alto contraste
├── script.js # Lógica de renderização dinâmica, acessibilidade e animações
└── img/ # Recursos visuais
├── LogoSiteCitrisul.png
├── HeaderImagem.png
├── PlanoDeFundoInicio.jpg
└── InicioImagemDoPeAMesa.jpg
```

---

## 👨‍🌾 Créditos

> **Marcos Szumilo**
> *Técnico em Agropecuária, formado e pós-graduado em Gestão Ambiental*

Este site foi elaborado com a colaboração e supervisão de um técnico em agropecuária que atua na Secretaria Municipal de Agricultura, garantindo que as associações rurais permaneçam informadas, formalizadas e produtivas.

---

<p align="center">
  <strong>Concurso Agrinho — SENAR/PR</strong><br>
  <em>Agro forte, futuro sustentável: equilíbrio entre produção e meio ambiente</em>
</p>
