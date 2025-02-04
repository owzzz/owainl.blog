<script lang="ts">
  import { PortableText } from '@portabletext/svelte';
  import CustomHeading from './custom-heading.svelte';
  import CodeBlock from './code-block.svelte';
  import Paragraph from './paragraph.svelte';
  import ListWrapper from './list-wrapper.svelte';
  import Table from './table.svelte';

  export let value: any;
</script>

<PortableText 
  {value}
  components={{
    types: {
      codeBlock: CodeBlock,
      table: Table,
    },
    block: {
      normal: Paragraph,
      h1: CustomHeading,
      h2: CustomHeading,
      h3: CustomHeading,
      h4: CustomHeading,
      h5: CustomHeading,
      h6: CustomHeading,
    },
    list: {
      bullet: ListWrapper,
      numbered: ListWrapper
    },
  }}
/> 