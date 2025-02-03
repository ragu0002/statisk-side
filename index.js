let category_main = document.querySelector(".category_main");
fetch(`https://kea-alt-del.dk/t7/api/categories`).then((response) => response.json().then((data) => showList(data)));
function showList(products) {
  console.log(products);
  const markup = products
    .map(
      (product) =>
        `
     <section class="categorylist">
        <a href="produktliste.html?categories=${product.category}">${product.category}</a>
      </section>
    `
    )
    .join("");
  category_main.innerHTML = markup;
}
