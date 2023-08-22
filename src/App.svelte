<script>
  import Nested from "./Nested.svelte";
</script>

<p>This is a paragraph.</p>
<Nested />

<style>
	p {
		color: goldenrod;
		font-family: 'Comic Sans Ms', cursive;
		font-size: 2em;
	}
</style>

<!--

  Podemos importar componentes de outros arquivos e incluí-los em nossa marcação.

  Obs: Os nomes dos componentes são sempre em maiúsculas, para distingui-los dos elementos HTML.

-->