<script lang="ts">
  import { getRandomColor } from '../../api';
  import { color } from '../../store';

  const getColor = async () => {
    const { data: newColor } = await getRandomColor();
    color.set(newColor);
  };
</script>

<div class="flex justify-center">
  <button
    class="bg-gray-300 text-xl rounded-full p-4 shadow-md shadow-grey-200 hover:shadow-lg hover:shadow-grey-300 w-4/12"
    on:click={() => getColor()}
  >
    Generate color
  </button>
</div>
