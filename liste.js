let list_container = document.querySelector(".list_container");
const getUrl = window.location.search;
const getSearch = new URLSearchParams(getUrl);
const categories = getSearch.get("categories");
let allData;

document.querySelectorAll("button").forEach((knap) => knap.addEventListener("click", showFilterd));

fetch(`https://kea-alt-del.dk/t7/api/products?category=${categories}`).then((response) =>
  response.json().then((data) => {
    allData = data;
    showList(data);
  })
);
function showFilterd() {
  const filter = this.dataset.gender;
  let fraction = allData.filter((product) => product.gender === filter);
  if (filter == "All") {
    showList(allData);
  } else fraction;
  showList(fraction);
}

function showList(products) {
  console.log(products);
  const markup = products

    .map(
      (product) =>
        `  
    
      <article class="smallProduct  ${product.soldout && "soldOut"}">
        <img src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp" alt="${product.productdisplayname}" />
        <h3>
          <b>${product.productdisplayname}</b>
        </h3>
        <p class="subtle">${product.articletype} | ${product.brandname}</p>
        <p class="price">
          <span>Prev.</span> DKK <span class="${product.discount ? "discount_price" : ""}"> ${product.price}</span>,-
        </p>
        <div class="no_discount discounted ${product.discount ? "yes_discount" : ""}">
      <p>Now DKK ${product.discount ? (product.price * (1 - product.discount / 100)).toFixed(2) : product.price},-</p>
      ${product.discount ? `<p>-${product.discount}%</p>` : ""}
    </div>
      
        <a href="product.html?id=${product.id}">Read More</a>
      </article>
    `
    )
    .join("");
  list_container.innerHTML = markup;
}
