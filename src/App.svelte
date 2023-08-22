<script>
  import Nested from "./Nested.svelte";
</script>

<Nested answer={42} />
<Nested />

<!--

  Podemos facilmente especificar valores padrão para adereços em: Nested.svelte

  Se agora adicionarmos um segundo componente sem um suporte, ele voltará ao padrão: answer (linha 6)

-->