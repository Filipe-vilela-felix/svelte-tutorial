<script>
  import { slide } from 'svelte/transition';

  let showItems = true;
  let i = 5;
  let items = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];
</script>

<label>
  <input type="checkbox" bind:checked={showItems} />
</label>

{#if showItems}
  {#each items.slice(0, i) as item}
    <div transition:slide|global>
        {item}
    </div>
  {/each}
{/if}

<!--

  As transições normalmente são aplicadas apenas quando um elemento é adicionado ou removido do DOM. 
  No entanto, às vezes pode ser desejável aplicar transições a elementos individuais mesmo quando o bloco de contenção direta não é adicionado ou 
  removido.

  Podemos conseguir isso com uma transição global, que é executada quando qualquer bloco contendo as transições é adicionado ou removido. (linha 15);

-->