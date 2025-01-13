<script lang="ts">
  import type {MarkComponentProps} from '@portabletext/svelte'

  export let portableText: MarkComponentProps<{
    url?: string
    newWindow?: boolean
  }>

  // Remember to make your variables reactive so that they can reflect prop changes
  // See: https://svelte.dev/docs#3_$_marks_a_statement_as_reactive
  $: ({value} = portableText)
  $: newWindow = value.newWindow || false
</script>

{#if value.url}
  <a href={value.url} target={newWindow ? '_blank' : undefined}>
    <slot />
  </a>
{:else}
  <slot />
{/if}