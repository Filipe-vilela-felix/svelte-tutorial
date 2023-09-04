<script>
//import { onDestroy } from 'svelte';
	import { count } from './stores.js';
	import Incrementer from './Incrementer.svelte';
	import Decrementer from './Decrementer.svelte';
	import Resetter from './Resetter.svelte';

//let count_value;

//const unsubscribe = count.subscribe((value) => {
// count_value = value;
//});

//onDestroy(unsubscribe);
</script>

<h1>The count is {$count}</h1>

<Incrementer />
<Decrementer />
<Resetter />

<!--

  O aplicativo no exemplo anterior funciona, mas há um bug sutil — a loja é assinada, mas nunca cancelada. 
  Se o componente foi instanciado e destruído muitas vezes, isso resultaria em um vazamento de memória.

  Chamar um método subscribe retorna uma função de cancelamento de assinatura. (linha 10)

  Agora você declarou unsubcribe, mas ainda precisa ser chamado, por exemplo, por meio do gancho do ciclo de vida onDestroy. (linha 2)

  No entanto, ele começa a ficar um pouco clichê, especialmente se seu componente assinar várias lojas. 
  Em vez disso, o Svelte tem um truque na manga — você pode fazer referência a um valor de loja prefixando o nome da loja com $: (linha 17);

  Obs: A assinatura automática só funciona com variáveis de armazenamento declaradas (ou importadas) no escopo de nível superior de um componente.

  Obs: Você também não está limitado a usar $count dentro da marcação — você também pode usá-la em qualquer lugar <script> , 
        como em manipuladores de eventos ou declarações reativas.

  Obs: Presume-se que qualquer nome que comece com $ se refira a um valor de loja. 
        É efetivamente um caractere reservado — o Svelte impedirá que você declare suas próprias variáveis com um prefixo $.

-->