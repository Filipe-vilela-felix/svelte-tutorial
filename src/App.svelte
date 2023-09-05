<script>
  import { fade, fly } from 'svelte/transition';
  let visible = true;
</script>

<label>
  <input type="checkbox" bind:checked={visible} />
  visible
</label>

{#if visible}
  <p in:fly={{ y: 200, duration: 2000 }} out:fade>Fade in and out</p>
{/if}

<!--

  Em vez da diretiva de transição, um elemento pode ter uma diretiva de entrada ou saída (in ou aut), ou ambas juntas. (linhas 2 e 12);

  Obs: Nesse caso, as transições não são invertidas.

  CONTEXTUALIZANDO O CÓDIGO:
    Este código cria uma checkbox que o usuário pode marcar e desmarcar para mostrar e ocultar um parágrafo de texto com uma transição suave, 
      o qual aparece verticalmente e desaparece.

-->