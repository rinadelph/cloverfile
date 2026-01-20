<script lang="ts">
  interface Props {
    content: string;
  }

  let { content }: Props = $props();

  /**
   * Simple markdown to HTML converter
   * For production, consider using a proper markdown parser like marked or mdsvex
   */
  function parseMarkdown(text: string): string {
    let html = text;

    // Headers
    html = html.replace(/^### (.*$)/gm, '<h3>$1</h3>');
    html = html.replace(/^## (.*$)/gm, '<h2>$1</h2>');
    html = html.replace(/^# (.*$)/gm, '<h1>$1</h1>');

    // Bold
    html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');

    // Italic
    html = html.replace(/\*(.*?)\*/g, '<em>$1</em>');

    // Unordered lists
    html = html.replace(/^\- (.*$)/gm, '<li>$1</li>');
    html = html.replace(/(<li>.*<\/li>\n?)+/g, '<ul>$&</ul>');

    // Paragraphs - wrap lines that aren't already wrapped
    const lines = html.split('\n\n');
    html = lines.map(line => {
      const trimmed = line.trim();
      if (
        !trimmed.startsWith('<h') &&
        !trimmed.startsWith('<ul') &&
        !trimmed.startsWith('<ol') &&
        !trimmed.startsWith('<li') &&
        trimmed.length > 0
      ) {
        return `<p>${trimmed}</p>`;
      }
      return trimmed;
    }).join('\n');

    // Clean up double paragraphs
    html = html.replace(/<p><\/p>/g, '');

    return html;
  }

  let parsedContent = $derived(parseMarkdown(content));
</script>

<div class="article-content">
  {@html parsedContent}
</div>

<style>
  .article-content {
    font-size: 1.0625rem;
    line-height: 1.8;
    color: var(--gray-700);
  }

  .article-content :global(h1) {
    margin: var(--space-3xl) 0 var(--space-lg);
    font-size: 2rem;
    font-weight: 700;
    color: var(--gray-900);
    line-height: 1.3;
  }

  .article-content :global(h2) {
    margin: var(--space-2xl) 0 var(--space-md);
    font-size: 1.5rem;
    font-weight: 600;
    color: var(--gray-900);
    line-height: 1.3;
  }

  .article-content :global(h3) {
    margin: var(--space-xl) 0 var(--space-md);
    font-size: 1.25rem;
    font-weight: 600;
    color: var(--gray-900);
    line-height: 1.4;
  }

  .article-content :global(p) {
    margin-bottom: var(--space-lg);
  }

  .article-content :global(p:last-child) {
    margin-bottom: 0;
  }

  .article-content :global(strong) {
    font-weight: 600;
    color: var(--gray-800);
  }

  .article-content :global(em) {
    font-style: italic;
  }

  .article-content :global(ul),
  .article-content :global(ol) {
    margin: var(--space-lg) 0;
    padding-left: var(--space-xl);
  }

  .article-content :global(li) {
    margin-bottom: var(--space-sm);
    padding-left: var(--space-sm);
  }

  .article-content :global(ul li) {
    list-style-type: disc;
  }

  .article-content :global(ol li) {
    list-style-type: decimal;
  }

  .article-content :global(blockquote) {
    margin: var(--space-xl) 0;
    padding: var(--space-lg) var(--space-xl);
    background: var(--gray-50);
    border-left: 4px solid var(--clover-green);
    font-style: italic;
    color: var(--gray-600);
  }

  .article-content :global(a) {
    color: var(--clover-green);
    text-decoration: underline;
    text-underline-offset: 2px;
    transition: color var(--transition-fast);
  }

  .article-content :global(a:hover) {
    color: var(--clover-green-dark);
  }

  .article-content :global(img) {
    max-width: 100%;
    height: auto;
    margin: var(--space-xl) 0;
    border-radius: var(--radius-md);
  }

  .article-content :global(hr) {
    margin: var(--space-3xl) 0;
    border: none;
    border-top: 1px solid var(--gray-200);
  }

  .article-content :global(code) {
    padding: 2px 6px;
    background: var(--gray-100);
    font-family: monospace;
    font-size: 0.9em;
    border-radius: var(--radius-sm);
  }

  .article-content :global(pre) {
    margin: var(--space-lg) 0;
    padding: var(--space-lg);
    background: var(--gray-900);
    color: var(--gray-100);
    border-radius: var(--radius-md);
    overflow-x: auto;
  }

  .article-content :global(pre code) {
    padding: 0;
    background: none;
    color: inherit;
  }
</style>
