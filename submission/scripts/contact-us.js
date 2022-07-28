//Initialise
getproductdata()
.then(() => {
    
    for (productdata of allproductdata) {
        const option = document.createElement('option')
    
        option.innerHTML = productdata['name']
    
        document.getElementById('products').appendChild(option)
    }
    
    return
})
.catch(console.error)