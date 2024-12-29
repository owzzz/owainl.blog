<script lang="ts">
  import type { BlockComponentProps } from '@portabletext/svelte';

  export let portableText: BlockComponentProps

  $: ({ value } = portableText);
  $: ({ rows } = value);
</script>

{#if rows.length > 0}
  <table class="table-auto w-full mt-4">
    <thead class="bg-gray-50">
      <tr>
        {#each rows[0].cells as cell}
          <th class="border border-gray-200 px-4 py-1 text-left text-sm">{cell}</th>
        {/each}
      </tr>
    </thead>
    <tbody>
      {#each rows.slice(1) as row}
        <tr>
          {#each row.cells as cell}
            <td class="border border-gray-200 px-4 py-2 text-sm">{cell}</td>
          {/each}
        </tr>
      {/each}
    </tbody>
  </table>
{/if}