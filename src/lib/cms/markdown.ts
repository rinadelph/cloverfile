/**
 * Simple Markdown Parser
 * Lightweight regex-based markdown to HTML converter
 */

export interface MarkdownOptions {
  sanitize?: boolean;
  breaks?: boolean;
  linkTarget?: '_blank' | '_self';
}

const defaultOptions: MarkdownOptions = {
  sanitize: true,
  breaks: true,
  linkTarget: '_blank'
};

/**
 * Parse markdown to HTML
 * Supports: headings, bold, italic, links, images, lists, blockquotes, code blocks, horizontal rules
 */
export function parseMarkdown(markdown: string, options: MarkdownOptions = {}): string {
  const opts = { ...defaultOptions, ...options };
  let html = markdown;

  // Sanitize HTML if enabled (basic XSS prevention)
  if (opts.sanitize) {
    html = html
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
  }

  // Code blocks (must be processed before other rules)
  html = html.replace(/```(\w*)\n([\s\S]*?)```/g, (_, lang, code) => {
    const langClass = lang ? ` class="language-${lang}"` : '';
    return `<pre><code${langClass}>${code.trim()}</code></pre>`;
  });

  // Inline code
  html = html.replace(/`([^`]+)`/g, '<code>$1</code>');

  // Headings (h1-h6)
  html = html.replace(/^###### (.+)$/gm, '<h6>$1</h6>');
  html = html.replace(/^##### (.+)$/gm, '<h5>$1</h5>');
  html = html.replace(/^#### (.+)$/gm, '<h4>$1</h4>');
  html = html.replace(/^### (.+)$/gm, '<h3>$1</h3>');
  html = html.replace(/^## (.+)$/gm, '<h2>$1</h2>');
  html = html.replace(/^# (.+)$/gm, '<h1>$1</h1>');

  // Blockquotes
  html = html.replace(/^> (.+)$/gm, '<blockquote>$1</blockquote>');
  // Merge consecutive blockquotes
  html = html.replace(/<\/blockquote>\n<blockquote>/g, '\n');

  // Horizontal rules
  html = html.replace(/^(-{3,}|\*{3,}|_{3,})$/gm, '<hr>');

  // Bold and italic
  html = html.replace(/\*\*\*(.+?)\*\*\*/g, '<strong><em>$1</em></strong>');
  html = html.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
  html = html.replace(/\*(.+?)\*/g, '<em>$1</em>');
  html = html.replace(/___(.+?)___/g, '<strong><em>$1</em></strong>');
  html = html.replace(/__(.+?)__/g, '<strong>$1</strong>');
  html = html.replace(/_(.+?)_/g, '<em>$1</em>');

  // Images (before links to avoid conflict)
  html = html.replace(/!\[([^\]]*)\]\(([^)]+)\)/g, '<img src="$2" alt="$1" loading="lazy">');

  // Links
  const linkTarget = opts.linkTarget === '_blank' ? ' target="_blank" rel="noopener noreferrer"' : '';
  html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, `<a href="$2"${linkTarget}>$1</a>`);

  // Unordered lists
  html = html.replace(/^[\*\-\+] (.+)$/gm, '<li>$1</li>');
  html = html.replace(/(<li>.*<\/li>)\n(?!<li>)/gs, '<ul>$1</ul>\n');
  html = html.replace(/(?<!<\/ul>)\n(<li>)/g, '<ul>$1');
  html = html.replace(/(<\/li>)(?!\n<li>)/g, '$1</ul>');

  // Fix nested list issues - clean up
  html = html.replace(/<\/ul>\s*<ul>/g, '');

  // Ordered lists
  html = html.replace(/^\d+\. (.+)$/gm, '<oli>$1</oli>');
  html = html.replace(/(<oli>.*<\/oli>)/gs, (match) => {
    const items = match.replace(/<\/?oli>/g, (tag) => tag === '<oli>' ? '<li>' : '</li>');
    return `<ol>${items}</ol>`;
  });

  // Paragraphs - wrap text blocks not already wrapped
  const lines = html.split('\n\n');
  html = lines.map(block => {
    block = block.trim();
    if (!block) return '';

    // Skip if already a block element
    if (/^<(h[1-6]|p|ul|ol|li|blockquote|pre|hr|div|table)/i.test(block)) {
      return block;
    }

    // Wrap in paragraph
    return `<p>${block}</p>`;
  }).join('\n\n');

  // Line breaks within paragraphs
  if (opts.breaks) {
    html = html.replace(/(<p>[\s\S]*?<\/p>)/g, (match) => {
      return match.replace(/\n/g, '<br>\n');
    });
  }

  // Clean up extra whitespace
  html = html.replace(/\n{3,}/g, '\n\n');

  return html.trim();
}

/**
 * Strip markdown formatting to get plain text
 */
export function stripMarkdown(markdown: string): string {
  let text = markdown;

  // Remove code blocks
  text = text.replace(/```[\s\S]*?```/g, '');
  text = text.replace(/`[^`]+`/g, '');

  // Remove headings markers
  text = text.replace(/^#{1,6} /gm, '');

  // Remove bold/italic
  text = text.replace(/\*\*\*(.+?)\*\*\*/g, '$1');
  text = text.replace(/\*\*(.+?)\*\*/g, '$1');
  text = text.replace(/\*(.+?)\*/g, '$1');
  text = text.replace(/___(.+?)___/g, '$1');
  text = text.replace(/__(.+?)__/g, '$1');
  text = text.replace(/_(.+?)_/g, '$1');

  // Remove images
  text = text.replace(/!\[([^\]]*)\]\([^)]+\)/g, '$1');

  // Convert links to just text
  text = text.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1');

  // Remove blockquotes
  text = text.replace(/^> /gm, '');

  // Remove list markers
  text = text.replace(/^[\*\-\+] /gm, '');
  text = text.replace(/^\d+\. /gm, '');

  // Remove horizontal rules
  text = text.replace(/^(-{3,}|\*{3,}|_{3,})$/gm, '');

  // Clean up whitespace
  text = text.replace(/\n{3,}/g, '\n\n');

  return text.trim();
}

