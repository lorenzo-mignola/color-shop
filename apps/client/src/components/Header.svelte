<script lang="ts">
  import { account } from '../store';
  import '../styles/tailwind-output.css';
</script>

<nav
  class="bg-gray-700 p-4 mb-4 shadow-gray-500 shadow-sm flex justify-between text-white items-center"
>
  <h1 class="text-xl"><b>Color Shop</b></h1>
  {#if $account}
    <p class="text-sm">Account: {$account}</p>
  {/if}
</nav>
