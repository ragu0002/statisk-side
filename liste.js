let list_container = document.querySelector(".list_container");

fetch(`https://kea-alt-del.dk/t7/api/products?limit=100/`).then((response) => response.json().then((data) => showList(data)));

function showList(products) {
  console.log(products);
  const markup = products
    .map(
      (product) =>
        `
      <article class="smallProduct onSale">
        <img src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp" alt="Blue T20" />
        <h3>
          <b>${product.productdisplayname}</b>
        </h3>
        <p class="subtle">${product.articletype} | ${product.brandname}</p>
        <p class="price">
          <span>Prev.</span> DKK ${product.price},-
        </p>
        <div class="discounted">
          <p>Now DKK ${product.price},-</p>
          <p>-${product.discount}</p>
        </div>
        <a href="product.html">Read More</a>
      </article>
    `
    )
    .join("");
  list_container.innerHTML = markup;
}
