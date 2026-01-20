<script lang="ts">
  import { cmsStore, type MediaItem } from '$lib/stores/cms';
  import { onMount } from 'svelte';

  let mounted = $state(false);
  let media = $state<MediaItem[]>([]);
  let showUploadModal = $state(false);
  let showDeleteModal = $state(false);
  let mediaToDelete = $state<MediaItem | null>(null);
  let copiedId = $state<string | null>(null);

  // Upload form
  let uploadForm = $state({
    filename: '',
    path: '',
    type: 'image' as 'image' | 'document'
  });
  let uploadError = $state('');

  onMount(() => {
    cmsStore.init();
    media = cmsStore.media;
    mounted = true;
  });

  function formatFileSize(bytes: number): string {
    if (bytes < 1024) return bytes + ' B';
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
    return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
  }

  function formatDate(dateStr: string): string {
    return new Date(dateStr).toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  }

  function openUploadModal() {
    uploadForm = { filename: '', path: '', type: 'image' };
    uploadError = '';
    showUploadModal = true;
  }

  function closeUploadModal() {
    showUploadModal = false;
  }

  function handleUpload(e: Event) {
    e.preventDefault();
    uploadError = '';

    if (!uploadForm.filename.trim()) {
      uploadError = 'Filename is required';
      return;
    }

    if (!uploadForm.path.trim()) {
      uploadError = 'Path is required';
      return;
    }

    const newMedia = cmsStore.addMedia({
      filename: uploadForm.filename.trim(),
      path: uploadForm.path.trim(),
      type: uploadForm.type,
      size: Math.floor(Math.random() * 500000) + 50000, // Simulated size
      uploadedAt: new Date().toISOString()
    });

    media = cmsStore.media;
    showUploadModal = false;
  }

  function confirmDelete(item: MediaItem) {
    mediaToDelete = item;
    showDeleteModal = true;
  }

  function cancelDelete() {
    showDeleteModal = false;
    mediaToDelete = null;
  }

  function deleteMedia() {
    if (mediaToDelete) {
      cmsStore.deleteMedia(mediaToDelete.id);
      media = cmsStore.media;
      showDeleteModal = false;
      mediaToDelete = null;
    }
  }

  async function copyPath(item: MediaItem) {
    try {
      await navigator.clipboard.writeText(item.path);
      copiedId = item.id;
      setTimeout(() => {
        copiedId = null;
      }, 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  }

  function getFileIcon(type: string): string {
    return type === 'image' ? 'image' : 'file';
  }
</script>

<svelte:head>
  <title>Media - Clover CMS</title>
</svelte:head>

<div class="media-page">
  <header class="page-header">
    <div class="header-content">
      <h1>Media Library</h1>
      <p class="subtitle">Manage your images and documents</p>
    </div>
    <button class="btn-primary" onclick={openUploadModal}>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M17 8l-5-5-5 5M12 3v12" />
      </svg>
      Upload Media
    </button>
  </header>

  {#if mounted}
    {#if media.length > 0}
      <div class="media-grid">
        {#each media as item}
          <div class="media-card">
            <div class="media-preview">
              {#if item.type === 'image'}
                <img
                  src={item.path}
                  alt={item.filename}
                  onerror={(e) => {
                    const img = e.target as HTMLImageElement;
                    img.style.display = 'none';
                    img.parentElement?.classList.add('no-preview');
                  }}
                />
              {:else}
                <div class="file-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                    <path d="M14 2v6h6" />
                  </svg>
                </div>
              {/if}
              <div class="media-overlay">
                <button
                  class="overlay-btn"
                  title="Copy path"
                  onclick={() => copyPath(item)}
                >
                  {#if copiedId === item.id}
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  {:else}
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <rect x="9" y="9" width="13" height="13" rx="2" />
                      <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
                    </svg>
                  {/if}
                </button>
                <button
                  class="overlay-btn delete"
                  title="Delete"
                  onclick={() => confirmDelete(item)}
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M3 6h18M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2" />
                  </svg>
                </button>
              </div>
            </div>
            <div class="media-info">
              <span class="media-filename" title={item.filename}>{item.filename}</span>
              <div class="media-meta">
                <span class="media-size">{formatFileSize(item.size)}</span>
                <span class="media-date">{formatDate(item.uploadedAt)}</span>
              </div>
            </div>
          </div>
        {/each}
      </div>
    {:else}
      <div class="empty-state">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <circle cx="8.5" cy="8.5" r="1.5" />
          <path d="M21 15l-5-5L5 21" />
        </svg>
        <h3>No media files</h3>
        <p>Upload your first image or document to get started.</p>
        <button class="btn-primary" onclick={openUploadModal}>Upload Media</button>
      </div>
    {/if}
  {:else}
    <div class="loading">Loading media...</div>
  {/if}
</div>

<!-- Upload Modal -->
{#if showUploadModal}
  <div class="modal-overlay" role="dialog" aria-modal="true" onclick={closeUploadModal} onkeydown={(e) => e.key === 'Escape' && closeUploadModal()}>
    <div class="modal" role="document" onclick={(e) => e.stopPropagation()}>
      <div class="modal-header">
        <h3>Add Media</h3>
        <button class="close-btn" onclick={closeUploadModal}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>
      </div>

      {#if uploadError}
        <div class="error-message">{uploadError}</div>
      {/if}

      <form onsubmit={handleUpload}>
        <div class="form-group">
          <label for="filename">Filename</label>
          <input
            type="text"
            id="filename"
            bind:value={uploadForm.filename}
            placeholder="my-image.jpg"
          />
        </div>

        <div class="form-group">
          <label for="path">Path / URL</label>
          <input
            type="text"
            id="path"
            bind:value={uploadForm.path}
            placeholder="/images/my-image.jpg"
          />
          <span class="hint">Enter the image path or external URL</span>
        </div>

        <div class="form-group">
          <label>Type</label>
          <div class="type-options">
            <label class="type-option">
              <input
                type="radio"
                name="type"
                value="image"
                bind:group={uploadForm.type}
              />
              <span class="type-label">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <circle cx="8.5" cy="8.5" r="1.5" />
                  <path d="M21 15l-5-5L5 21" />
                </svg>
                Image
              </span>
            </label>
            <label class="type-option">
              <input
                type="radio"
                name="type"
                value="document"
                bind:group={uploadForm.type}
              />
              <span class="type-label">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                  <path d="M14 2v6h6" />
                </svg>
                Document
              </span>
            </label>
          </div>
        </div>

        <div class="modal-actions">
          <button type="button" class="btn-secondary" onclick={closeUploadModal}>
            Cancel
          </button>
          <button type="submit" class="btn-primary">
            Add Media
          </button>
        </div>
      </form>
    </div>
  </div>
{/if}

<!-- Delete Confirmation Modal -->
{#if showDeleteModal && mediaToDelete}
  <div class="modal-overlay" role="dialog" aria-modal="true" onclick={cancelDelete} onkeydown={(e) => e.key === 'Escape' && cancelDelete()}>
    <div class="modal" role="document" onclick={(e) => e.stopPropagation()}>
      <h3>Delete Media</h3>
      <p>Are you sure you want to delete "{mediaToDelete.filename}"? This action cannot be undone.</p>
      <div class="modal-actions">
        <button class="btn-secondary" onclick={cancelDelete}>Cancel</button>
        <button class="btn-danger" onclick={deleteMedia}>Delete</button>
      </div>
    </div>
  </div>
{/if}

<style>
  .media-page {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  .page-header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 1rem;
  }

  .header-content h1 {
    font-size: 1.75rem;
    font-weight: 600;
    color: var(--admin-text);
    margin-bottom: 0.25rem;
  }

  .subtitle {
    color: var(--admin-text-muted);
    font-size: 0.9375rem;
  }

  .btn-primary {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.75rem 1.25rem;
    background: var(--admin-accent);
    color: white;
    border: none;
    border-radius: 8px;
    font-size: 0.9375rem;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.15s ease;
    white-space: nowrap;
  }

  .btn-primary:hover {
    background: var(--admin-accent-hover);
  }

  .btn-primary svg {
    width: 18px;
    height: 18px;
  }

  /* Media Grid */
  .media-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 1rem;
  }

  .media-card {
    background: var(--admin-surface);
    border: 1px solid var(--admin-border);
    border-radius: 10px;
    overflow: hidden;
    transition: all 0.15s ease;
  }

  .media-card:hover {
    border-color: var(--admin-accent);
  }

  .media-preview {
    position: relative;
    aspect-ratio: 4/3;
    background: var(--admin-bg);
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }

  .media-preview img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .media-preview.no-preview {
    background: var(--admin-surface-hover);
  }

  .media-preview.no-preview::after {
    content: 'No preview';
    color: var(--admin-text-muted);
    font-size: 0.75rem;
  }

  .file-icon {
    color: var(--admin-text-muted);
  }

  .file-icon svg {
    width: 48px;
    height: 48px;
  }

  .media-overlay {
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    opacity: 0;
    transition: opacity 0.15s ease;
  }

  .media-card:hover .media-overlay {
    opacity: 1;
  }

  .overlay-btn {
    width: 40px;
    height: 40px;
    border-radius: 8px;
    background: var(--admin-surface);
    border: none;
    color: var(--admin-text);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.15s ease;
  }

  .overlay-btn:hover {
    background: var(--admin-surface-hover);
  }

  .overlay-btn.delete:hover {
    background: rgba(239, 68, 68, 0.2);
    color: var(--admin-danger);
  }

  .overlay-btn svg {
    width: 18px;
    height: 18px;
  }

  .media-info {
    padding: 0.875rem;
  }

  .media-filename {
    display: block;
    font-size: 0.875rem;
    font-weight: 500;
    color: var(--admin-text);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-bottom: 0.375rem;
  }

  .media-meta {
    display: flex;
    justify-content: space-between;
    font-size: 0.75rem;
    color: var(--admin-text-muted);
  }

  /* Empty State */
  .empty-state {
    text-align: center;
    padding: 4rem 2rem;
    background: var(--admin-surface);
    border: 1px solid var(--admin-border);
    border-radius: 12px;
  }

  .empty-state svg {
    width: 64px;
    height: 64px;
    color: var(--admin-text-muted);
    margin-bottom: 1rem;
    opacity: 0.5;
  }

  .empty-state h3 {
    font-size: 1.125rem;
    font-weight: 600;
    color: var(--admin-text);
    margin-bottom: 0.5rem;
  }

  .empty-state p {
    color: var(--admin-text-muted);
    font-size: 0.9375rem;
    margin-bottom: 1.5rem;
  }

  .loading {
    text-align: center;
    padding: 4rem 2rem;
    color: var(--admin-text-muted);
  }

  /* Modal */
  .modal-overlay {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
    padding: 1rem;
  }

  .modal {
    background: var(--admin-surface);
    border: 1px solid var(--admin-border);
    border-radius: 12px;
    padding: 1.5rem;
    max-width: 480px;
    width: 100%;
  }

  .modal-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1.25rem;
  }

  .modal h3 {
    font-size: 1.125rem;
    font-weight: 600;
    color: var(--admin-text);
    margin: 0;
  }

  .close-btn {
    width: 32px;
    height: 32px;
    border-radius: 6px;
    background: transparent;
    border: none;
    color: var(--admin-text-muted);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .close-btn:hover {
    background: var(--admin-surface-hover);
    color: var(--admin-text);
  }

  .close-btn svg {
    width: 18px;
    height: 18px;
  }

  .modal p {
    color: var(--admin-text-muted);
    font-size: 0.9375rem;
    line-height: 1.5;
    margin-bottom: 1.5rem;
  }

  .error-message {
    padding: 0.75rem;
    background: rgba(239, 68, 68, 0.15);
    border: 1px solid rgba(239, 68, 68, 0.3);
    border-radius: 6px;
    color: #fca5a5;
    font-size: 0.875rem;
    margin-bottom: 1rem;
  }

  .form-group {
    margin-bottom: 1rem;
  }

  .form-group label {
    display: block;
    font-size: 0.8125rem;
    font-weight: 500;
    color: var(--admin-text);
    margin-bottom: 0.5rem;
  }

  .form-group input[type="text"] {
    width: 100%;
    padding: 0.75rem;
    background: var(--admin-bg);
    border: 1px solid var(--admin-border);
    border-radius: 6px;
    color: var(--admin-text);
    font-size: 0.9375rem;
  }

  .form-group input[type="text"]:focus {
    outline: none;
    border-color: var(--admin-accent);
  }

  .hint {
    display: block;
    font-size: 0.75rem;
    color: var(--admin-text-muted);
    margin-top: 0.375rem;
  }

  .type-options {
    display: flex;
    gap: 0.75rem;
  }

  .type-option {
    flex: 1;
  }

  .type-option input {
    display: none;
  }

  .type-label {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    padding: 0.75rem;
    background: var(--admin-bg);
    border: 1px solid var(--admin-border);
    border-radius: 6px;
    color: var(--admin-text-muted);
    cursor: pointer;
    transition: all 0.15s ease;
  }

  .type-option input:checked + .type-label {
    border-color: var(--admin-accent);
    color: var(--admin-accent);
    background: rgba(0, 166, 81, 0.1);
  }

  .type-label svg {
    width: 18px;
    height: 18px;
  }

  .modal-actions {
    display: flex;
    gap: 0.75rem;
    justify-content: flex-end;
    margin-top: 1.5rem;
  }

  .btn-secondary {
    padding: 0.625rem 1rem;
    background: var(--admin-surface-hover);
    color: var(--admin-text);
    border: 1px solid var(--admin-border);
    border-radius: 6px;
    font-size: 0.875rem;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.15s ease;
  }

  .btn-secondary:hover {
    background: var(--admin-border);
  }

  .btn-danger {
    padding: 0.625rem 1rem;
    background: var(--admin-danger);
    color: white;
    border: none;
    border-radius: 6px;
    font-size: 0.875rem;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.15s ease;
  }

  .btn-danger:hover {
    background: #dc2626;
  }

  @media (max-width: 640px) {
    .page-header {
      flex-direction: column;
      align-items: stretch;
    }

    .media-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }
</style>
