<script>
	import { getRandomNumber } from './utils.js';

	let promise = getRandomNumber();

	function handleClick() {
		promise = getRandomNumber();
	}
</script>

<button on:click={handleClick}>
	generate random number
</button>

{#await promise}
  <p>...waiting</p>
{:then number}
  <p>The number is {number}</p>
{:catch error}
  <p style="color: red">{error.message}</p>
{/await}

<!--

  A maioria dos aplicativos Web precisa lidar com dados assíncronos em algum momento. 
  Svelte facilita a espera pelo valor de Promessas diretamente na sua marcação. (linhas 15 a 21)

  Se você sabe que sua promessa não pode ser rejeitada, você pode omitir o bloqueio. 
  Você também pode omitir o primeiro bloco se não quiser mostrar nada até que a promessa seja resolvida:
    {#await promise then number}
        <p>The number is {number}</p>
    {/await}

-->