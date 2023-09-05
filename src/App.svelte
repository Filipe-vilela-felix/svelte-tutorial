<script>
  import { fade } from 'svelte/transition';
  let visible = true;
</script>

<label>
  <input type="checkbox" bind:checked={visible} />
  visible
</label>

{#if visible}
  <p transition:fade>Fade in and out</p>
{/if}

<!--

  Podemos tornar as interfaces de usuário mais atraentes fazendo a transição graciosa de elementos para dentro e para fora do DOM. (linhas 2 e 12);

  CONTEXTUALIZANDO O CÓDIGO:
    Este código cria uma checkbox que o usuário pode marcar e desmarcar para mostrar e ocultar um parágrafo de texto com uma transição suave.

-->