<script lang="ts">
  import { writable } from 'svelte/store';

  const store = writable([]);
  $store.length; // incorrect no-unsafe-member-access error

  $: assignment = [];
  assignment.length; // incorrect no-unsafe-member-access error
  // You can work around this by doing
  let another_assignment: string[];
  $: another_assignment = [];
  another_assignment.length; // OK
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
