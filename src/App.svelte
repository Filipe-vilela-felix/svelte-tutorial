<script>
	import { count } from './stores.js';
	import Incrementer from './Incrementer.svelte';
	import Decrementer from './Decrementer.svelte';
	import Resetter from './Resetter.svelte';

	let count_value;

	count.subscribe((value) => {
		count_value = value;
	});
</script>

<h1>The count is {count_value}</h1>

<Incrementer />
<Decrementer />
<Resetter />

<!--

  Nem todo o estado do aplicativo pertence à hierarquia de componentes do aplicativo. 
  Às vezes, você terá valores que precisam ser acessados por vários componentes não relacionados ou por um módulo JavaScript normal.

  Na Svelte, fazemos isso com lojas. Uma loja é simplesmente um objeto com um método que permite que as partes interessadas sejam notificadas 
  sempre que o valor da loja mudar.

  CONTEXTUALIZANDO O CÓDIGO:
    Este código é um aplicativo Svelte que permite ao usuário incrementar, decrementar e redefinir um contador.

    - App.svelte: Este é o componente principal do aplicativo. Ele importa a loja count de stores.js e os componentes Incrementer, Decrementer e 
      Resetter. Ele também define uma variável local count_value e se inscreve na loja count para atualizar o valor de 
      count_value sempre que o valor da loja mudar. O modelo (template) do componente exibe o valor atual de count_value e renderiza os 
      componentes Incrementer, Decrementer e Resetter.

    - Incrementer.svelte: Este é um componente que permite ao usuário incrementar o contador. 
      Ele importa a loja count de stores.js e define uma função increment que será usada para incrementar o valor da loja. 
      No entanto, a função está vazia no momento e precisa ser preenchida com o código para incrementar o valor da loja. 
      O modelo do componente renderiza um botão que chama a função increment quando clicado.

    - Decrementer.svelte: Este é um componente que permite ao usuário decrementar o contador. 
      Ele importa a loja count de stores.js e define uma função decrement que será usada para decrementar o valor da loja. 
      No entanto, a função está vazia no momento e precisa ser preenchida com o código para decrementar o valor da loja. 
      O modelo do componente renderiza um botão que chama a função decrement quando clicado.

    - Resetter.svelte: Este é um componente que permite ao usuário redefinir o contador. 
      Ele importa a loja count de stores.js e define uma função reset que será usada para redefinir o valor da loja.
      No entanto, a função está vazia no momento e precisa ser preenchida com o código para redefinir o valor da loja. 
      O modelo do componente renderiza um botão que chama a função reset quando clicado.
    
    - stores.js: Este arquivo define e exporta a loja count. 
      Ele importa a função writable do pacote ‘svelte/store’ e usa-a para criar uma nova loja com valor inicial 0. 
      A loja é exportada para que possa ser usada por outros componentes.

-->