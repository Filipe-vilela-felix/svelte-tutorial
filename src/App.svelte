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

{#each ['cookies and cream', 'mint choc chip', 'raspberry ripple'] as flavour}
  <label>
    <input 
      type="checkbox"
      name="flavours"
      value={flavour}
      bind:group={flavours}
    />
    {flavour}
    <br>
  </label>
{/each}

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
        O código usa outro loop {#each} para iterar sobre uma matriz de strings representando os sabores disponíveis. 
        Para cada sabor na matriz, o código cria um elemento <label> contendo um elemento <input> do tipo “checkbox” e um texto que exibe 
          o sabor correspondente. O atributo value do elemento <input> é definido como o sabor atual da iteração.
    
    - Finalmente, o código usa uma estrutura condicional {#if} para verificar se a matriz flavours está vazia ou se seu comprimento é maior que o valor da variável scoops. 
      Se a matriz estiver vazia, o código exibe uma mensagem pedindo ao usuário para selecionar pelo menos um sabor. 
      Se o comprimento da matriz for maior que o valor da variável scoops, o código exibe uma mensagem informando ao usuário que ele não pode 
      pedir mais sabores do que bolas de sorvete. 
      Caso contrário, o código exibe uma mensagem informando ao usuário quantas bolas de sorvete ele pediu e quais sabores foram escolhidos, 
      usando a variável formatter para formatar a lista de sabores em uma string legível.

-->