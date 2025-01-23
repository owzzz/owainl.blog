<script lang="ts">
  export let title: string;
  export let url: string;
</script>

{#if url}
  <div class="border rounded-lg p-4 mb-6 bg-gray-50">
    <h3 class="text-sm font-semibold mb-3">🎧 Listen to this post</h3>
      <audio controls class="w-full" title={title}>
        <source src={url} type="audio/mpeg">
        Your browser does not support the audio element.
      </audio>
  </div> 
{/if}