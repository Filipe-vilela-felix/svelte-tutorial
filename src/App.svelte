<script>
  let yes = false;
</script>

<label>
  <input type="checkbox" bind:checked={yes} />
  Yes! Send me regular email span
</label>

{#if yes}
  <p>
    Thank you. We will bombard your inbox and sell
		your personal details.
  </p>
  {:else}
  <p>
    You must opt in to continue. If you're not
		paying, you're the product.
  </p>
{/if}

<button disabled={!yes}>Subscribe</button>

<!--

  As caixas de seleção são usadas para alternar entre estados. Em vez de vincular a input.value, vinculamos a input.checked. (linha 6);

  Contextualizando o código:
    - A primeira parte do código define uma variável yes e atribui a ela o valor false. (linha 2);

    - Em seguida, o código cria um elemento label que contém um elemento input do tipo checkbox. 
      O estado da caixa de seleção é vinculado à variável yes usando a diretiva bind:checked. (linhas 5 a 8);
        (Isso significa que, quando a caixa de seleção é marcada ou desmarcada pelo usuário, 
        o valor da variável yes é atualizado para refletir o estado atual da caixa de seleção.)
    
    - A próxima parte do código usa uma estrutura condicional {#if ...}{:else}{/if} 
      para exibir uma mensagem diferente dependendo do valor da variável yes. (linhas 10 a 20);
    
    - Por fim, o código cria um botão que é desativado quando a variável yes é falsa (ou seja, quando a caixa de seleção não está marcada). (linha 22);

-->