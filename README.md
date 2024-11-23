# Projeto de Componentes React

Este repositório contém a implementação de 10 componentes interativos desenvolvidos com React, utilizando hooks como `useState`,`useEffect`,`useContext`, `useReducer` e `useRef`. Cada componente aborda um conceito fundamental da biblioteca React, com desafios adicionais para consolidar o aprendizado.

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

## FilterList - Componente de Filtro com Tema Claro/Escuro

O componente `FilterList` é uma funcionalidade simples e intuitiva que permite:

1. Filtrar uma lista de nomes com base em um valor inserido pelo usuário.
2. Alternar entre um tema claro e escuro para melhorar a experiência visual.

---

### **Principais Funcionalidades**

#### **1. Filtro de Lista**
- Exibe uma lista fixa de nomes (`Alice`, `Bob`, `Charlie`, `Diana`, `Eve`).
- Filtra os nomes em tempo real com base no texto digitado no campo de entrada.
- Caso nenhum nome corresponda ao filtro, exibe uma mensagem indicando que "Nenhum nome foi encontrado".

#### **2. Alternância entre Tema Claro e Escuro**
- Inclui um botão que alterna o tema entre claro e escuro.
- O tema afeta:
  - **Plano de fundo** do componente.
  - **Texto** de todos os elementos.
  - **Input** e **itens da lista**.
  - **Botão de alternância**.

---

### **Descrição dos Estados**
1. **`filter`**:
   - Mantém o valor digitado no campo de entrada.
   - Utilizado para filtrar a lista de nomes.

2. **`darkMode`**:
   - Controla o tema do componente:
     - `true`: Tema escuro.
     - `false`: Tema claro.

---

### **Estilização Dinâmica**
- O `darkMode` utiliza classes CSS condicionais para modificar o estilo:
  - **Tema Claro**:
    - Fundo: `bg-white`
    - Texto: `text-gray-800`
    - Input: `bg-gray-100`
    - Itens da lista: `bg-gray-100`
  - **Tema Escuro**:
    - Fundo: `bg-gray-800`
    - Texto: `text-white`
    - Input: `bg-gray-700`
    - Itens da lista: `bg-gray-700`

---

### **Fluxo de Uso**
1. O usuário pode digitar no campo de entrada para filtrar nomes em tempo real.
2. Ao clicar no botão de alternância, o tema do componente muda dinamicamente.
3. A lista atualiza automaticamente com base no filtro aplicado.

---

### **Exemplo de Comportamento**
1. Tema claro ativado:
   - O fundo é branco e o texto é preto.
   - O campo de entrada e os itens da lista têm bordas claras.

2. Tema escuro ativado:
   - O fundo é cinza escuro e o texto é branco.
   - O campo de entrada e os itens da lista se ajustam para combinar com o esquema escuro.

---

### **Componentes Utilizados**
- **`useState`**:
  - Gerenciamento dos estados `filter` e `darkMode`.
- **Filtragem Dinâmica**:
  - Utiliza o método `.filter()` para buscar nomes que incluem o texto inserido pelo usuário.
- **Estilização com Tailwind CSS**:
  - Classes dinâmicas para alternância de tema.

---

## Descrição do Código: `RegisterForm` - Formulário de Registro

Este código implementa um **formulário de registro** utilizando React, com validação de dados, feedback visual para o usuário e suporte a um modo escuro.

---

### 🛠️ Componentes e Recursos Utilizados

#### 1. Estado do Componente (`useState`)
- **`formData`**: Armazena os valores dos campos de entrada (nome, e-mail e senha).
- **`showPassword`**: Controla a visibilidade da senha (exibir/ocultar).
- **`message`**: Exibe uma mensagem de boas-vindas após o registro bem-sucedido.
- **`errors`**: Armazena mensagens de erro relacionadas à validação dos campos.

#### 2. Contexto de Aplicação (`UseAppContext`)
- **`darkMode`**: Define se o modo escuro está ativo, alterando o estilo visual do formulário.

#### 3. Validação do Formulário
O método `validateForm` verifica:
- **Nome**: Obrigatório e com no mínimo 3 caracteres.
- **E-mail**: Deve ser válido.
- **Senha**: Deve conter pelo menos 8 caracteres, incluindo letras, números e caracteres especiais.

#### 4. Mecanismo de Submissão
O método `handleSubmit`:
- Impede o envio padrão do formulário.
- Valida os campos.
- Exibe mensagem de erro, caso haja campos inválidos.
- Exibe uma mensagem de boas-vindas e redefine os campos após validação bem-sucedida.

