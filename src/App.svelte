<script>
	import { onMount } from 'svelte';
	import { typewriter } from './transition.js';
	import { messages } from './loading-messages.js';

	let i = -1;

	onMount(() => {
		const interval = setInterval(() => {
			i += 1;
			i %= messages.length;
		}, 2500);

		return () => {
			clearInterval(interval);
		};
	});
</script>

<h1>loading...</h1>

{#key i}
	<p in:typewriter={{ speed: 10 }}>
		{messages[i] || ''}
	</p>
{/key}

<!--

  Os blocos `{#key}{/key}` em Svelte destroem e recriam seu conteúdo quando o valor de uma expressão muda. 
  Isso é útil quando você deseja que um elemento execute sua transição sempre que um valor mudar, 
  em vez de apenas quando o elemento entra ou sai do DOM. 
  Em outras palavras, ele permite que você crie animações para elementos sempre que um valor específico mudar, 
  mesmo que o elemento já esteja na página.

  Aqui, por exemplo, gostaríamos de executar a transição typewriter de transition.js sempre que a mensagem de carregamento, ou seja, i mudar. 
  Envolva o elemento <p> em um bloco key. (linha 22);

  CONTEXTUALIZANDO O CÓDIGO:
    O objetivo do código é fornecer uma experiência de carregamento mais interessante e divertida para o usuário, 
    mostrando mensagens engraçadas enquanto o conteúdo está sendo carregado.

    - O código começa importando algumas coisas de outros arquivos: onMount do pacote svelte, a função typewriter do arquivo transition.js e 
        o array messages do arquivo loading-messages.js.

    - A variável i é inicializada com o valor -1.

    - A função onMount é chamada quando o componente é montado. Dentro desta função, um intervalo é criado usando setInterval. 
        A cada 2500 milissegundos (2,5 segundos), a variável i é incrementada em 1 e, em seguida, o módulo do comprimento de messages é aplicado a ela. Isso garante que o valor de i sempre esteja entre 0 e o comprimento de messages menos 1.

    - A função retornada por onMount é chamada quando o componente é desmontado. Ela limpa o intervalo criado anteriormente usando clearInterval.

    - O componente renderiza um título <h1> com o texto “loading…”.

    - Dentro de um bloco {#key i}, um parágrafo <p> é renderizado com a transição typewriter. Isso significa que, sempre que o valor de i mudar, 
      a transição será acionada. O texto dentro do parágrafo é definido como o elemento atual do array messages, 
      ou uma string vazia se não houver elemento atual.

    - Em loading-messages.js, um array chamado messages é exportado. 
        Ele contém várias strings que são mensagens de carregamento engraçadas.

    - Em transition.js, uma função chamada typewriter é exportada. Ela define uma transição personalizada para elementos Svelte. 
        A transição funciona apenas em elementos com um único nó filho de texto. 
        Ela pega o texto do nó e define a duração da transição com base no comprimento do texto e na velocidade fornecida. 
        Durante a transição, a função tick é chamada repetidamente com um valor t entre 0 e 1. 
        A função usa esse valor para determinar quantos caracteres do texto devem ser exibidos e atualiza o conteúdo do nó de texto.

-->