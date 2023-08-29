<script>
  let a = 1;
  let b = 2;
</script>

<label>
  <input type="number" bind:value={a} min="0" max="10" />
  <input type="range" bind:value={a} min="0" max="10" />
</label>

<br>

<label>
  <input type="number" bind:value={b} min="0" max="10" />
  <input type="range" bind:value={b} min="0" max="10" />
</label>

<br>

{a} + {b} = {a + b} 

<!--

  Claro! O DOM (Document Object Model) é uma representação em árvore da estrutura de uma página da web. 
  No DOM, todos os valores são armazenados como strings, mesmo que sejam números. Isso pode ser um problema quando você está trabalhando com 
  entradas numéricas, como campos de entrada do tipo “number” ou “range”, pois significa que você precisa lembrar de converter o valor da entrada 
  para um número antes de usá-lo.

  Com bind:value, o Svelte cuida disso para você. (linhas 7, 8,  14 e 15);
-->