#### 5. Feedback Visual
- Campos inválidos exibem mensagens de erro.
- Mensagem de sucesso exibida após registro.

#### 6. Estilo Dinâmico
- Alteração do fundo e cores do texto com base no estado de **`darkMode`**.

#### 7. Interatividade
- Função para **exibir/ocultar senha** utilizando ícones da biblioteca **FontAwesome**.

---

### 📝 Estrutura do Formulário

#### 1. **Campo Nome**
- Validação: obrigatório e com no mínimo 3 caracteres.

#### 2. **Campo E-mail**
- Validação: obrigatório e com formato válido.

#### 3. **Campo Senha**
- Validação: obrigatório e deve conter:
  - Pelo menos 8 caracteres.
  - Letras, números e caracteres especiais.
- Possibilidade de exibir ou ocultar a senha.

#### 4. **Botão de Registrar**
- Submete os dados do formulário após validação.

---

### 🎨 Estilo Visual (Classes Tailwind CSS)

#### Classes Utilizadas
- **Campos e Layout:**
  - `border`, `rounded`, `p-2`, `w-full`: Aparência uniforme para os campos.
  - `focus:outline-none`, `focus:ring-2`: Destaque ao focar no campo.
  - `bg-gray-900`, `text-white`: Estilos do modo escuro.

- **Mensagens de Feedback:**
  - `text-red-500`: Mensagens de erro.
  - `text-green-600`: Mensagem de sucesso.

- **Botões:**
  - `hover:bg-blue-600`: Efeito visual ao passar o cursor.

---

### 🚀 Recursos Adicionais
- **Reset de Campos**: O formulário é redefinido após submissão bem-sucedida.
- **Mensagens Personalizadas**: O nome do usuário é capitalizado na mensagem de boas-vindas.

---

### 📦 Dependências Externas
1. **`FontAwesome`**:
   - Exibe os ícones para alternar entre exibir/ocultar senha.
2. **`UseAppContext`**:
   - Fornece o estado global de **`darkMode`**.


## Descrição do Código: `FetchPosts` - Busca e Exibição de Posts

