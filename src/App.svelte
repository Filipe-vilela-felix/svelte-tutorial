<script>
  let scoops = 1;
  let flavours = [];

  const formatter = new Intl.ListFormat('en', { style: 'long', type: 'conjunction' });
</script>

<h2>Size</h2>

{#each [1,2,3] as number}
  <label>
    <input 
      type="radio" 
      name="scoops"
      value={number}
      bind:group={scoops}
    />
    {number} {number === 1 ? 'scoop' : 'scoops'}
    <br>
  </label>
{/each}

<h2>Flavours</h2>

<select multiple bind:value={flavours}>
  {#each ['cookies and cream', 'mint choc chip', 'raspberry ripple'] as flavour}
    <option>{flavour}</option>
  {/each}
</select>

{#if flavours.length === 0} 
  <p>Please select at least one flavour</p>
{:else if flavours.length > scoops}
  <p>Can't order more flavours than scoops!</p>
{:else}
  <p>
    You ordered {scoops} {scoops === 1 ? 'scoop' : 'scoops'}
    of {formatter.format(flavours)}
  </p>
{/if}

<!--

  O elemento <select> pode ter um atributo multiple, que permite ao usuário selecionar várias opções ao mesmo tempo.

  Quando o atributo multiple está presente, o valor do elemento <select> é uma matriz contendo os valores das opções selecionadas pelo usuário.

  Contextualizando o código:
    Este código permite ao usuário escolher o tamanho e os sabores de um sorvete.

    - O código começa com a definição de três variáveis: scoops, flavors e formatter.
      - A variável scoops é inicializada com o valor 1, representando o número de bolas de sorvete que o usuário deseja. 
      - A variável flavours é inicializada como uma matriz vazia, representando os sabores escolhidos pelo usuário. 
      - A variável formatter é inicializada como uma nova instância da classe Intl.ListFormat, que é usada para formatar uma lista de itens 
        em uma string legível.

    - Em seguida, o código apresenta duas seções: “Tamanho” e “Sabores”.
      - Na seção “Tamanho”:
        O código usa um loop {#each} para iterar sobre uma matriz de números [1, 2, 3].
        Para cada número na matriz, o código cria um elemento <label> contendo um elemento <input> do tipo “radio” e um texto que exibe
        o número de bolas de sorvete correspondente. O atributo value do elemento <input> é definido como o número atual da iteração.
      - Na seção “Sabores”:
        O código começa com um elemento <select> que tem o atributo multiple e a diretiva bind:value vinculando seu valor à variável flavours.
        Dentro do elemento <select>, o código usa um loop {#each} para iterar sobre uma matriz de strings representando os sabores disponíveis. 
        Para cada sabor na matriz, o código cria um elemento <option> contendo o sabor correspondente.
    
    - Finalmente, o código usa uma estrutura condicional {#if} para verificar se a matriz flavours está vazia ou se seu comprimento é maior que o valor da variável scoops. 
      Se a matriz estiver vazia, o código exibe uma mensagem pedindo ao usuário para selecionar pelo menos um sabor. 
      Se o comprimento da matriz for maior que o valor da variável scoops, o código exibe uma mensagem informando ao usuário que ele não pode 
      pedir mais sabores do que bolas de sorvete. 
      Caso contrário, o código exibe uma mensagem informando ao usuário quantas bolas de sorvete ele pediu e quais sabores foram escolhidos, 
      usando a variável formatter para formatar a lista de sabores em uma string legível.

-->