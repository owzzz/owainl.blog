<script lang="ts">
  export let slug: string;
  export let title: string;
  export let type: 'book' | 'post';
  
  const localUrl = `/audio/${type}s/${slug}.mp3`;
  let audioUrl: string | null = localUrl;

  async function checkLocalFile() {
    try {
      const response = await fetch(localUrl, { method: 'HEAD' });
      if (!response.ok) {
        audioUrl = null;
      }
    } catch {
      audioUrl = null;
    }
  }

  checkLocalFile();
</script>

{#if audioUrl}
  <div class="border rounded-lg p-4 mb-6 bg-gray-50">
    <h3 class="text-sm font-semibold mb-3">🎧 Listen to this post</h3>
      <audio controls class="w-full" title={title}>
        <source src={audioUrl} type="audio/mpeg">
        Your browser does not support the audio element.
      </audio>
  </div> 
{/if}