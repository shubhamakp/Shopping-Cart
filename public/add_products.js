$(function(){

    let productName = $('#productName')
    let manufac = $('#productManufacturer')
    let prodprice = $('#productPrice')

    $('#btnProductAdd').click(function(){

        addproduct(
            productName.val(),
            manufac.val(),
            prodprice.val(),
            function(addedProduct){
                window.alert("Added "+addedProduct.name + " to Database")
            }
        )
    })
})