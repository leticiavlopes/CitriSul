# 🍊 Citricultura PR: Agro Forte, Futuro Sustentável

> **Projeto desenvolvido para o Concurso Agrinho (SENAR/PR)**  
> **Tema:** Agro forte, futuro sustentável: equilíbrio entre produção e meio ambiente.  
> **Tema Regional:** Citricultura no Paraná — A força da tangerina, o associativismo e os pomares de Pinhão.

---

## 📖 Sobre o Projeto

Este repositório contém o código-fonte de uma aplicação web estática desenvolvida para o concurso **Agrinho**. O projeto tem como escopo principal a valorização do pequeno produtor rural paranaense, destacando o poder transformador do associativismo e a beleza e relevância econômica dos pomares de tangerina no município de **Pinhão - PR**.

A narrativa da aplicação aprofunda-se na **citricultura do Paraná**, com ênfase na produção de tangerinas (especialmente a variedade Ponkan, além de bergamota, murcott/morgote e mimosa). O site explora o equilíbrio entre a produção agrícola e a preservação ambiental, demonstrando como a agricultura familiar, aliada à assistência técnica e ao cooperativismo, promove um futuro sustentável no campo.

---

## 🚀 Funcionalidades Principais

A aplicação foi concebida com foco em performance, experiência do usuário (UX) e inclusão digital. As principais funcionalidades implementadas incluem:

### 📱 Design Integralmente Responsivo (Mobile-First)
* Arquitetura de layout fluida utilizando **CSS Grid** e **Flexbox**.
* Adaptação automática de tipografia, espaçamentos e grids para dispositivos móveis, tablets e desktops.
* Menu de navegação *hamburger* (sanfona) para telas menores, garantindo usabilidade em smartphones.

### ♿ Recursos Avançados de Acessibilidade Visual
O projeto implementa um menu de acessibilidade flutuante para garantir que o conteúdo seja consumido por usuários com diferentes necessidades visuais:
* **Alternância de Alto Contraste:** Modifica as variáveis CSS em tempo real para aplicar um tema de alto contraste (fundo preto, texto e bordas brancas), facilitando a leitura para pessoas com baixa visão ou fotofobia.
* **Redimensionamento de Fonte:** Botões para aumentar e diminuir o tamanho da fonte base (`root font-size`), variando de 14px a 22px, sem quebrar o layout responsivo.
* **Suporte a `prefers-reduced-motion`:** Desativa automaticamente animações e transições para usuários que possuem essa configuração ativada em seus sistemas operacionais.
* **Semântica e ARIA:** Uso extensivo de tags semânticas HTML5 (`<header>`, `<main>`, `<section>`, `<article>`) e atributos WAI-ARIA (`aria-label`, `aria-expanded`, `role`, `aria-hidden`) para total compatibilidade com leitores de tela.

### ⚡ Interatividade e Renderização Dinâmica
* Geração dinâmica de componentes (tabelas taxonômicas, gráficos de barras de produção, cartões de variedades e *timelines*) via manipulação do DOM com JavaScript Vanilla.
* Animações de *Scroll Reveal* (elementos que surgem suavemente ao entrar na viewport) para melhorar o engajamento visual.
* Navegação por âncoras com *smooth scrolling* (rolagem suave).

---

## 🛠️ Tecnologias Utilizadas

O desenvolvimento front-end utilizou exclusivamente tecnologias nativas da web (Vanilla), garantindo leveza, rápida execução e zero dependência de *frameworks* pesados ou *build tools*.

### Estrutura e Marcação
* **HTML5:** Marcação semântica rigorosa, estruturada para SEO e acessibilidade.

### Estilização e Layout
* **CSS3:**
  * **CSS Custom Properties (Variáveis):** Para gerenciamento centralizado de cores, espaçamentos e tipografia, facilitando a implementação do modo de alto contraste.
  * **CSS Grid & Flexbox:** Para construção de layouts complexos e responsivos.
  * **Media Queries:** Para breakpoints responsivos (`@media (min-width: 768px)` e `@media (max-width: 767px)`).
  * **Transitions & Animations:** Para microinterações (hover, scroll reveal).

### Lógica e Interatividade
* **JavaScript (ES6+):**
  * Manipulação do DOM (`document.querySelector`, `innerHTML`, `classList`).
  * Gerenciamento de eventos (`addEventListener`, delegação de eventos).
  * Lógica de estado para o menu de acessibilidade e menu mobile.
  * Cálculos matemáticos para renderização proporcional de gráficos de barras.

### Tipografia
* **Google Fonts:** Importação da fonte *Parkinsans* (pesos 300 a 800) para a identidade visual dos botões e destaques, combinada com a fonte *system-ui* para o corpo do texto, otimizando o *Core Web Vitals*.

---

## 📂 Estrutura do Projeto

```text
├── index.html      # Estrutura principal e semântica da aplicação.
├── style.css       # Folha de estilos, variáveis CSS, responsividade e alto contraste.
├── script.js       # Lógica de renderização dinâmica, acessibilidade e interações.
└── img/            # Diretório de ativos visuais (logos, imagens de fundo, fotos dos pomares).
    ├── LogoSiteCitrisul.png
    ├── HeaderImagem.png
    ├── PlanoDeFundoInicio.jpg
    └── InicioImagemDoPeAMesa.jpg

---

## 💻 Como Executar o Projeto

Por ser uma aplicação 100% front-end estática, não há necessidade de compilação, instalação de dependências (como `npm install`) ou configuração de servidores complexos.

### Opção 1: Execução Direta
1. Clone este repositório ou baixe os arquivos em formato `.zip`.
   ```bash
   git clone https://github.com/seu-usuario/concurso-agrinho-citricultura.git
   ```
2. Navegue até o diretório do projeto.
3. Abra o arquivo `index.html` diretamente em qualquer navegador moderno (Chrome, Firefox, Edge, Safari).

### Opção 2: Utilizando um Servidor Local (Recomendado para desenvolvimento)
Para evitar possíveis problemas com políticas de segurança de arquivos locais (CORS) ao carregar imagens ou fontes, utilize uma extensão de servidor local:
* **VS Code:** Instale a extensão **Live Server**, clique com o botão direito no `index.html` e selecione "Open with Live Server".
* **Python:** Execute o seguinte comando na raiz do projeto:
  ```bash
  python -m http.server 8000
  ```
  E acesse `http://localhost:8000` no navegador.

---

## 🌱 Sustentabilidade e Impacto (Contexto Agrinho)

O site não apenas apresenta informações, mas atua como uma ferramenta educativa. Ele destaca:
1. **O Terroir de Pinhão:** Como o relevo acidentado e a amplitude térmica favorecem a doçura e qualidade da Ponkan.
2. **O Papel da Assistência Técnica:** A importância do técnico em agropecuária (como o profissional que supervisionou a base técnica deste projeto) na formalização das associações e na orientação dos tratos culturais (calagem, poda, manejo biológico).
3. **Equilíbrio Ambiental:** O uso de defensivos orgânicos, adubação integrada e a preservação de matas ciliares pela agricultura familiar.

---

## 📝 Licença e Créditos

Projeto elaborado em conformidade com as diretrizes do **Concurso Agrinho - SENAR/PR**.  
Base técnica e supervisão: **Marcos Szumilo** (Técnico em Agropecuária, pós-graduado em Gestão Ambiental).  

Desenvolvido com o objetivo de valorizar o pequeno produtor rural, o poder do associativismo e a beleza dos pomares paranaenses.

---
<p align="center">
  <strong>Agro forte, futuro sustentável.</strong><br>
  Da terra à mesa: a força da tangerina paranaense.
</p>
```
