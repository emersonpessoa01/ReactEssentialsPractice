# Projeto de Componentes React

Este repositório contém a implementação de 10 componentes interativos desenvolvidos com React, utilizando hooks como `useState`,`useEffect`,`useContext`, `useReduce` e `useRef`. Cada componente aborda um conceito fundamental da biblioteca React, com desafios adicionais para consolidar o aprendizado.

## Atividades Implementadas

### 1. **Contador Simples**
- **Descrição:** Exibe um número na tela com botões para “Incrementar” e “Decrementar”.
- **Desafio:** O valor não pode ser menor que zero.
- **Arquivo:** `src/components/Counter`

---

### 2. **Alteração de Cor de Fundo**
- **Descrição:** Um botão altera a cor de fundo da página.
- **Desafio:** Gera cores aleatórias sempre que o botão é clicado.
- **Arquivo:** `src/components/BackgroundColorChanger`

---

### 3. **Lista de Tarefas**
- **Descrição:** Um aplicativo de lista de tarefas (to-do list) com funções para adicionar, remover e marcar tarefas como concluídas e filtrar as tarefas pendentes.
- **Desafio:** Filtros para visualizar tarefas pendentes ou concluídas.
- **Arquivo:** `src/components/FilteredList`

---

### 4. **Temporizador com useEffect**
- **Descrição:** Um temporizador que conta o tempo em segundos.
- **Desafio:** Botões para pausar e reiniciar o temporizador.
- **Arquivo:** `src/components/Timer`

---

### 5. **Filtro de Lista**
- **Descrição:** Renderiza uma lista de nomes filtrados com base em uma entrada de texto.
- **Desafio:** Ignora maiúsculas e minúsculas ao filtrar.
- **Arquivo:** `src/components/FilteredList`

---

### 6. **Formulário de Registro Simples**
- **Descrição:** Formulário com campos de nome, e-mail e senha.
- **Desafio:** Mensagem de boas-vindas exibida após o envio do formulário e validações para garantir que todos os campos sejam preenchidos.
- **Arquivo:** `src/components/ReisterForm`

---

### 7. **Aplicação de Requisição de Dados Simples**
- **Descrição:** Exibe posts obtidos de uma API pública (JSONPlaceholder).
- **Desafio:** Botão para recarregar os dados e indicador de carregamento.
- **Arquivo:** `src/components/FetchPosts`

---

### 8. **Galeria de Imagens com Visualização Detalhada**
- **Descrição:** Lista de imagens com modal para visualização ampliada.
- **Desafio:** Botões para fechar o modal e navegar entre as imagens.
- **Arquivo:** `src/components/ImageGallery`

---

### 9. **Timer com Intervalo e Alerta**
- **Descrição:** Timer com contagem regressiva definida pelo usuário.
- **Desafio:** Alerta ao atingir zero e botões para pausar/reiniciar.
- **Arquivo:** `src/components/CountdownTimer`

---

### 10. **Componentes com Tabs Navegáveis**
- **Descrição:** Interface com tabs (abas) que exibem diferentes conteúdos.
- **Desafio:** Destaque visual para a aba ativa.
- **Arquivo:** `src/components/Tabs`

---

## Estrutura do Projeto

```plaintext
src/
├── components/
│   ├── BackgroundColorChanger.jsx
│   ├── CountdownTimer.jsx
│   ├── Counter.jsx
│   ├── DarkModeToggle.jsx
│   ├── FetchPosts.jsx
│   ├── FilteredList.jsx
│   ├── ImageGallery.jsx
│   ├── Loader.jsx
│   ├── RegisterForm.jsx
│   ├── Tabs.jsx
│   └── TodoList.jsx
├── context/
│   ├── AppContext.jsx
│   └── AppContex.jsx
├── hooks/
│   └── UseAppContext.jsx
├── pages/
│   ├── Header.jsx
│   ├── Main.js
|   ├── MenuItems.js
│   └── Sidebar.jsx
├── spinner/
│   ├── spinner.module.css
│   └── Spinners.jsx
├── Styles/
│   └── global.css
├── App.jsx
└── Main.jsx

