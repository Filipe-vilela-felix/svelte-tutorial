<script>
	import Canvas from './Canvas.svelte';
	import { trapFocus } from './actions.js';

	const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet', 'white', 'black'];
	let selected = colors[0];
	let size = 10;

	let showMenu = true;
</script>

<div class="container">
	<Canvas color={selected} size={size} />

	{#if showMenu}
		<div
			class="modal-background"
			on:click|self={() => showMenu = false}
			on:keydown={(e) => {
				if (e.key === 'Escape') showMenu = false;
			}}
		>
			<div class="menu" use:trapFocus>
				<div class="colors">
					{#each colors as color}
						<button
							class="color"
							aria-label={color}
							aria-current={selected === color}
							style="--color: {color}"
							on:click={() => {
								selected = color;
							}}
						/>
					{/each}
				</div>

				<label>
					small
					<input type="range" bind:value={size} min="1" max="50" />
					large
				</label>
			</div>
		</div>
	{/if}

	<div class="controls">
		<button class="show-menu" on:click={() => showMenu = !showMenu}>
			{showMenu ? 'close' : 'menu'}
		</button>
	</div>
</div>

<style>
	.container {
		position: fixed;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
	}

	.controls {
		position: absolute;
		left: 0;
		top: 0;
		padding: 1em;
	}

	.show-menu {
		width: 5em;
	}

	.modal-background {
		position: fixed;
		display: flex;
		justify-content: center;
		align-items: center;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		backdrop-filter: blur(20px);
	}

	.menu {
		position: relative;
		background: var(--bg-2);
		width: calc(100% - 2em);
		max-width: 28em;
		padding: 1em 1em 0.5em 1em;
		border-radius: 1em;
		box-sizing: border-box;
		user-select: none;
	}

	.colors {
		display: grid;
		align-items: center;
		grid-template-columns: repeat(9, 1fr);
		grid-gap: 0.5em;
	}

	.color {
		aspect-ratio: 1;
		border-radius: 50%;
		background: var(--color, #fff);
		transform: none;
		filter: drop-shadow(2px 2px 3px rgba(0,0,0,0.2));
		transition: all 0.1s;
	}

	.color[aria-current="true"] {
		transform: translate(1px, 1px);
		filter: none;
		box-shadow: inset 3px 3px 4px rgba(0,0,0,0.2);
	}

	.menu label {
		display: flex;
		width: 100%;
		margin: 1em 0 0 0;
	}

	.menu input {
		flex: 1;
	}
</style>

<!--

	As ações são essencialmente funções de ciclo de vida em nível de elemento. Eles são úteis para coisas como:
		- Interface com bibliotecas de terceiros
		- Imagens carregadas com preguiça
		- Dicas de ferramentas
		- Adicionando manipuladores de eventos personalizados


	Neste app, vc pode rabiscar no <canvas> alterar as cores e o tamanho do pincel através do menu. 
	Mas se você abrir o menu e percorrer as opções com a tecla Tab, logo descobrirá que o foco não está preso dentro do modal.

	Podemos corrigir isso com uma ação. Importar trapFocus de ações.js... (linha 3 em App.svelte);

	... Em seguida, adicione-o ao menu com a diretiva Use.(linha 23);

	Vamos dar uma olhada na função trapFocus em actions.js. Uma função de ação é chamada com um nó — o <div class="menu"> no nosso caso — 
	quando o nó é montado no DOM, e pode retornar um objeto de ação com um método de destruição.

	Primeiro, precisamos adicionar um ouvinte de eventos que intercepte pressionamentos de tecla Tab. (linha 30 em actions.js);

	Em segundo lugar, precisamos fazer alguma limpeza quando o nó é desmontado — removendo o ouvinte de eventos e restaurando o 
	foco para onde estava antes do elemento montado. (linhas 32 a 38 em action.js);

	
-->