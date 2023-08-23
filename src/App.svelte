<script>
  let count = 0;

  function increment() {
    count += 1;
  }
</script>

<button on:click={increment}>
  Clicked {count}
  {count === 1 ? 'time' : 'times'}
</button>

{#if count > 10}
  <p>{count} is greater than 10</p>
  {:else}
  <p>{count} is between 0 e 10</p>
{/if}

<!--

  Para renderizar condicionalmente alguma marcação, nós a envolvemos em um bloco. (linha 14 a 16)

-->