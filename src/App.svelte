<script>
  let name = 'world';
</script>

<input bind:value={name} />

<h1>Hello {name}!</h1>

<!--

  Como regra geral, o fluxo de dados no Svelte é de cima para baixo — um componente pai pode definir props em um componente filho e 
  um componente pode definir atributos em um elemento, mas não o contrário.

  Às vezes é útil quebrar essa regra, utilizando a directiva: bind:value. (linha 5);
  Note que usando essa propriedade, o valor do nome usado em <h1> é alteraldo após alteração do mesmo em <input/>.

-->