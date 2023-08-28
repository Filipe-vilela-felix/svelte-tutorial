<script>
	let m = { x: 0, y: 0 };
</script>

<div
	on:pointermove={(e) => {
		m = { x: e.clientX, y: e.clientY };
	}}
>
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

  Note que também é possível declarar manipuladores de eventos embutidos. (linha 6 e 7)

  Em algumas estruturas, você pode ver recomendações para evitar manipuladores de eventos embutidos por motivos de desempenho, 
  especialmente loops internos. Esse conselho não se aplica ao Svelte — o compilador sempre fará a coisa certa, 
  seja qual for a forma que você escolher.

-->