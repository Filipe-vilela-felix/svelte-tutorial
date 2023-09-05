<script>
  import { fly } from 'svelte/transition';

  let visible = true;
  let status = '...waiting';
</script>

<p>status: {status}</p>

<label>
  <input type="checkbox" bind:checked={visible} />
</label>

{#if visible}
  <p 
    transition:fly={{ y: 200, duration: 2000 }}
    on:introstart={() => status = 'intro started'}
    on:outrostart={() => status = 'outro start'}
    on:introend={() => status = 'intro end'}
    on:outroend={() => status = 'outro end'}
  >
    Files in and out
  </p>
{/if}

<!--

  Pode ser útil saber quando as transições estão começando e terminando. 
  O Svelte despacha eventos que você pode ouvir como qualquer outro evento DOM. (linhas 17 a 20);

  CONTEXTUALIZANDO O CÓDIGO:
    ste código é um exemplo de como usar a transição fly do Svelte, juntamente com os eventos de transição introstart, introend, outrostart e outroend. 
    Ele cria uma interface de usuário com um parágrafo de texto que pode ser mostrado e ocultado com uma transição suave, e atualiza o 
      status da transição em tempo real.
    
    1. <script> import { fly } from 'svelte/transition'; let visible = true; let status = 'waiting...'; </script>:
        - Este bloco de script importa a função fly do módulo svelte/transition e define duas variáveis: visible e status.
        - A função fly é uma transição predefinida que pode ser aplicada a elementos da interface do usuário para 
            fazê-los voar para dentro ou para fora da tela.
        - A variável visible é inicializada como true. Esta variável será usada para controlar se o parágrafo de texto é visível ou não.
        - A variável status é inicializada como 'waiting...'. Esta variável será usada para exibir o status atual da transição.
      
    2. <p>status: {status}</p>:
        Este é um elemento de parágrafo que exibe o valor da variável status. 
          O valor de status será atualizado durante a execução do código para refletir o status atual da transição.

    3. <label><input type="checkbox" bind:checked={visible} /> visible </label>:
        - Este é um elemento de entrada do tipo checkbox. A diretiva bind:checked é usada para criar uma ligação bidirecional entre a 
            propriedade checked do elemento de entrada e a variável visible. Isso significa que quando o estado do checkbox muda 
            (ou seja, quando é marcado ou desmarcado), o valor da variável visible também muda.
        
    4. {#if visible} <p transition:fly={{ y: 200, duration: 2000 }} on:introstart=... on:outroend=...> Flies in and out </p> {/if}:
        - Este é um bloco condicional Svelte. O conteúdo dentro deste blobo (o parágrafo de texto) só será renderizado se a condição após #if 
            (neste caso, a variável visible) for verdadeira.
        - O parágrafo de texto tem a diretiva transition:fly aplicada a ele, com algumas opções especificadas entre chaves duplas. 
            Isso significa que sempre que este parágrafo entra ou sai do DOM (ou seja, sempre que é renderizado ou removido), 
            ele voará para dentro ou para fora da tela usando a transição fly.
        - As opções especificadas para a transição fly são { y: 200, duration: 2000 }. Isso significa que o parágrafo voará 200 pixels na direção 
            vertical (eixo y) e a duração da animação será de 2000 milissegundos (2 segundos).
        - O parágrafo de texto também tem quatro manipuladores de eventos aplicados a ele: on:introstart, on:introend, on:outrostart e on:outroend. Esses manipuladores de eventos são chamados quando a transição começa e termina, respectivamente. Cada manipulador de evento atualiza o valor da variável status para refletir o status atual da transição.

-->