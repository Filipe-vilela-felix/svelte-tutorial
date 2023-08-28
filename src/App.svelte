<button on:click|once={() => alert('clicked')}>
  Click me
</button>

<!--

  Os manipuladores de eventos DOM podem ter modificadores que alteram seu comportamento.

  A lista completa de manipuladores:
    once — remova o manipulador após a primeira vez que ele for executado. (linha 1 a 3);
    preventDefault — chama antes de executar o manipulador. Útil para o manuseio de formulários do lado do cliente.
      Ex: <form on:submit|preventDefault={submitForm}>
            ...
          </form>

    stopPropagation — chamadas, impedindo que o evento atinja o próximo elemento.
      Ex: <div on:click={divClick}>
            <button on:click|stopPropagation={buttonClick}>Clique em mim</button>
          </div>

    passive — melhora o desempenho de rolagem em eventos de toque/roda (o Svelte irá adicioná-lo automaticamente onde for seguro fazê-lo).
      Ex: <div on:wheel|passive={handleWheel}>Rode a roda do mouse aqui</div>

    nonpassive — definir explicitamente passive: false.
      Ex: <div on:wheel|nonpassive={handleWheel}>Rode a roda do mouse aqui</div>

    capture — aciona o manipulador durante o capturar fase em vez do Borbulhando fase.
      Ex: <div on:click|capture={handleClick}>Clique aqui</div>

    self — somente acionar o manipulador se event.target for o próprio elemento.
      Ex: <div on:click|self={handleClick}>
            Clique aqui, mas não nos elementos filhos
            <button>Clique aqui não acionará o manipulador</button>
          </div>

    trusted — somente acionar o manipulador se for , o que significa que o evento foi acionado por uma ação do usuário e não porque algum JavaScript chamou event.isTrustedtrueelement.dispatchEvent(...)
      Ex: <button on:click|trusted={handleClick}>Clique aqui</button>

  Obs: Você pode encadear modificadores juntos, por exemplo, .on:click|once|capture={...}

  -->