<script>
	import { time, elapsed } from './stores.js';

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

<p>
	This page has been open for
	{$elapsed}
	{$elapsed === 1 ? 'second' : 'seconds'}
</p>

<!--

  Você pode criar uma loja cujo valor é baseado no valor de uma ou mais outras lojas com derivado. 
  Com base em nosso exemplo anterior, podemos criar uma loja que deriva o tempo em que a página foi aberta: (linhas 13 a 18 em stores.js);

  É possível derivar uma store de várias stores de entrada, e um valor set explicitamente em vez de retorná-lo 
  (o que é útil para derivar valores de forma assíncrona). Consulte a referência da API para obter mais informações.

  CONTEXTUALIZANDO O CÓDIGO:
    Contexualização do código presente no commit passado. O código atual apenas sofreu algumas alterações

-->