<script>
  const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
	let selected = colors[0];
</script>

<h1 style="color: {selected}">Pick a colour</h1>

<div>
	{#each colors as color, i}
		<button
			aria-current={selected === color}
			aria-label={color}
			style="background: {color}"
			on:click={() => selected = color}
		>{i + 1}</button>
	{/each}
</div>

<style>
  h1 {
		transition: color 0.2s;
	}

  div {
		display: grid;
		grid-template-columns: repeat(7, 1fr);
		grid-gap: 5px;
		max-width: 400px;
	}

	button {
		aspect-ratio: 1;
		border-radius: 50%;
		background: var(--color, #fff);
		transform: translate(-2px,-2px);
		filter: drop-shadow(2px 2px 3px rgba(0,0,0,0.2));
		transition: all 0.1s;
	}

	button[aria-current="true"] {
		transform: none;
		filter: none;
		box-shadow: inset 3px 3px 4px rgba(0,0,0,0.2);
	}
</style>

<!--

   Um bloco each é usado para iterar sobre uma matriz ou objeto semelhante a uma matriz e renderizar um bloco de código para cada item da matriz.default

   Neste caso, o bloco each está iterando sobre a matriz colors e atribuindo cada item da matriz à variável color. Dentro do bloco each, 
   você pode usar a variável color para acessar o valor atual do item da matriz.

-->