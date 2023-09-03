<script>
	import {tick} from 'svelte'
	let text = `Select some text and hit the tab key to toggle uppercase`;

	async function handleKeydown(event) {
		if (event.key !== 'Tab') return;

		event.preventDefault();

		await tick();
		const { selectionStart, selectionEnd, value } = this;
		const selection = value.slice(selectionStart, selectionEnd);

		const replacement = /[a-z]/.test(selection)
			? selection.toUpperCase()
			: selection.toLowerCase();

		text =
			value.slice(0, selectionStart) +
			replacement +
			value.slice(selectionEnd);

		// this has no effect, because the DOM hasn't updated yet
		this.selectionStart = selectionStart;
		this.selectionEnd = selectionEnd;
	}
</script>

<textarea
	value={text}
	on:keydown={handleKeydown}
/>

<style>
	textarea {
		width: 100%;
		height: 100%;
		resize: none;
	}
</style>


<!--

  A função tick é diferente de outras funções de ciclo de vida, pois você pode chamá-la a qualquer momento, 
  não apenas quando o componente é inicializado pela primeira vez. Ele retorna uma promessa que é resolvida assim que quaisquer alterações de 
  estado pendentes forem aplicadas ao DOM (ou imediatamente, se não houver alterações de estado pendentes).

  Quando você atualiza o estado do componente no Svelte, ele não atualiza o DOM imediatamente. 
  Em vez disso, ele aguarda até a próxima microtarefa para ver se há outras alterações que precisam ser aplicadas, 
  inclusive em outros componentes. Isso evita o trabalho desnecessário e permite que o navegador agrupe as coisas de forma mais eficaz.

  Você pode ver esse comportamento neste exemplo. Selecione um intervalo de texto e pressione a tecla tab. Como o <textarea> valor muda, 
  a seleção atual é limpa e o cursor pula, irritantemente, para o final. Podemos corrigir isso importando tick...

  CONTEXTUALIZANDO O CÓDIGO:
    Este código é um script Svelte que permite ao usuário alternar entre maiúsculas e minúsculas o texto selecionado em uma área de texto 
    pressionando a tecla Tab:

    - Uma variável text que contém o texto inicial que será exibido na área de texto. (linha 2);

    - A função handleKeydown é definida para lidar com o evento keydown na área de texto. Ela recebe um objeto de evento como argumento. (linha 5);

    - Dentro da função handleKeydown, a primeira coisa que fazemos é verificar se a tecla pressionada é a tecla Tab usando 
      if (event.key !== 'Tab') return;. Se não for, retornamos imediatamente e não fazemos mais nada. (linha 6);

    - Em seguida, usamos event.preventDefault(); para impedir que o comportamento padrão da tecla Tab (mudar o foco para o próximo elemento) ocorra. (linha 8);

    - Usamos a desestruturação de objetos para extrair as propriedades selectionStart, selectionEnd e value do elemento de área de texto 
      (referenciado por this). Essas propriedades nos dão a posição inicial e final do texto selecionado e o valor atual da área de texto, 
      respectivamente. (linha 11);
    
    - Usamos o método slice para extrair o texto selecionado da área de texto usando const selection = value.slice(selectionStart, selectionEnd); (linha 12);

    - Em seguida, usamos uma expressão regular para verificar se o texto selecionado contém algum caractere minúsculo usando 
      /[a-z]/.test(selection). Se sim, convertemos todo o texto selecionado para maiúsculas usando selection.toUpperCase(). 
      Caso contrário, convertemos todo o texto selecionado para minúsculas usando selection.toLowerCase(). 
      Armazenamos o resultado em uma variável chamada replacement. (linha 14 a 16);

    - Atualizamos o valor da variável text concatenando as partes do valor original da área de texto antes e depois da seleção com o texto de 
      substituição usando text = value.slice(0, selectionStart) + replacement + value.slice(selectionEnd); (linha 18 a 21);

    - Finalmente, tentamos restaurar a posição do cursor na área de texto usando 
      this.selectionStart = selectionStart; e this.selectionEnd = selectionEnd;. 
      No entanto, isso não tem efeito porque a atualização do DOM ainda não ocorreu. (linha 24 e 25);
-->