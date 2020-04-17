<script>
  import LinkPreviewCard from "./link-preview-card.svelte";

  export let href;

  let showPreviewCard = false;
</script>

<style>
  a {
    position: relative;
  }
</style>

<a {href} {...$$restProps} on:mouseover={() => showPreviewCard = true} on:mouseleave={() => showPreviewCard = false}>
  <slot />
  <LinkPreviewCard {href} show={showPreviewCard} />
</a>
