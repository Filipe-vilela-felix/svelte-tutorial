<script>
  import Nested from "./Nested.svelte";
</script>

<Nested answer={42} />

<!--

  Em qualquer aplicativo real, você precisará passar dados de um componente para seus filhos. 
  Para isso, precisamos declarar propriedades, geralmente abreviadas para "adereços".

  O componente Nested.svelte exporta uma propriedade chamada answer e exibe seu valor em um elemento <p>. 
  O componente App.svelte, importa o primeiro componente como Nested e o usa em seu próprio modelo, 
  passando o valor 42 para a propriedade answer do componente Nested.

-->