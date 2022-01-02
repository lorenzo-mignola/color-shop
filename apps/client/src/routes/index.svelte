<script lang="ts">
  import { onMount } from 'svelte';
  import CreateColorButton from '../components/index/CreateColorButton.svelte';
  import { account } from '../store';

  const loadMetaMask = async () => {
    //@ts-ignore
    if (typeof window.ethereum !== 'undefined') {
      //@ts-ignore
      const [accountMetamask] = await window.ethereum.request({ method: 'eth_requestAccounts' });
      account.set(accountMetamask);
    }
  };

  onMount(() => {
    console.log('clg', 'asdf');
    loadMetaMask();
  });
</script>

<CreateColorButton />
