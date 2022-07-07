//Initialise
var allproductdata = null
reloadcart()

//Temp
//localStorage.clear()

//Print localStorage
console.log('localStorage:')
for (var i=0; i < localStorage.length; i++) {
    const key = localStorage.key(i)
    console.log(key, localStorage.getItem(key))
}
console.log('\n')

//Functions
function reloadcart() {
    fetch('scripts/productdata.json')
    .then(response => response.json())
    .then(data => {
        allproductdata = data['data']

        const products = document.getElementById('products')
        while (products.hasChildNodes()) {
            products.removeChild(products.firstChild);
        }

        for (var i=0; i < localStorage.length; i++) {
            const key = localStorage.key(i)
            const value = localStorage.getItem(key)
            console.log(key, localStorage.getItem(key))
            if (isNaN(value)) {
                setTimeout(() => {
                    localStorage.removeItem(key)
                }, 1000)
            }
            else {
                productdata = allproductdata.find((y) => y['name'] == key)

                const div = document.createElement('div')
                const productname = document.createElement('p')
                const price = document.createElement('p')
                const quantity = document.createElement('p')
                const addbutton = document.createElement('button')
                const removebutton = document.createElement('button')
                const deletebutton = document.createElement('button')

                price.style.display = 'inline'
                quantity.style.display = 'inline'
                addbutton.style.display = 'inline'
                removebutton.style.display = 'inline'
                deletebutton.style.display = 'inline'
            
                div.classList = 'productcard'
                productname.innerHTML = `${productdata['name']} | `
                price.classList = 'price'
                price.innerHTML = `${productdata['price']} | `
                quantity.innerHTML = `Quantity: ${value} | `
                addbutton.classList = 'productbutton'
                addbutton.innerHTML = 'Add Item'
                addbutton.id = productdata['name']
                addbutton.type = 'button'
                addbutton.addEventListener('click', additemtocartfunction)
                removebutton.classList = 'productbutton'
                removebutton.innerHTML = 'Remove Item\n'
                removebutton.id = productdata['name']
                removebutton.type = 'button'
                removebutton.addEventListener('click', removeitemfromcartfunction)
                deletebutton.classList = 'productbutton'
                deletebutton.innerHTML = 'Delete Item\n'
                deletebutton.id = productdata['name']
                deletebutton.type = 'button'
                deletebutton.addEventListener('click', deleteitemfromcartfunction)
            
                div.appendChild(productname)
                productname.appendChild(price)
                price.appendChild(quantity)
                price.appendChild(addbutton)
                price.appendChild(removebutton)
                price.appendChild(deletebutton)
            
                products.appendChild(div)
            }
        }

        return
    })
    .catch(console.error)
}

function additemtocartfunction(x) {
    if (!x.target) return
    const productdata = allproductdata.find((y) => y['name'] == x.target.id)

    var quantity = parseFloat(localStorage.getItem(productdata['name']))
    if (!quantity) quantity = 0
    quantity += 1
    localStorage.setItem(productdata['name'], quantity)

    console.log(productdata['name'], "/", quantity)
    reloadcart()
}

function removeitemfromcartfunction(x) {
    if (!x.target) return
    const productdata = allproductdata.find((y) => y['name'] == x.target.id)

    var quantity = parseFloat(localStorage.getItem(productdata['name']))
    quantity -= 1
    localStorage.setItem(productdata['name'], quantity)
    if (quantity == 0) {
        localStorage.removeItem(productdata['name'])
    }

    console.log(productdata['name'], "/", quantity)
    reloadcart()
}

function deleteitemfromcartfunction(x) {
    if (!x.target) return
    const productdata = allproductdata.find((y) => y['name'] == x.target.id)

    localStorage.removeItem(productdata['name'])

    console.log(productdata['name'], "/", '0')
    reloadcart()
}