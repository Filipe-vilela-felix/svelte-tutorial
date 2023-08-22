<script>
	let string = 'this string contains some <strong>HTML!!!</strong>';
</script>

<p>{@html string}</p>

<!--

  Às vezes você precisa renderizar HTML diretamente em um componente.

  No Svelte, você faz isso com a tag especial: {@html ...}
  
-->