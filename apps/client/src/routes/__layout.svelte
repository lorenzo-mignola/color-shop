<script>
  import Header from '../components/Header.svelte';
  import '../styles/global.css';
  import '../styles/tailwind-output.css';
</script>

<Header />

<main class="p-6">
  <slot />
</main>
