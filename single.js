let productId = 1526;
let product_container = document.querySelector(".product_container");
console.log("siden vises");
fetch(`https://kea-alt-del.dk/t7/api/products/${productId}`)
  .then((Response) => Response.json())
  .then((data) => {
    product_container.innerHTML = `
      <main class="product_container">
        <ol class="breadcrumbs">
          <li>
            <a href="index.html">Home</a>
          </li>
          <li>
            <a href="category.html">Brands</a>
          </li>
          <li>
            <a href="productlist.html">${data.brandname} </a>
          </li>
          <li><b>${data.productdisplayname}</b></li>
        </ol>
        <img src="https://kea-alt-del.dk/t7/images/webp/1000/${data.id}.webp" alt=<b>${data.productdisplayname}</b> />
        <section class="purchaseBox">
          <h3><b>${data.productdisplayname}</b></h3>
          <p>${data.brandname} | ${data.articletype}</p>
          <form>
            <label>
              Choose a size
              <select name="size">
                <option>S</option>
                <option>M</option>
                <option>L</option>
                <option>XL</option>
              </select>
            </label>
            <button>Add to basket</button>
          </form>
        </section>
        <section class="info">
          <h2>
            <b>${data.productdisplayname}</b>
          </h2>
          <dl>
            <dt>Model name</dt>
            <dd><b>${data.productdisplayname}</b></dd>
            <dt>Usage Type</dt>
            <dd>${data.usagetype}</dd>
            <dt>Inventory number</dt>
            <dd>${data.id}</dd>
          </dl>
          <h1>${data.brandname}</h1>
          <p>Nike, creating experiences for today’s athlete</p>
        </section>
      </main>
    `;
  });
