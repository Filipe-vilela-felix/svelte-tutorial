<script>
  let questions = [
    {
      id: 1,
      text: `Where did you go to school?`,
    },
    {
      id: 2,
      text: `What is your mother's name?`,
    },
    {
      id: 3,
      text: `What is another personal fact that an attacker could easily find with Google?`,
    },
  ];

  let selected;

  let answer = "";

  function handleSubmit() {
    alert(
      `answered question ${selected.id} (${selected.text}) with "${answer}"`
    );
  }
</script>

<h2>Insecurity questions</h2>

<form on:submit|preventDefault={handleSubmit}>
  <select bind:value={selected} on:change={() => (answer = "")}>
    {#each questions as question}
      <option value={question}>
        {question.text}
      </option>
    {/each}
  </select>

  <input bind:value={answer} />

  <button type="submit" disabled={!answer}>
    Submit
  </button>
</form>


<!--

  Também podemos usar bind:value com o elemento <select>. (linha 31);

  Observe que os <option> valores são objetos em vez de cadeias de caracteres. Obs: Svelte não se importa

  Importante!
    Como não definimos um valor inicial de selected, a associação o definirá como o valor padrão (o primeiro da lista) automaticamente. 
    Tenha cuidado, porém, até que a vinculação seja inicializada, a seleção permanece indefinida, portanto, não podemos referenciar cegamente, 
    por exemplo, selected.id no modelo. (linha 23);

  Contextualizando o código:
    - O script JavaScript define uma matriz de objetos chamada questions, onde cada objeto representa uma pergunta de segurança 
      com um id e um texto. (linhas 2 a 15);
    
    - O script também define duas variáveis, selected e answer, que armazenam a pergunta selecionada e a resposta do usuário, respectivamente. (linhas 17 e 19);

    - A função handleSubmit é definida, que é chamada quando o usuário envia o formulário. Ela exibe um alerta com a pergunta selecionada, 
      seu texto e a resposta do usuário. (linhas 21 a 25);
    
    - O formulário HTML contém um elemento select que permite ao usuário escolher uma das perguntas de segurança da matriz questions. 
      Quando o usuário seleciona uma pergunta, a variável selected é atualizada e a variável answer é redefinida para uma string vazia. (linha 31);
    
    - O formulário também contém um elemento de entrada que permite ao usuário digitar sua resposta. Quando o usuário digita algo, 
      a variável answer é atualizada com o valor da entrada. (lina 39);
    
    - Por fim, o formulário contém um botão de envio que só pode ser clicado quando a variável answer não está vazia. 
      Quando o usuário clica no botão, a função handleSubmit é chamada e o alerta é exibido. (linha 41 a 43);

-->
