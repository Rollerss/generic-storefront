<script lang="ts">
  export let itemCount: number;
</script>

<button class="cartbutton" on:click>
  <span> 🛒 CART </span>
  <span class="count">{itemCount}</span>
</button>

<style>
  .cartbutton {
    background-color: hsla(120, 76%, 16%, 0.808);
    border: 2px solid hsla(120, 76%, 16%, 0.808);
    color: white;
    padding: 0.2em;
    position: fixed;
    top: 0;
    right: 0;
    cursor: pointer;
    outline: none;
  }
  span {
    display: inline;
  }
  .count {
    display: inline-block;
    text-align: center;
    padding: 0.1rem;
    margin: 0.1rem;
    border-radius: 50%;
    background-color: white;
    color: black;
    width: 1rem;
    height: 1rem;
  }
</style>
