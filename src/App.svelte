<script>
  let value = `Some words are *italic*, some are **bold**\n\n- lists\n- are\n- cool`;

  function markdownToHtml(markdown) {
        let html = markdown;
        html = html.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
        html = html.replace(/\*(.+?)\*/g, '<em>$1</em>');
        html = html.replace(/\n/g, '<br>');
        html = html.replace(/-\s(.+?)<br>/g, '<li>$1</li>');
        return `<ul>${html}</ul>`;
  }
</script>

<div class="grid">
  input
  <textarea bind:value></textarea>

  output
  <div>{@html markdownToHtml(value)}</div>
</div>

<style>
  .grid {
    display: grid;
    grid-template-columns: 5em 1fr;
		grid-template-rows: 1fr 1fr;
		grid-gap: 1em;
		height: 100%;
  }

  textarea {
		flex: 1;
		resize: none;
	}
</style>