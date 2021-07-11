<script>
  import image from "../assets/undraw_web_shopping_dd4l.svg";
</script>

<nav>
  <a href="/" class="links">
    <div class="title">Generic</div>
    <span>Shopping</span>
  </a>
  <img class="pad" src={image} alt="web shopping" />
  <div class="pad">YUMMY!!</div>

  <a href="/" class="links">CART</a>
  <a href="/" class="links">featured</a>
  <a href="/" class="links">ABOUT US</a>
</nav>

<style>
  .pad {
    padding: 2em 0;
  }
  .links {
    text-decoration: none;
    color: inherit;
    text-transform: uppercase;
    font-weight: bold;
    display: block;
    padding: 1em 0;
  }
  .title {
    font-size: 2em;
  }
  span {
    font: italic;
    text-transform: uppercase;
  }
  nav {
    grid-column: 1;
    height: 100%;
    background-color: black;
    color: white;
    padding: 1rem;
    text-align: center;
    margin: 0;
  }
  img {
    max-width: 100%;
  }
</style>
