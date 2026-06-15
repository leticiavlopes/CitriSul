# CitriSul
# Agro Forte, Futuro Sustentável – SENAR/PR

**Site institucional para o concurso temático do SENAR/PR, com foco na valorização do pequeno produtor rural, no fortalecimento do associativismo e na divulgação da citricultura sustentável da região de Pinhão, Paraná.**

---

## 📋 Escopo do Projeto

Esta aplicação web foi desenvolvida como parte do concurso **"Agro forte, futuro sustentável: equilíbrio entre produção e meio ambiente"**, promovido pelo SENAR/PR. O objetivo central do site é apresentar, de forma informativa e visualmente envolvente, a cadeia produtiva da tangerina no estado do Paraná — com especial destaque para o município de **Pinhão** — evidenciando como a agricultura familiar, aliada ao cooperativismo e a práticas sustentáveis, pode gerar desenvolvimento econômico e preservação ambiental.

O conteúdo do site percorre temas como:

- A diversidade de variedades da tangerina e sua classificação botânica.
- O panorama da produção paranaense e sua posição no cenário nacional.
- As particularidades edafoclimáticas de Pinhão que favorecem a citricultura.
- O papel transformador do **associativismo** e do **cooperativismo** para o pequeno produtor.
- As etapas do cultivo e os tratos culturais envolvidos na produção.
- Práticas sustentáveis de manejo, adubação e controle fitossanitário.

---

## 🚀 Funcionalidades Implementadas

### 🌐 Design Integralmente Responsivo

O layout foi concebido sob o paradigma **Mobile-First**, utilizando **CSS Grid** e **Flexbox** para garantir fluidez e adaptabilidade em diferentes tamanhos de tela — desde smartphones até monitores de alta resolução. A disposição dos elementos é reorganizada automaticamente em breakpoints estratégicos, assegurando legibilidade e usabilidade em qualquer dispositivo.

### ♿ Acessibilidade Visual Aprimorada

O site incorpora recursos de acessibilidade que permitem:

- **Aumento e diminuição global da fonte** — O tamanho do texto pode ser ajustado em tempo real por meio de botões dedicados, com limites mínimos e máximos configurados para preservar a hierarquia visual.
- **Alternância de Alto Contraste** — Um modo de alto contraste pode ser ativado/desativado, alterando dinamicamente a paleta de cores de toda a interface para combinações de alto contraste (fundo escuro, texto claro), beneficiando usuários com baixa visão ou sensibilidade a determinados esquemas cromáticos. A classe `.high-contrast` é aplicada ao elemento `body` e todas as seções do site respondem adequadamente à troca de tema.

### 📜 Conteúdo Renderizado Dinamicamente

Dados como a tabela de classificação taxonômica, o ranking de produção por estado, os cards de produção, associativismo e variedades, a timeline de etapas e os tratos culturais são armazenados em **arrays de objetos JavaScript** e injetados no DOM no carregamento da página. Essa abordagem:

- Facilita a manutenção e atualização do conteúdo (basta alterar os arrays, sem manipular o HTML).
- Torna o código mais limpo e modular.
- Reduz a duplicação de marcação.

### 🎬 Animações de Entrada (Scroll Reveal)

As seções do site utilizam um efeito de **revelação suave ao rolar a página** (scroll reveal). Elementos com a classe `.reveal` são automaticamente exibidos com transição de opacidade e deslocamento vertical quando entram na janela de visualização do usuário, melhorando a experiência de navegação.

### 🧭 Navegação Semântica e Acessível

O HTML emprega **tags semânticas** (`<header>`, `<main>`, `<section>`, `<article>`, `<footer>`, `<nav>`) e **atributos ARIA** (`role`, `aria-label`, `aria-expanded`, `aria-controls`) para garantir compatibilidade com leitores de tela e tecnologias assistivas. O menu de navegação é completamente funcional tanto em desktop quanto em dispositivos móveis (com menu hamburguer).

---

## 🛠️ Tecnologias Utilizadas

| Tecnologia   | Descrição                                                                 |
|--------------|---------------------------------------------------------------------------|
| **HTML5**    | Estrutura semântica da página, com meta tags para SEO e atributos ARIA.   |
| **CSS3**     | Estilização completa com variáveis nativas (`:root`), Grid, Flexbox, animações e media queries para responsividade. |
| **JavaScript (ES6)** | Lógica de renderização dinâmica, controle de acessibilidade (fonte e contraste), menu mobile e scroll reveal. |
| **Google Fonts** | Fonte tipográfica "Parkinsans" importada para uso nos botões do menu. |

Nenhum framework ou biblioteca externa (como Bootstrap, React ou jQuery) foi utilizado — todo o código é **vanilla**, seguindo boas práticas de componentização e modularidade.

---

## 📁 Estrutura de Arquivos
/
├── index.html # Página principal do site
├── style.css # Estilos globais, responsivos e modo alto contraste
├── script.js # Dados dinâmicos, interações e acessibilidade
├── img/ # Diretório de imagens do projeto
│ ├── LogoSiteCitrisul.png
│ ├── HeaderImagem.png
│ ├── PlanoDeFundoInicio.jpg
│ └── InicioImagemDoPeAMesa.jpg
└── README.md # Este arquivo de documentação
