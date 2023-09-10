<script>
	import { createTodoStore } from './todos.js';
	import TodoList from './TodoList.svelte';

	const todos = createTodoStore([
		{ done: false, description: 'write some docs' },
		{ done: false, description: 'start writing blog post' },
		{ done: true, description: 'buy some milk' },
		{ done: false, description: 'mow the lawn' },
		{ done: false, description: 'feed the turtle' },
		{ done: false, description: 'fix some bugs' }
	]);
</script>

<div class="board">
	<input
		placeholder="what needs to be done?"
		on:keydown={(e) => {
			if (e.key === 'Enter') {
				todos.add(e.currentTarget.value);
				e.currentTarget.value = '';
			}
		}}
	/>

	<div class="todo">
		<h2>todo</h2>
		<TodoList store={todos} done={false} />
	</div>

	<div class="done">
		<h2>done</h2>
		<TodoList store={todos} done={true} />
	</div>
</div>

<style>
	.board {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-column-gap: 1em;
		max-width: 36em;
		margin: 0 auto;
	}

	.board > input {
		font-size: 1.4em;
		grid-column: 1/3;
		padding: 0.5em;
		margin: 0 0 1rem 0;
	}

	h2 {
		font-size: 2em;
		font-weight: 200;
	}
</style>

<!--

  No capítulo anterior, usamos transições adiadas para criar a ilusão de movimento à medida que os elementos se movem de uma lista para a outra.

  Para completar a ilusão, também precisamos aplicar movimento aos elementos que não estão em transição. Para isso, utilizamos a diretiva animate.

  Primeiro, importe a função flip — flip significa 'Primeiro, Último, Inverter, Reproduzir' — de svelte/animate para TodoList.svelte. (linha 1 em TodoList.svelte);

  Em seguida, adicionamo-os aos <li> elementos e tb um parâmetro de duração. (linhas 15 em TodoList.svelte);

  Obs: Observe que todas as transições e animações estão sendo aplicadas com CSS, em vez de JavaScript, o que significa que elas não bloquearão 
        (ou serão bloqueadas por) o thread principal.

  CONTEXTUALIZANDO O CÓDIGO:
    Em App.svelte:
      - Importa-se a função createTodoStore do arquivo todos.js e o componente TodoList do arquivo TodoList.svelte. (linhas 1 a 3);
      - Cria uma store (uma espécie de armazenamento de dados) para as tarefas usando a função createTodoStore e inicializa-a com algumas 
          tarefas pré-definidas. (linhas 5 - 12);
      - Contém o HTML para a estrutura geral da aplicação. Inclui um campo de entrada para adicionar novas tarefas e 
          duas instâncias do componente TodoList, uma para as tarefas a fazer e outra para as tarefas concluídas. 
          O campo de entrada tem um evento on:keydown que verifica se a tecla pressionada foi Enter e, se for o caso, 
          adiciona uma nova tarefa à store usando o método add da store. (linhas 14 a 37);
      - Contém o CSS para estilizar a aplicação. (linhas 39 a 60);

    Em Todolist.svelte:
      - Importa a função flip. (linha 2);
      - Importa as funções send e receive do arquivo transition.js. (linhas 3);
      - Define as propriedades store e done que serão recebidas pelo componente. (linhas 6 e 7);
      - Contém o HTML para exibir a lista de tarefas. Usa a diretiva #each do Svelte para iterar sobre as tarefas na store e 
          exibir cada uma delas em um elemento li. Cada tarefa contém um checkbox para marcar a tarefa como concluída, 
          um span com a descrição da tarefa e um botão para removê-la. (linhas 9 a 31);
        - As diretivas in e out do Svelte são usadas nas linhas 14-15 para animar a entrada e saída das tarefas na lista usando as funções send e receive. (linhas 14 e 15);
      - Contém o CSS para estilizar a lista de tarefas. (linhas 33 e 34);

    todos.js:
      - Importa a função writable do Svelte. (linha 1);
      - Define a função createTodoStore, que cria uma store (uma espécie de armazenamento de dados) para as tarefas. 
          A store é inicializada com algumas tarefas pré-definidas e expõe métodos para adicionar, 
          remover e marcar tarefas como concluídas. (linhas 3 a 28);

    transition.js:
      - Importa as funções crossfade e quintOut do Svelte. (linhas 1 e 2);
      - Usa a função crossfade do Svelte para criar duas funções, send e receive, que serão usadas nas diretivas in e out do componente TodoList. 
          A função crossfade recebe como parâmetro um objeto com algumas opções, 
          incluindo uma função fallback que define como a animação deve ser executada. (linhas 4 a 20);

-->