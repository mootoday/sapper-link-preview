<script>
  import LinkPreview from "../components/link-preview.svelte";

  const linkPreviewExample = '<LinkPreview href="https://www.google.com">www.google.com</LinkPreview>';
</script>

<style>
  .wrapper {
    width: 500px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    position: absolute;
  }
</style>

<svelte:head>
	<title>Sapper Link Preview</title>
</svelte:head>

<div class="wrapper">
  <p>Hi there! 👋</p>
  <p>
    I was inspired by
    <LinkPreview href="https://twitter.com/ilonacodes">@ilonacodes</LinkPreview>
    and created this
    <LinkPreview href="https://sapper.svelte.dev/">Sapper-version</LinkPreview>
    of her frontend shorts.
  </p>
  <p>
    With Sapper, and likely Vue, React, etc as well, we can leverage a backend
    service to fetch URL preview information at runtime.
    This allows us to define a link including its preview with a single component:
  </p>
  <pre>
    {linkPreviewExample}
  </pre>
  <p>
    Please check out
    <LinkPreview href="https://dev.to/ilonacodes/frontend-shorts-vue-js-vanilla-js-digital-dices-og">
      her post about frontend shorts
    </LinkPreview>
    series on
    <LinkPreview href="https://dev.to">
      dev.to.
    </LinkPreview>
  </p>
</div>
