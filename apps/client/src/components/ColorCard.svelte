<script lang="ts">
  export let color: string;
</script>

<div class="m-5 p-5 shadow-xl rounded flex justify-center items-center flex-col">
  <div>
    <h3 class="text-lg font-black">
      {color}
    </h3>
  </div>
  <dir class="color-circle rounded-full shadow-md" style="background-color: {color}" />
</div>

<style>
  .color-circle {
    height: 8rem;
    width: 8rem;
  }
</style>