/**
 * Extract first paragraph or truncate to limit
 */
export function getExcerpt(markdown: string, maxLength: number = 200): string {
  const plain = stripMarkdown(markdown);

  // Get first paragraph
  const firstPara = plain.split('\n\n')[0] || plain;

  if (firstPara.length <= maxLength) {
    return firstPara;
  }

  // Truncate at word boundary
  const truncated = firstPara.substring(0, maxLength);
  const lastSpace = truncated.lastIndexOf(' ');

  return (lastSpace > 0 ? truncated.substring(0, lastSpace) : truncated) + '...';
}

/**
 * Count words in markdown content
 */
export function countWords(markdown: string): number {
  const plain = stripMarkdown(markdown);
  const words = plain.split(/\s+/).filter(word => word.length > 0);
  return words.length;
}

/**
 * Estimate reading time in minutes
 */
export function estimateReadingTime(markdown: string, wordsPerMinute: number = 200): number {
  const wordCount = countWords(markdown);
  return Math.ceil(wordCount / wordsPerMinute);
}

/**
 * Extract all headings from markdown
 */
export function extractHeadings(markdown: string): { level: number; text: string; id: string }[] {
  const headingRegex = /^(#{1,6}) (.+)$/gm;
  const headings: { level: number; text: string; id: string }[] = [];

  let match;
  while ((match = headingRegex.exec(markdown)) !== null) {
    const level = match[1].length;
    const text = match[2];
    const id = text
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-|-$/g, '');

    headings.push({ level, text, id });
  }

  return headings;
}

/**
 * Generate table of contents HTML from markdown
 */
export function generateTOC(markdown: string): string {
  const headings = extractHeadings(markdown);

  if (headings.length === 0) return '';

  let html = '<nav class="toc"><ul>';

  for (const heading of headings) {
    const indent = '  '.repeat(heading.level - 1);
    html += `${indent}<li><a href="#${heading.id}">${heading.text}</a></li>`;
  }

  html += '</ul></nav>';

  return html;
}

/**
 * Add IDs to headings for anchor links
 */
export function addHeadingIds(html: string): string {
  return html.replace(/<h([1-6])>(.+?)<\/h[1-6]>/g, (_, level, text) => {
    const id = text
      .toLowerCase()
      .replace(/<[^>]+>/g, '') // Remove any HTML tags
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-|-$/g, '');

    return `<h${level} id="${id}">${text}</h${level}>`;
  });
}

/**
 * Full markdown to HTML with heading IDs
 */
export function renderMarkdown(markdown: string, options: MarkdownOptions = {}): string {
  const html = parseMarkdown(markdown, options);
  return addHeadingIds(html);
}
