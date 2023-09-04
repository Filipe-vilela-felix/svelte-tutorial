<script>
	import { time } from './stores.js';

	const formatter = new Intl.DateTimeFormat(
		'en',
		{
			hour12: true,
			hour: 'numeric',
			minute: '2-digit',
			second: '2-digit'
		}
	);
</script>

<h1>The time is {formatter.format($time)}</h1>

<!--

  Nem todas as lojas devem ser gravadas por quem tem uma referência a elas. 
  Por exemplo, você pode ter uma loja representando a posição do mouse ou a geolocalização do usuário, 
  e não faz sentido poder definir esses valores de 'fora'. Para esses casos, temos lojas legíveis.

  Em stores.js, o primeiro argumento para readable é um valor inicial, que pode ser null ou undefined se você ainda não tiver um. 
  O segundo argumento é uma função start que usa um set callback definido e retorna uma função stop. 
  A função start é chamada quando a loja recebe seu primeiro assinante; stop é chamado quando o último assinante cancela a assinatura. (linha 2 a 6 em store.js);


  CONTEXTUALIZANDO O CÓDIGO:
    Este código é um exemplo de como usar uma loja legível no Svelte para exibir a hora atual em um componente. 
    O código está dividido em dois arquivos: App.svelte e stores.js.

    - No arquivo stores.js, é criada uma loja legível chamada time que armazena a hora atual. 
      A loja é criada usando a função readable do Svelte, que recebe dois argumentos: o valor inicial da loja e uma função de inicialização.

    - A função de inicialização é chamada quando a loja é criada e recebe como argumento uma função set que pode ser usada para atualizar o valor 
      da loja. Neste caso, usamos um intervalo para atualizar a hora a cada segundo e usamos a função set para atualizar o valor da loja.

    - A função de inicialização também retorna uma função que é chamada quando a loja é desmontada. 
      Neste caso, usamos essa função para limpar o intervalo que criamos anteriormente.

    - No arquivo App.svelte, importamos a loja time do arquivo stores.js e usamos seu valor para exibir a hora atual no componente. 
      Também criamos um objeto formatter usando a classe Intl.DateTimeFormat para formatar a hora de acordo com as opções especificadas.

    - Por fim, usamos a loja legível diretamente no template do componente para exibir a hora formatada. 
      Note que não podemos alterar o valor da loja diretamente, apenas ler seu valor atual.

-->