<script>
	import { fade } from 'svelte/transition';
	import { elasticOut } from 'svelte/easing';

	let visible = true;

	function spin(node, { duration }) {
		return {
			duration,
			css: (t) => {
				const eased = elasticOut(t);

				return `
					transform: scale(${eased}) rotate(${eased * 1080}deg);
					color: hsl(
						${Math.trunc(t * 360)},
						${Math.min(100, 1000 * (1 - t))}%,
						${Math.min(50, 500 * (1 - t))}%
					);`;
			}
		};
	}
</script>

<label class="label">
	<input type="checkbox" bind:checked={visible} />
	visible
</label>

{#if visible}
	<div
		class="centered"
		in:spin={{ duration: 8000 }}
		out:fade
	>
		<span>transitions!</span>
	</div>
{/if}

<style>
  .label {
    position: absolute;
    left: 47%;
    top: 40%;
  }

	.centered {
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
	}

	span {
		position: absolute;
		transform: translate(-50%, -50%);
		font-size: 4em;
	}
</style>

<!--

  O módulo svelte/transition tem um punhado de transições integradas, contudo, é criar o seu próprio.

  A função usa dois argumentos — o nó ao qual a transição é aplicada e quaisquer parâmetros que foram passados — 
  e retorna um objeto de transição que pode ter as seguintes propriedades:
    - delay: milissegundos antes do início da transição.
    - duration: duração da transição em milissegundos.
    - easing: Uma função p => t de flexibilização (presente no commit "tweens").
    - css: Uma função (t, u) => css,onde u === 1 - t
    - tick: Uma função (t, u) => {...}  que tem algum efeito no node.

  CONTEXTUALIZANDO O CÓDIGO:
    Este código é um exemplo de uma função de transição personalizada em Svelte.

    1. import { elasticOut } from 'svelte/easing';: (linha 3);
        - Esta linha importa a função elasticOut do módulo svelte/easing. A função elasticOut é uma função de atenuação (easing) que 
            pode ser usada para criar animações suaves e elásticas.

    2. function spin(node, { duration }) { ... }: (linha 7);
        - Esta é a definição da função spin, que é uma função de transição personalizada. As funções de transição são usadas em Svelte para 
            animar elementos da interface do usuário quando eles entram ou saem do DOM.
        - A função spin recebe dois argumentos: node e um objeto com a propriedade duration. O argumento node é o elemento DOM que 
            está sendo animado. O argumento duration é a duração da animação em milissegundos.
    
    3. return { duration, css: (t) => { ... } };: (linhas 8,9,10);
        - A função spin retorna um objeto com duas propriedades: duration e css.
        - A propriedade duration é definida como o valor do argumento duration passado para a função. Isso especifica a duração da animação.
        - A propriedade css é uma função que recebe um único argumento t. O argumento t é um valor entre 0 e 1 que 
            representa o progresso da animação. Quando a animação começa, o valor de t é 0. Quando a animação termina, o valor de t é 1.
        
    4. const eased = elasticOut(t);: (linha 11);
        - Dentro da função css, a primeira linha calcula o valor de uma variável local chamada eased. O valor de eased é calculado chamando 
            a função elasticOut com o argumento t. Isso aplica a atenuação elástica ao progresso da animação, criando um efeito suave e elástico.
    
    5. return `\ transform: scale(${eased}) rotate(${eased * 1080}deg); \ color: hsl( \ ${Math.trunc(t * 360)}, 
                \ ${Math.min(100, 1000 * (1 - t))}%, \ ${Math.min(50, 500 * (1 - t))}% \ );`;:  (linha 14 a 19);
        - A função css retorna uma string que contém as regras CSS para animar o elemento. Essas regras CSS são geradas usando interpolação de 
            string (template literals) para inserir os valores calculados de eased e t nas regras CSS.
        - A primeira regra CSS especifica a transformação do elemento. O elemento é dimensionado (scale) pelo valor de eased, 
            o que significa que ele aumentará e diminuirá de tamanho durante a animação. O elemento também é rotacionado (rotate) 
            pelo valor de eased * 1080, o que significa que ele girará 1080 graus (três voltas completas) durante a animação.
        - A segunda regra CSS especifica a cor do elemento usando o formato HSL (matiz, saturação, luminosidade). 
            A matiz (hue) é calculada como o progresso da animação (t) multiplicado por 360, o que significa que a cor mudará suavemente através do 
            espectro durante a animação. A saturação (saturation) e a luminosidade (lightness) são calculadas usando funções matemáticas para criar
             um efeito de desvanecimento.
-->