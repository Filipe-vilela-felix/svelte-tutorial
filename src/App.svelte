<script>
	let visible = false;

	function typewriter(node, { speed = 1 }) {
		const valid = node.childNodes.length === 1 && node.childNodes[0].nodeType === Node.TEXT_NODE;

		if (!valid) {
			throw new Error(`This transition only works on elements with a single text node child`);
		}

		const text = node.textContent;
		const duration = text.length / (speed * 0.01);

		return {
			duration,
			tick: (t) => {
				const i = Math.trunc(text.length * t);
				node.textContent = text.slice(0, i);
			}
		};
	}
</script>

<label>
	<input type="checkbox" bind:checked={visible} />
	visible
</label>

{#if visible}
	<p transition:typewriter>
		The quick brown fox jumps over the lazy dog
	</p>
{/if}

<!--

  Embora você geralmente deva usar CSS para transições tanto quanto possível, há alguns efeitos que não podem ser alcançados sem JavaScript, 
    como um efeito de máquina de escrever:

  CONTEXTUALIZANDO O CÓDIGO:
    1. <script> let visible = false; function typewriter(node, { speed = 1 }) { ... } </script>:
        - Este bloco de script define uma variável visible e uma função typewriter.
        - A variável visible é inicializada como false. Esta variável será usada para controlar se o parágrafo de texto é visível ou não.
        - A função typewriter é uma transição personalizada que pode ser aplicada a elementos da interface do usuário. Ela recebe dois argumentos: 
            node e um objeto com a propriedade speed. O argumento node é o elemento DOM que está sendo animado. 
            O argumento speed é a velocidade da animação.
    
    2. <label><input type="checkbox" bind:checked={visible} /> visible </label>:
        - Este é um elemento de entrada do tipo checkbox. A diretiva bind:checked é usada para criar uma ligação bidirecional entre a propriedade 
            checked do elemento de entrada e a variável visible. Isso significa que quando o estado do checkbox muda 
            (ou seja, quando é marcado ou desmarcado), o valor da variável visible também muda.
      
    3. {#if visible} <p transition:typewriter> The quick brown fox jumps over the lazy dog </p> {/if}:
        - Este é um bloco condicional Svelte. O conteúdo dentro deste blobo (o parágrafo de texto) só será renderizado se a condição após 
            #if (neste caso, a variável visible) for verdadeira.
        - O parágrafo de texto tem a diretiva transition:typewriter aplicada a ele. 
            Isso significa que sempre que este parágrafo entra ou sai do DOM (ou seja, sempre que é renderizado ou removido), 
            ele será animado usando a transição personalizada typewriter.
    
    A função typewriter neste exemplo anima o texto do elemento letra por letra, como se estivesse sendo digitado por uma máquina de escrever. 
    Ela faz isso calculando a duração da animação com base no comprimento do texto e na velocidade especificada, 
      e atualizando o conteúdo do texto do elemento em cada quadro da animação para mostrar apenas as letras que foram “digitadas” 
      até aquele momento.

-->