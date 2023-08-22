<script>
	let count = 0;
  
  $: console.log('this count is ${count}')
  $: console.log('this will also be logged whenever count changes')

  $: if(count >= 10) {
		alert('count is dangeroulsly hight!');
		count = 0
	}

  function increment() {
    count += 1;
  }
</script>

<button on:click={increment}>
  Clicked {count}
  {count === 1 ? 'time' : 'times'}
</button>

<!--

 Não estamos limitados a declarar valores reativos — também podemos executar instruções arbitrárias reativamente.
 Assim também como colocar o $: na frente de blocos.

-->