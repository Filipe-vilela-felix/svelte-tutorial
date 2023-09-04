<script>
  import { name, greeting } from "./stores";
</script>

<h1>{$greeting}</h1><br>
<input bind:value={$name} />

<button on:click={() => $name += '!'}>
  Add exclamation mark!
</button>

<!--

  Se um armazenamento for gravável — ou seja, tiver um método definido — você poderá vincular ao seu valor, 
  assim como poderá vincular ao estado do componente local.

  Também podemos atribuir diretamente para armazenar valores dentro de um componente. (linha 8);
  A atribuição $name += '!' é equivalente a name.set($name + '!').

  CONTEXTUALIZANDO O CÓDIGO:
    Este código é um exemplo de como usar lojas graváveis e derivadas no Svelte para gerenciar um nome e uma saudação. 
    O código está dividido em dois arquivos: App.svelte e stores.js.

    - No arquivo stores.js, são criadas duas lojas: uma loja gravável chamada name que armazena o nome atual e 
        uma loja derivada chamada greeting que armazena a saudação atual. A loja name é criada usando a função writable do Svelte, 
        que recebe como argumento o valor inicial da loja. A loja greeting é criada usando a função derived do Svelte, 
        que recebe como argumentos a loja name e uma função que retorna a saudação baseada no valor atual da loja name.

    - No arquivo App.svelte, importamos as lojas name e greeting do arquivo stores.js e usamos seus valores para exibir a saudação atual e 
        o nome atual no componente. Também adicionamos um campo de entrada ao componente e usamos a sintaxe de vinculação do Svelte 
        para criar uma conexão bidirecional entre o valor da loja name e o valor do campo de entrada. Isso significa que, 
        quando o usuário digitar algo no campo de entrada, o valor da loja name será atualizado automaticamente.
      
    - Por fim, adicionamos um botão ao componente para adicionar um ponto de exclamação ao valor da loja name. 
        Quando o botão é clicado, o manipulador de eventos associado ao botão é chamado e o valor da loja name é atualizado adicionando um ponto 
        de exclamação ao seu final.

-->