Este código implementa um componente React chamado **`FetchPosts`** que realiza a busca de dados da API [JSONPlaceholder](https://jsonplaceholder.typicode.com/) e exibe uma lista de posts com suporte a animações de carregamento.

---

### 🛠️ Componentes e Recursos Utilizados

#### 1. Estado do Componente (`useState`)
- **`posts`**: Armazena os posts recuperados da API.
- **`loading`**: Indica se os dados estão sendo carregados.

#### 2. Efeito (`useEffect`)
- Faz a chamada inicial para buscar os posts assim que o componente é montado.

#### 3. Função Assíncrona: `fetchPosts`
- Responsável por buscar os dados da API e atualizá-los no estado:
  - Utiliza a API `fetch` para recuperar dados.
  - Aplica um atraso de 3 segundos para exibir a animação de carregamento.
  - Limita a exibição a **10 posts** usando `slice(0, 10)`.

#### 4. Feedback Visual
- Um **spinner** é exibido durante o carregamento (componente `Spinners`).
- Um botão permite **recarregar os posts**, exibindo uma animação enquanto os dados são buscados.

---

### 📝 Estrutura do Componente

#### 1. **Botão Recarregar**
- Reexecuta a função `fetchPosts`.
- Desabilitado enquanto os dados estão sendo carregados.

#### 2. **Spinner de Carregamento**
- Exibido no centro da tela enquanto o estado `loading` é `true`.
- Oculta o conteúdo da página para indicar que os dados estão em processo de carregamento.

#### 3. **Lista de Posts**
- Exibe os posts recuperados após o carregamento.
- Cada post inclui:
  - **Título**: Exibido em negrito.
  - **Conteúdo**: Exibido como parágrafo.

---

### 🎨 Estilo Visual (Classes Tailwind CSS)

#### Classes Utilizadas
- **Estrutura da Página:**
  - `p-6`: Padding em toda a página.
  - `text-2xl`, `font-bold`, `mb-4`: Títulos estilizados.

- **Botão Recarregar:**
  - `bg-blue-500`, `hover:bg-blue-600`: Estilo do botão com efeito de hover.
  - `disabled`: Desabilita o botão durante o carregamento.

- **Spinner:**
  - `bg-gray-800`, `bg-opacity-50`: Fundo semi-transparente para o preloader.
  - `transition`, `duration-1000`, `ease-in-out`: Animação suave.

- **Lista de Posts:**
  - `border`, `p-4`, `rounded`, `shadow`: Cria cartões com bordas arredondadas e sombreamento.

---

### 📦 Dependências Externas
1. **API JSONPlaceholder**:
   - Fonte de dados para os posts.
2. **`Spinners`**:
   - Componente para exibir a animação de carregamento.
3. **`FontAwesome`**:
   - Ícone animado (spinner) exibido no botão enquanto carrega.

---

### 🌟 Funcionalidades Adicionais
1. **Atualização Manual**: O botão permite recarregar os posts.
2. **Limitação de Dados**: Exibe apenas os 10 primeiros posts para melhorar a usabilidade.
3. **Tratamento de Erros**: Mensagens de erro são exibidas no console em caso de falha.

---

## Descrição do Código: `ImageGallery` - Galeria de Imagens Interativa

Este componente React implementa uma **galeria de imagens** onde os usuários podem visualizar imagens em um modal, navegar entre elas, e fechá-lo facilmente. 

---

### 🛠️ Componentes e Recursos Utilizados

#### 1. Estado do Componente (`useState`)
- **`selectedImageIndex`**: Indica o índice da imagem atualmente selecionada ou `null` caso nenhuma imagem esteja aberta.

#### 2. Funções Principais
- **`closeModal`**: Fecha o modal, definindo `selectedImageIndex` como `null`.
- **`navigateImages`**: Permite navegar entre imagens:
  - `"prev"`: Navega para a imagem anterior.
  - `"next"`: Navega para a próxima imagem.
  - **Comportamento cíclico**: Move para a última imagem ao navegar "para trás" na primeira, e para a primeira ao navegar "para frente" na última.

---

### 📝 Estrutura do Componente

#### 1. **Galeria**
- Apresenta imagens em um layout de grade.
- Cada imagem:
  - Possui efeito de hover (`opacity-75`).
  - Ao ser clicada, abre o modal correspondente.

#### 2. **Modal**
- Exibido centralmente sobre um fundo escuro (`bg-black`, `bg-opacity-70`).
- Mostra:
  - A imagem selecionada.
  - Três botões:
    - **"Anterior"**: Para navegar para a imagem anterior.
    - **"Fechar"**: Para fechar o modal.
    - **"Próxima"**: Para navegar para a próxima imagem.

---

### 🎨 Estilo Visual (Classes Tailwind CSS)

#### Classes Utilizadas
- **Galeria de Imagens:**
  - `grid`, `grid-cols-3`, `gap-4`: Organiza as imagens em uma grade com três colunas.
  - `cursor-pointer`, `border`, `rounded`: Torna as imagens interativas e estilizadas.
  - `hover:opacity-75`: Reduz a opacidade ao passar o mouse.

- **Modal:**
  - `fixed`, `top-0`, `left-0`, `w-full`, `h-full`: Garante que o modal cubra toda a tela.
  - `bg-black`, `bg-opacity-70`: Aplica um fundo semi-transparente para o modal.
  - `rounded`, `shadow-lg`: Estiliza a imagem com bordas arredondadas e sombra.

- **Botões do Modal:**
  - `bg-white`, `rounded-full`, `px-4`, `py-2`: Estiliza os botões com bordas arredondadas.
  - `bg-red-500`, `text-white`: Especificamente para o botão "Fechar".

---

### 📦 Dependências Externas
- Nenhuma dependência externa é utilizada diretamente, mas o projeto usa **React** e **Tailwind CSS** para gerenciar comportamento e estilos.

---

### 🌟 Funcionalidades Adicionais
1. **Navegação Cíclica**: A navegação das imagens retorna ao início ou ao fim dependendo da direção.
2. **Interatividade**: Cada imagem é clicável, ativando o modal com a imagem correspondente.
3. **Design Responsivo**: O uso de `grid` garante adaptação do layout em telas menores.

---

## Descrição do Código: `CountdownTimer` - Temporizador com Alerta

Este componente React implementa um **temporizador regressivo** que emite um alerta quando o tempo chega a zero. Ele permite aos usuários definir o tempo, iniciar, pausar e resetar o temporizador. A aparência se adapta ao modo claro ou escuro.

---

### 🛠️ Componentes e Recursos Utilizados

#### 1. Estado do Componente (`useState`)
- **`time`**: Representa o tempo restante (em segundos).
- **`isRunning`**: Indica se o temporizador está em execução.

#### 2. `useEffect`
- Configura um **intervalo** que decrementa o tempo a cada segundo enquanto o temporizador está ativo e o tempo é maior que zero.
- Dispara um **alerta** quando o tempo chega a zero, pausando o temporizador.

#### 3. Contexto (`UseAppContext`)
- Usa o contexto `AppContext` para acessar o estado global **`darkMode`**, alterando o estilo do componente conforme o tema.

---

### 📝 Estrutura do Componente

#### 1. **Entrada de Tempo**
- Permite ao usuário definir o tempo inicial (em segundos).
- Validado para aceitar apenas valores não negativos.

####2. **Contador Regressivo**
- Exibe o tempo restante em segundos com um design destacado (`text-4xl`).

#### 3. **Botões de Controle**
- **Iniciar**: Começa o temporizador.
- **Pausar**: Pausa o temporizador sem resetar o tempo restante.
- **Resetar**: Redefine o tempo para zero e pausa o temporizador.

---

### 🎨 Estilo Visual (Classes Tailwind CSS)

#### Classes Utilizadas
- **Entrada de Tempo:**
  - `border`, `rounded-lg`, `px-4`, `py-2`: Estiliza o campo de entrada com bordas arredondadas.
  - `bg-gray-800` (modo escuro) e `bg-white` (modo claro): Altera a aparência com base no contexto `darkMode`.

- **Contador:**
  - `text-4xl`, `font-bold`: Destaca visualmente o tempo restante.

- **Botões de Controle:**
  - `bg-green-500`, `bg-yellow-500`, `bg-red-500`: Diferencia visualmente cada botão.
  - `hover:bg-green-600`, `hover:bg-yellow-600`, `hover:bg-red-600`: Adiciona uma interação de hover.

---

### 📦 Dependências Externas
- **Contexto Global:** O componente usa `UseAppContext` para acessar o estado `darkMode`.

---

### 🌟 Funcionalidades Adicionais
1. **Alerta de Conclusão**: Exibe uma mensagem de alerta (`alert`) quando o tempo chega a zero.
2. **Pausa e Reinício**: Suporte para pausar o temporizador e continuar sem reiniciar.
3. **Modo Escuro/Claro**: Adapta o estilo do campo de entrada com base no estado global `darkMode`.

---

## Descrição do Código: `Tabs` - Navegação com Abas

Este componente React implementa um sistema simples de **abas navegáveis** que permite alternar entre diferentes conteúdos ao clicar nos botões correspondentes. Ele utiliza o estado local para determinar qual aba está ativa.

---

### 🛠️ Componentes e Recursos Utilizados

#### 1. Estado do Componente (`useState`)
- **`activeTab`**: Indica qual aba está ativa no momento. O valor inicial é `"Sobre"`.

#### 2. Estrutura de Dados
- **`tabsContent`**: Um objeto que contém os conteúdos correspondentes a cada aba:
  - **Sobre**: Informações gerais sobre a aplicação.
  - **Contato**: Detalhes de contato, como e-mail ou telefone.

---

### 📝 Estrutura do Componente

#### 1. **Botões das Abas**
- Gerados dinamicamente a partir das chaves do objeto `tabsContent` usando o método `Object.keys()`.
- Cada botão:
  - Atualiza o estado `activeTab` ao ser clicado.
  - Aplica um estilo condicional para destacar a aba ativa.

#### 2. **Conteúdo da Aba**
- O conteúdo exibido é determinado pelo valor atual de `activeTab`:
  - Recuperado dinamicamente de `tabsContent[activeTab]`.

---

### 🎨 Estilo Visual (Classes Tailwind CSS)

#### Classes Utilizadas
- **Botões das Abas**:
  - `px-4`, `py-2`, `rounded`: Estiliza os botões com bordas arredondadas.
  - **Aba Ativa**: `bg-blue-500 text-white`: Destaca a aba selecionada com cor azul.
  - **Aba Inativa**: `bg-gray-300`: Exibe as abas não selecionadas com cor cinza.

- **Conteúdo da Aba**:
  - `border`, `p-4`, `rounded`, `bg-gray-100`: Estiliza o conteúdo com bordas arredondadas e fundo claro.

---

### 📦 Dependências Externas
- Nenhuma biblioteca ou recurso externo é necessário além do Tailwind CSS para os estilos.

---

### 🌟 Funcionalidades Adicionais
1. **Navegação Suave**: O destaque visual facilita a identificação da aba ativa.
2. **Escalabilidade**: Fácil de adicionar novas abas e conteúdos ao objeto `tabsContent`.

---

### 🚀 Possíveis Melhorias
1. **Animações de Transição**: Adicionar transições suaves ao trocar o conteúdo da aba.
2. **Acessibilidade**: Implementar navegação por teclado e suporte a leitores de tela (ex.: uso de `role="tablist"` e `aria-selected`).
3. **Estilização Customizada**: Permitir personalização dos estilos diretamente via props.
4. **Renderização Dinâmica**: Suporte para carregar conteúdos das abas de uma API ou base de dados.

---







