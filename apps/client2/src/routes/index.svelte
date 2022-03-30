<script lang="ts">
  import { onMount } from 'svelte';
  import ColorCard from '../components/ColorCard.svelte';
  import CreateColorButton from '../components/index/CreateColorButton.svelte';
  import { account, color } from '../store';

  const loadMetaMask = async () => {
    if (typeof window.ethereum !== 'undefined') {
      const [accountMetamask] = await window.ethereum.request({ method: 'eth_requestAccounts' });
      account.set(accountMetamask);
    }
  };

  onMount(() => {
    loadMetaMask();
  });
</script>

<CreateColorButton />
{#if $color}
  <ColorCard color={$color} />
{/if}
