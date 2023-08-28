<script>
  import Outer from './Outer.svelte'

  function handleMessage(event) {
    alert(event.detail.text)
  }
</script>

<Outer on:message={handleMessage}  />

<!--

  Os eventos de componente em Svelte são uma maneira de os componentes se comunicarem entre si. 
  Quando um componente emite um evento, ele pode ser ouvido por seu componente pai, que pode reagir a ele de alguma maneira. 
  No entanto, ao contrário dos eventos DOM, os eventos de componente não borbulham automaticamente até a árvore de componentes. 
  Isso significa que se você tiver um componente profundamente aninhado que emita um evento, apenas seu componente pai imediato poderá ouvi-lo.

  Se você quiser que um componente mais acima na árvore de componentes ouça o evento, 
  os componentes intermediários devem encaminhar o evento manualmente. 
  Isso pode ser feito criando um manipulador de eventos no componente intermediário que ouça o evento do componente filho e 
  emita um novo evento com o mesmo nome e detalhes.

  Contextualizando o código:
    Neste exemplo, temos três componentes: Inner, Middle e Outer. O componente Inner emite um evento message quando seu botão é clicado. 
    O componente Middle ouve esse evento e o encaminha emitindo um novo evento message com os mesmos detalhes. 
    Finalmente, o componente Outer ouve o evento message do componente Middle e exibe um alerta com o texto do evento.
-->