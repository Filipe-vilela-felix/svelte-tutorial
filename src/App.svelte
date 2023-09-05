<script>
//import { writable } from 'svelte/store';
  import { tweened } from "svelte/motion";
  import { cubicOut } from "svelte/easing";

//const progress = writable(0);

  const progress = tweened(0, {
    duration: 400,
    easing: cubicOut
  });
</script>

<progress value={$progress} />

<button on:click={() => progress.set(0)}>
  0%
</button>

<button on:click={() => progress.set(0.25)}>
  25%
</button>

<button on:click={() => progress.set(0.50)}>
  50%
</button>

<button on:click={() => progress.set(0.75)}>
  75%
</button>

<button on:click={() => progress.set(1)}>
  100%
</button>

<style>
  progress {
    display: block;
    width: 100%;
  }
</style>

<!--

  A primeira técnica avançada é o movimento (motions).default

  Definir valores e assistir à atualização do DOM automaticamente é legal. Sabe o que é ainda mais legal? Interpolação desses valores. 
  O Svelte inclui ferramentas para ajudá-lo a criar interfaces de usuário lisas que usam animação para comunicar alterações.

  Vamos começar alterando o repositório de progresso (linhas 2 e 6) para um interpolado (linhas 3 e 8 );

  Clicar nos botões faz com que a barra de progresso seja animada para seu novo valor. 
  É um pouco robótico e insatisfatório embora. Precisamos adicionar uma função de flexibilização. (linhas 4 e 10);

  Obs: O módulo svelte/easing contém as equações de atenuação de Penner, 
        ou você pode fornecer sua própria função p => t onde p e t são ambos valores entre 0 e 1.
  
  O conjunto completo de opções disponíveis para interpolados:
    - delay — milissegundos antes do início da interpolação.
    - durartion — A duração da interpolação em milissegundos ou uma função (de, para) => milissegundos que permite 
        (por exemplo) especificar interpolações mais longas para alterações maiores no valor.
    - easing — a função p => t.
    - interpolate — uma função de valor personalizada (de, para) => t => para interpolação entre valores arbitrários. 
        Por padrão, o Svelte interpolará entre números, datas e matrizes e objetos de forma idêntica 
          (desde que contenham apenas números e datas ou outras matrizes e objetos válidos). 
        Se você quiser interpolar (por exemplo) cadeias de cores ou matrizes de transformação, forneça um interpolador personalizado.
  
  Você também pode passar essas opções para progress.set e progress.update como um segundo argumento, 
  caso em que elas substituirão os padrões. Os métodos set e update retornam uma promessa que é resolvida quando a interpolação é concluída.

-->