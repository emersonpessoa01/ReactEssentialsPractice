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
```
## Configuração e Execução
### Pré-requisitos
- Node.js instalado (versão 14 ou superior).
- Gerenciador de pacotes npm ou yarn.
Passos para Instalação

## Passos para Instalação
### 1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/nome-do-repositorio.git
cd nome-do-repositorio
```
### 2. Instale as dependências:
```bash
npm install
```
ou
```bash
yarn install
```
### 3. Navegue até o diretório do projeto
```bash
cd nome-do-projeto
```
### 4. Inicie o servidor de desenvolvimento:
```bash
npm run dev 
```
ou
```bash
yarn run dev
```
### 5. Abra o navegador e acesse:
```bash
http://localhost:5173/
```

## Testando Atividades
A página principal `(App.js) e (Main.js)` contém links para acessar cada atividade individualmente. Selecione uma atividade para testá-la sem interferir nas demais.

## Bibliotecas Externas Recomendadas

- [**Tailwind CSS**](https://tailwindcss.com/docs/installation): Para design responsivo.
- [**Font Awesome**](https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css): Para envio de emails diretamente pelo formulário de contato.

## Instalações do Font Awesome:
1. **Font Awesome CSS**:
   - **URL**: `https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css`
   - **Versão**: `6.1.1`
- **Descrição**: Para estilização de ícones.

2. **Instalar o Font Awesome**:
```bash
    npm install @fortawesome/fontawesome-svg-core @fortawesome/free-solid-svg-icons @fortawesome/react-fontawesome
```
3. **Configurar o main.jsx**:
- No arquivo main.jsx, importe o FontAwesomeIcon e configure o uso dos ícones. Abaixo está um exemplo:
```bash
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons"; // Conjunto de ícones sólidos


// Adicionar os ícones ao library
library.add(fas);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```
---
# Descriçãos dos Componentes:
## Counter

O **Counter** é um componente React que utiliza um contexto compartilhado para gerenciar o estado global de um contador. Ele emprega um *custom hook* chamado `UseAppContext` para acessar os valores `count` e `setCount` fornecidos pelo contexto.

---

### Funcionamento do Componente

### **1. Importação do Contexto**
- O *custom hook* `UseAppContext` é usado para:
  - **`count`**: Acessar o valor atual do contador.
  - **`setCount`**: Atualizar o estado global do contador.

---

### **2. Estrutura do Componente**
- Retorna um bloco HTML estilizado com **Tailwind CSS**:
  - Design moderno e responsivo.
  - Organização clara e intuitiva.

---

### **3. Exibição do Valor do Contador**
- O valor atual do contador (`count`) é mostrado em um elemento `<div>`:
  - Estilização: fonte grande e destaque visual.

---

### **4. Botões de Controle**
#### **Increment**
- Incrementa o valor do contador em 1 ao clicar.
- **Estilização**:
  - Fundo azul com efeito *hover* mais escuro.
  - Classes responsivas que ajustam a largura do botão conforme o tamanho da tela.

#### **Decrement**
- Diminui o valor do contador em 1.
- Implementa uma validação condicional que impede valores negativos.
- **Estilização**:
  - Fundo vermelho com efeito *hover* mais escuro.
  - Responsividade semelhante ao botão de incremento.

---

### **5. Estilização Responsiva**
- Utiliza **Tailwind CSS** para ajustar o layout dinamicamente:
  - **`w-full`** para telas pequenas.
  - **`sm:w-auto`** para telas maiores.
- Espaçamento e bordas arredondadas:
  - **`p-6`**: Preenchimento interno.
  - **`space-y-4`** e **`gap-4`**: Espaçamento entre os elementos.

---

### Comportamento Esperado
1. O componente compartilha seu estado global via contexto, permitindo que outros componentes acessem e manipulem o valor de `count`.
2. Os botões incrementam ou decrementam o valor do contador de forma intuitiva, com validações simples para evitar valores negativos.

---

### Benefícios da Implementação

### **1. Reutilização de Estado Global**
- Usar o `UseAppContext` elimina a necessidade de passar `props` entre componentes, tornando o código mais modular.

### **2. Legibilidade**
- A separação entre o contexto (estado) e a interface (componente) facilita a manutenção e a compreensão do código.

### **3. Estilização Moderna**
- A utilização do **Tailwind CSS** proporciona um design responsivo e elegante com menor esforço de escrita.

## Descrição do Componente `BackgroundGradientChanger`

O componente `BackgroundGradientChanger` permite alterar o plano de fundo da página com um gradiente de cores aleatórias, utilizando o **hook customizado `UseAppContext`** para gerenciar o estado do fundo e o **hook `useEffect`** para aplicar as mudanças ao corpo da página. Abaixo está uma explicação detalhada sobre a funcionalidade e estrutura do código:

### Funcionalidade
- **Gerar gradiente aleatório:** O componente possui um botão que, ao ser clicado, gera um gradiente linear com duas cores aleatórias. O gradiente gerado é aplicado como plano de fundo da página.
- **Alteração dinâmica do fundo:** O estado `backgroundColor` é gerenciado através do contexto e é aplicado ao plano de fundo da página usando o estilo inline e o hook `useEffect` para atualizar o fundo de maneira reativa.

### Detalhamento do Código

1. **Função `generateRandomGradient`:** Esta função é responsável por gerar um gradiente linear utilizando duas cores aleatórias. As cores são geradas pela função `generateRandomColor`, que cria uma cor no formato hexadecimal.
   
2. **Função `generateRandomColor`:** Cria uma cor aleatória gerando um valor hexadecimal aleatório, garantindo que a cor seja única a cada chamada.
   
3. **`useEffect`:** Este hook é usado para aplicar o gradiente ao corpo da página. Sempre que o estado `backgroundColor` mudar, o efeito será acionado e o plano de fundo será atualizado. O `cleanup` é realizado ao retornar uma função para restaurar o fundo original (branco) quando o componente for desmontado ou o estado mudar.

4. **Estilo e Transições:** O gradiente é aplicado ao fundo da `div` interna com uma transição suave de 0.5 segundos, melhorando a experiência visual do usuário.

## Estrutura
- **Botão "Change Gradient Color":** O botão é o elemento interativo que, quando clicado, chama a função para gerar um novo gradiente de fundo.
- **Estilização com Tailwind CSS:** A estrutura e os botões são estilizados usando **Tailwind CSS**, com classes como `bg-blue-500`, `hover:bg-blue-700`, e `text-white` para garantir um visual agradável e responsivo.

## Descrição do Componente `TodoList`

O componente `TodoList` é uma aplicação simples de lista de tarefas (To-Do List) que permite ao usuário adicionar, editar, excluir e marcar tarefas como concluídas. Ele utiliza o **contexto global `AppContext`** para gerenciar o estado das tarefas e o **modo escuro (dark mode)**. O estado local é gerido utilizando **hooks** do React como `useState`, `useEffect`, e `useRef`.

### Funcionalidades
- **Adicionar ou editar tarefas:** O componente permite que o usuário adicione uma nova tarefa ou edite uma tarefa existente. Ao editar, o campo de entrada é preenchido com a tarefa selecionada para edição.
- **Marcar como concluído:** As tarefas podem ser marcadas como concluídas através de uma caixa de seleção (checkbox).
- **Excluir tarefas:** O usuário pode excluir qualquer tarefa da lista.
- **Filtrar tarefas:** O componente possui filtros que permitem exibir tarefas "Todas", "Pendentes" ou "Concluídas".
- **Modo escuro:** O estilo do componente muda dependendo se o modo escuro está ativado ou não, alterando o fundo do campo de entrada e os itens da lista.

### Detalhamento do Código

1. **Estados principais:**
   - `inputValue`: Armazena o valor do campo de entrada.
   - `editId`: Identifica qual tarefa está sendo editada.
   - `errorMessage`: Armazena mensagens de erro (caso o campo de entrada seja vazio ao tentar adicionar ou editar uma tarefa).
   - `filter`: Define o filtro atual das tarefas (todas, pendentes ou concluídas).

2. **Função `handleAddOrUpdate`:** 
   - Se não houver texto no campo de entrada, exibe uma mensagem de erro.
   - Se estiver editando uma tarefa, a tarefa é atualizada com o novo valor.
   - Caso contrário, uma nova tarefa é adicionada com um ID único gerado pelo `Date.now()`.
   - Após a operação, o campo de entrada é limpo e a mensagem de erro (se houver) é removida.

3. **Captura de tecla "Enter":** 
   - Ao pressionar "Enter", o comportamento padrão é evitado e a função `handleAddOrUpdate` é chamada.

4. **Efeito de foco no campo de entrada:** 
   - Ao editar uma tarefa, o campo de entrada recebe foco automaticamente.

5. **Função `getFilteredTodos`:**
   - Filtra as tarefas de acordo com o estado `filter`, que pode ser "all" (todas), "pending" (pendentes) ou "completed" (concluídas).

6. **Estilização com Tailwind CSS:**
   - Utiliza Tailwind CSS para estilizar os elementos, com mudanças dinâmicas baseadas no modo escuro.
   - A transição entre os estados de filtro e as tarefas é feita de forma simples, com classes condicionais aplicadas.

### Estrutura do Código

1. **Entrada de tarefa e botão de ação:**
   - O campo de entrada (`input`) permite adicionar ou editar uma tarefa. O botão alterna entre "Add" e "Update" dependendo do estado de edição.

2. **Filtro de tarefas:**
   - Três botões de filtro (All, Pending, Completed) alteram o estado `filter` e aplicam as classes de estilo correspondentes.

3. **Lista de tarefas:**
   - Exibe as tarefas filtradas com um checkbox para marcar como concluída e botões para editar e excluir.
   - As tarefas concluídas têm um estilo de texto riscado e uma cor de texto mais clara.


## Timer Component

Este componente cria um temporizador simples que pode ser iniciado, pausado e resetado. Ele utiliza o hook `useState` para controlar o tempo em segundos e o estado de execução do temporizador. O hook `useEffect` é utilizado para gerenciar o intervalo de tempo quando o temporizador está em execução.

### Estrutura do código

#### 1. **Estado (`useState`)**
- **`seconds`**: Armazena o número de segundos do temporizador.
- **`isRunning`**: Controle de estado para determinar se o temporizador está em execução ou pausado.

#### 2. **Efeito (`useEffect`)**
O hook `useEffect` é usado para:
- **Iniciar o temporizador**: Quando o estado `isRunning` é `true`, um intervalo é configurado para incrementar o contador de segundos a cada 1 segundo (1000ms).
- **Parar o temporizador**: Quando `isRunning` é `false`, o intervalo é limpo, pausando o temporizador.
- **Limpeza do intervalo**: O efeito garante que, ao desmontar o componente ou ao mudar o estado, o intervalo é limpo corretamente para evitar vazamentos de memória.

#### 3. **Funções**
- **`resetTimer`**: Reseta o temporizador para 0 segundos e pausa o contador.
  
#### 4. **Renderização**
O componente renderiza:
- **Tempo**: Exibe o número de segundos corridos no temporizador.
- **Botões**:
  - **Iniciar**: Inicia o temporizador.
  - **Pausar**: Pausa o temporizador.
  - **Resetar**: Reseta o temporizador para 0 segundos e pausa.

#### 5. **Estilização**
A estilização é feita com **Tailwind CSS**, proporcionando um design limpo e responsivo. Os botões de controle são coloridos de acordo com a ação:
- **Verde** para Iniciar.
- **Amarelo** para Pausar.
- **Vermelho** para Resetar.



