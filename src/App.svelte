<script>
    import { count } from "./stores";
</script>

<h1>The count is {$count}</h1>

<button on:click={count.increment}>+</button>
<button on:click={count.decrement}>-</button>
<button on:click={count.reset}>reset</button>

<!--

  Contanto que um objeto implemente corretamente o método de assinatura, ele é um armazenamento.
  Além disso, vale tudo. É muito fácil, portanto, criar repositórios personalizados com lógica específica do domínio.

  CONTEXTUALIZANDO O CÓDIGO:
    Este código é um exemplo de como usar uma loja gravável no Svelte para gerenciar um contador. 
    O código está dividido em dois arquivos: stores.js e App.svelte.

    - No arquivo stores.js, é criada uma loja gravável chamada count que armazena o valor atual do contador. 
        A loja é criada usando a função writable do Svelte, que recebe como argumento o valor inicial da loja.

    - A função createCount é usada para criar a loja e retornar um objeto com os métodos subscribe, increment, decrement e reset. 
        Esses métodos são usados para se inscrever na loja, incrementar, decrementar e redefinir o valor do contador, respectivamente.

    - No arquivo App.svelte, importamos a loja count do arquivo stores.js e usamos seus métodos para gerenciar o contador. 
        Também usamos a sintaxe $count para acessar o valor atual da loja diretamente no template do componente.

    - Por fim, adicionamos botões ao componente para incrementar, decrementar e redefinir o valor do contador usando os métodos da loja. 
        Quando um botão é clicado, o método correspondente da loja é chamado e o valor do contador é atualizado.

-->