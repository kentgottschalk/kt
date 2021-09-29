<script context="module">
</script>

<script>
  import Button from "$lib/components/Button.svelte";
  import { killteams } from "$lib/stores/killteam.js";
  //import factions from "$lib/data/data.js";

  function newFunc() {
    console.log("new");
  }
  function loadFunc() {
    console.log("load");
  }
  function clearFunc() {
    killteams.set([]);
  }

  let selected = "";

  import * as data from "../../static/data/factions.json";

  console.log(data)

</script>

<svelte:head>
  <title>Kill Team</title>
</svelte:head>

<div class="flex justify-center">
  <Button text="New" clickFunc={newFunc} />
  <Button text="Load" clickFunc={loadFunc} />
  <Button text="Clear" clickFunc={clearFunc} />
</div>

<div class="flex justify-center">
  <Button text="Roster" />
  <Button text="Kill Team" />
</div>



{#each $killteams as killteam}
  {killteam}
{/each}
