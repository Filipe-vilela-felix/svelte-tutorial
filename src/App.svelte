<script>
  let numbers = [1, 2, 3, 4]

  function addNumber() {
    numbers = [...numbers, numbers.length + 1]
  }

  $: sum = numbers.reduce((total, currentNumber) => total + currentNumber, 0)
</script>

<p>{numbers.join(' + ')} = {sum}</p>

<button on:click={addNumber}>
  Add a number
</button>

<!--

  A reatividade do Svelte é acionada por atribuições, o que significa que ela é ativada quando um valor é atribuído a uma variável1. 
  Isso significa que métodos de matriz que alteram o conteúdo de uma matriz, como push e pop, não acionarão automaticamente atualizações na página da web, 
  pois eles não usam o operador de atribuição =1. Para acionar atualizações na página da web ao usar esses métodos,
   você precisa usar uma atribuição adicional para atualizar o valor da variável que armazena a matriz. (linha 5);

  Atribuições a propriedades de matrizes e objetos — por exemplo — funcionam da mesma forma que as atribuições aos próprios valores.
    Ex: function addNumber() {
          numbers[numbers.length] = numbers.length + 1;
        }

-->