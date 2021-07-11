<script lang="ts">
  import type { Merchandise } from "../lib/merchandise";

  export let merchItem: Merchandise;
  export let addToCart;
</script>

<div class="container">
  <img src={merchItem.imageUrl} alt={merchItem.name} />
  <h3 class="pad">{merchItem.name}</h3>
  <span class="pad">{merchItem.usPrice()}</span>
  <p class="pad">{merchItem.description}</p>
  <button class="info-btn">MORE INFO</button>
  <button class="cart-btn" on:click={() => addToCart(merchItem.id)}
    >ADD TO CART</button
  >
</div>

<style>
  .pad {
    padding: 0.75rem 0;
  }
  img {
    height: 24rem;
    padding: 0;
    width: 16rem;
    border: 2px solid hsla(0, 0%, 100%, 0.5);
  }
  h3 {
    font-weight: bolder;
    text-transform: uppercase;
  }
  button {
    display: block;
    margin: 0.5rem auto;
    font-family: inherit;
    font-size: inherit;
    padding: 0.5em;
    border-radius: 0.5em;
    border: 2px solid hsla(15, 100%, 50%, 0);
    outline: none;
    width: 200px;
    font-variant-numeric: tabular-nums;
    cursor: pointer;
    color: hsl(26, 38%, 91%);
  }
  .info-btn {
    background-color: hsla(200, 67%, 24%, 0.747);
  }
  .cart-btn {
    background-color: hsla(120, 76%, 16%, 0.808);
  }
  .container {
    border-radius: 0.25em;
    margin: 0.5em auto;
    border: 1px solid hsl(0, 100%, 69%);
    padding: 0.5em;
    background-color: hsla(248, 33%, 87%, 0.404);
  }
</style>
