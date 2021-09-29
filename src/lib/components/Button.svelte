<script>
  export let text;
  export let clickFunc;
</script>

<button class="px-3 py-2 border mr-2" on:click={clickFunc}>{text}</button>
