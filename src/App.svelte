<script>
  import Inner from './Inner.svelte'

  function handleMessage(event) {
    alert(event.detail.text)
  }
</script>

<Inner on:message={handleMessage} />

<!--

  Os componentes também podem despachar eventos.Para fazer isso, eles devem criar um dispatcher de eventos. (linhas 2 e 4 em Inner.svelte);

  Obs: createEventDispatcher deve ser chamado quando o componente é instanciado pela primeira vez —
   você não pode fazer isso mais tarde, por exemplo, dentro de um retorno de chamada. Isso vincula à instância do componente.

  Contextualizando o código:
    1. Em Inner.svelte, a função createEventDispatcher é importada do pacote svelte.

    2. A função createEventDispatcher é chamada para criar uma instância de um despachante de eventos, que é armazenada na variável dispatch.

    3. A função sayHello é definida. Quando chamada, ela usa o despachante de eventos para emitir um evento personalizado chamado message, 
        com um objeto contendo a propriedade text com o valor 'Hello!'.

    4. Um elemento button é renderizado com um manipulador de eventos on:click que chama a função sayHello quando clicado.

    5. Em App.svelte, o componente Inner é importado de ./Inner.svelte.

    6. A função handleMessage é definida. Quando chamada, ela exibe um alerta com o valor da propriedade text do objeto passado com o evento.

    7. Uma instância do componente Inner é renderizada com um manipulador de eventos on:message, 
        que chama a função handleMessage quando o evento personalizado message é emitido pelo componente.

    8. Quando o usuário clica no botão em Inner.svelte, a função sayHello é chamada, que por sua vez emite o evento personalizado message.

    9. Como o componente Inner em App.svelte tem um manipulador de eventos para o evento message, 
        a função handleMessage é chamada quando o evento é emitido.
        
    10. A função handleMessage exibe um alerta com o texto 'Hello!'.
-->