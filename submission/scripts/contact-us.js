//Initialise
var allproductdata = null
fetch('scripts/productdata.json')
.then(response => response.json())
.then(data => {
    allproductdata = data['data']
    
    for (productdata of allproductdata) {
        const option = document.createElement('option')
    
        option.innerHTML = productdata['name']
    
        document.getElementById('products').appendChild(option)
    }
    
    return
})
.catch(console.error)