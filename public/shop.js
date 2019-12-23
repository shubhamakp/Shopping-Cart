
function fetchProducts (done){
    $.get('/api/products',function(data){
        done(data)
    })
}

function addproduct(name,manuf,price,done){
    $.post('/api/products',{
        name :name,
        manufacturer:manuf,
        price:price
    },
    function(data){
        done(data)
    })
}

function createProductCard(product){
    return $(`<div class = "col-4 mx-2 card p-4 ">
    <h4 class ="product-name">${product.name}</h4>
    <div class="product-manufacturer">${product.manufacturer}</div>
    <div class="row">
        <div class="col m-3 p-3">
          <b>${product.price}</b> 
        </div>
        <button class=" col-6 btn btn-primary m-3 p-1">buy</button>
    </div>              
</div>`)
}
