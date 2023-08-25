<script>
	let m = { x: 0, y: 0 };

	function handleMove(event) {
		m.x = event.clientX;
		m.y = event.clientY;
	}
</script>

<div on:pointermove={handleMove}>
	The pointer is at {m.x} x {m.y}
</div>

<style>
	div {
		position: fixed;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		padding: 1rem;
	}
</style>

<!--

  A maioria dos aplicativos Web precisa lidar com dados assíncronos em algum momento. 
  Svelte facilita a espera pelo valor de Promessas diretamente na sua marcação. (linhas 15 a 21)

  Se você sabe que sua promessa não pode ser rejeitada, você pode omitir o bloqueio. 
  Você também pode omitir o primeiro bloco se não quiser mostrar nada até que a promessa seja resolvida:
    {#await promise then number}
        <p>The number is {number}</p>
    {/await}

-->