<script lang="ts">
  import MerchandiseComponent from "./components/MerchandiseComponent.svelte";
  import { Merchandise } from "./lib/merchandise";
  import ShoppingCart from "./components/ShoppingCart.svelte";
  import NavBar from "./components/NavBar.svelte";

  const merchItems = [
    new Merchandise(
      1,
      "Item 1",
      "Its new and the best",
      10,
      "https://images.unsplash.com/photo-1525604499593-d92408d2adbc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=622&q=80"
    ),
    new Merchandise(
      2,
      "Item 2",
      "Its old and the best",
      1000,
      "https://images.unsplash.com/photo-1602143407151-7111542de6e8?ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXxxZVVnb3Rsd3JTMHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    ),
    new Merchandise(
      3,
      "Item 3",
      "Its old and the best",
      10000,
      "https://images.unsplash.com/photo-1542038335240-86aea625b913?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MnxxZVVnb3Rsd3JTMHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
    ),
    new Merchandise(
      4,
      "Item 4",
      "Its old and the best",
      100000,
      "https://images.unsplash.com/photo-1491637639811-60e2756cc1c7?ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NXxxZVVnb3Rsd3JTMHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    ),
    new Merchandise(
      5,
      "Item 5",
      "Its old and the best",
      1000000,
      "https://images.unsplash.com/photo-1608571423539-e951b9b3871e?ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NHxxZVVnb3Rsd3JTMHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    ),
    new Merchandise(
      6,
      "Item 6",
      "Its old and the best",
      10000000,
      "https://images.unsplash.com/photo-1503602642458-232111445657?ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8N3xxZVVnb3Rsd3JTMHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    ),
    new Merchandise(
      7,
      "Item 7",
      "Its old and the best",
      100000000,
      "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NnxxZVVnb3Rsd3JTMHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    ),
  ];

  let itemsInCart = {};
  $: itemCount = 0;

  function addToCart(itemId) {
    if (!itemsInCart[itemId]) {
      itemsInCart[itemId] = 1;
    } else {
      itemsInCart[itemId]++;
    }
    itemCount++;
  }
</script>

<div class="container">
  <NavBar />
  <ShoppingCart {itemCount} />
  <main>
    <h1>Hello Shoppers!</h1>

    <p class="snippit">
      Thank you for visiting our store please take a look at our high quality
      merchandise. Quality is number one here at the Generic Shopping.
    </p>

    <hr />

    <div class="merch">
      {#each merchItems as merchItem}
        <MerchandiseComponent {merchItem} {addToCart} />
      {/each}
    </div>
  </main>
</div>

<style>
  .container {
    width: 100%;
    height: 100%;
    display: inline-grid;
    grid-template-columns: 160px auto;
    grid-template-rows: auto;
  }
  :root {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  }

  main {
    width: 100%;
    height: 100%;
    grid-column: 2;
    text-align: center;
    margin: 0 auto;
    background-color: hsl(26, 38%, 91%);
  }

  h1 {
    color: hsla(0, 0%, 0%, 0.685);
    text-transform: uppercase;
    font-size: 4rem;
    font-weight: 100;
    line-height: 1.1;
    margin: 2rem auto;
    max-width: 14rem;
  }

  .snippit {
    max-width: 25rem;
    color: hsla(0, 0%, 0%, 0.685);
  }
  p {
    max-width: 1rem;
    margin: 1rem auto;
    line-height: 1.35;
  }

  @media (min-width: 480px) {
    h1 {
      max-width: none;
    }

    p {
      max-width: none;
    }
  }

  .merch {
    display: flex;
    justify-content: center;
    margin: 1em;
    flex-wrap: wrap;
  }
</style>
