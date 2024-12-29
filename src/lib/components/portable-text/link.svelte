<script lang="ts">
  import type { MarkComponentProps } from '@portabletext/svelte'

  export let portableText: MarkComponentProps<{
    href: string
  }>
</script>

<a href={portableText.value.href} target="_blank">
  <slot />
</a>