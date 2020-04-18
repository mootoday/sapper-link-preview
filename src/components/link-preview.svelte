<script>
  import LinkPreviewCard from "./link-preview-card.svelte";

  let showPreviewCard = false;
</script>

<style>
  a {
    position: relative;
  }
</style>

<a href={$$props.href} {...$$props} on:mouseover={() => showPreviewCard = true} on:mouseleave={() => showPreviewCard = false}>
  <slot />
  <LinkPreviewCard href={$$props.href} show={showPreviewCard} />
</a>
