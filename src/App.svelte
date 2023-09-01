<script>
  import { onMount } from 'svelte';
  import { paint } from './gradient';

  onMount(() => {
		const canvas = document.querySelector('canvas');
		const context = canvas.getContext('2d');

		let frame = requestAnimationFrame(function loop(t) {
			frame = requestAnimationFrame(loop);
			paint(context, t);
		});

    return() => {
      cancelAnimationFrame(frame)
    }
	});
</script>

<canvas 
  width={32}
  height={32}
/>

<style>
  canvas {
    position: fixed;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		background-color: #666;
		mask: url(./svelte-logo-mask.svg) 50% 50% no-repeat;
		mask-size: 60vmin;
		-webkit-mask: url(./svelte-logo-mask.svg) 50% 50% no-repeat;
		-webkit-mask-size: 60vmin;
  }
</style>

<!--

  Cada componente tem um ciclo de vida que começa quando é criado e termina quando é destruído. 
  Há um punhado de funções que permitem executar código em momentos-chave durante esse ciclo de vida. 
  O que você usará com mais frequência é onMount, que é executado depois que o componente é renderizado pela primeira vez no DOM. (linhas 2 e 5);

  Além do onMount, também temos a função de limpeza do mesmo. (linha 14 a 16);

  Contextualizando o código:
    Neste exercício, temos um <canvas> que gostaríamos de animar, usando a função paint em gradiente.js.

-->