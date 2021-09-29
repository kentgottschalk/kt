<script>
  import Header from "$lib/components/Header.svelte";
  import "../app.postcss";
</script>

<Header />
<main class="container mx-auto p-3">
  <slot />
</main>
