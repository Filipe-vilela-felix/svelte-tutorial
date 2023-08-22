<script>
	let count = 0;
  $: double = count * 2;

  function increment() {
    count += 1;
  }
</script>

<button on:click={increment}>
  Clicked {count}
  {count === 1 ? 'time' : 'times'}
</button>

<p>{count} fouble is {double}</p>

<!--

  As declarações reativas do Svelte são uma maneira de atualizar automaticamente o conteúdo de uma página da web em resposta a alterações no 
  estado do aplicativo.

  O símbolo $: indica que esta é uma declaração reativa e que o valor de doubled deve ser atualizado automaticamente sempre que o valor de count 
  mudar2. Isso é muito útil quando você tem valores que dependem de outros valores e precisam ser atualizados automaticamente quando esses outros valores mudam. 

-->