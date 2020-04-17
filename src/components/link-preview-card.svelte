<script>
  import { onMount } from "svelte";
	
  export let href;
  export let show = false;
	
  let title;
  let description;
  let imgSrc;
	
  onMount(() => {
    fetch("/link-preview.json?href=" + href)
      .then(response => response.json())
      .then(linkData => {
        title = linkData.title;
        description = linkData.description;
        imgSrc = linkData.imgSrc;
      });
	});
</script>

<style>
  .card {
    width: 150px;
    font-size: 10px;
    color: black;

    position: absolute;
    z-index: 100;

    bottom: 30px;
    left: 50%;
    transform: translateX(-50%);
  }

  .card img {
    width: 150px;
  }

  .card-title {
    font-size: 14px;
  }
</style>

{#if show}
  <div class="card">
    {#if imgSrc}
  	  <img src={imgSrc} alt={title} class="card-img-top">
    {/if}
    <div class="card-body">
      <h5 class="card-title">{title}</h5>
      {#if description}
        <p class="card-text">{description}</p>
      {/if}
    </div>
  </div>
{/if}