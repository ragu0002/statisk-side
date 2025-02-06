let productId = new URLSearchParams(window.location.search).get("id");
let product_container = document.querySelector(".product_container");
console.log("siden vises");
fetch(`https://kea-alt-del.dk/t7/api/products/${productId}`)
  .then((Response) => Response.json())
  .then((data) => {
    product_container.innerHTML = `
      <main class="product_container " >
       
          <h2>${data.productdisplayname}</h2>
  
        <div>
        <div class="img ${data.soldout && "soldOut"} ">
        <img src="https://kea-alt-del.dk/t7/images/webp/1000/${data.id}.webp" alt="<b>${data.productdisplayname}</b> "/>
        </div>

    <div class="">
        <section class="purchaseBox">

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
           <p class="price">
          <span>Prev.</span> DKK <span class="${data.discount ? "discount_price" : ""}"> ${data.price}</span>,-
        </p>
        <div class="no_discount grid_1-1 ${data.discount ? "yes_discount" : ""}">
      <p>Now DKK ${data.discount ? (data.price * (1 - data.discount / 100)).toFixed(2) : data.price},-</p>
      ${data.discount ? `<p>-${data.discount}%</p>` : ""}
    </div>
          <dl>
         
            <dt>Usage Type</dt>
            <dd>${data.usagetype}</dd>
            <dt>Inventory number</dt>
            <dd>${data.id}</dd>
          </dl>
           </div>
          <h1>${data.brandname}</h1>
          <p>${data.brandname}, creating experiences for today’s athlete</p>
        </section>
       
      </main>
    `;
  });
