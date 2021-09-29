<script>
  import { page } from "$app/stores";
</script>

<header>
  <nav class="container mx-aut my-3">
    <ul class="flex justify-center">
      <li class:active={$page.path === "/"}>
        <a sveltekit:prefetch href="/" class="text-3xl">Kill Team</a>
      </li>
    </ul>
  </nav>
</header>
