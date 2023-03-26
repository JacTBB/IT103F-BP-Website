//Initialise
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
    getproductdata()
    .then(() => {
        var total = 0

        const products = document.getElementById('cartitemdisplay')
        while (products.hasChildNodes()) {
            products.removeChild(products.firstChild);
        }

        //ProductInfo
        for (var i=0; i < localStorage.length; i++) {
            const key = localStorage.key(i)
            const value = localStorage.getItem(key)
            if (isNaN(value)) {
                if (key != 'userdata' && key !='comments' && value.length < 10) {
                    setTimeout(() => {
                        localStorage.removeItem(key)
                    }, 1000)
                }
            }
            else {
                productdata = allproductdata.find((y) => y['name'] == key)

                if (productdata) {
                    //Product
                    const div = document.createElement('div')
                    const img = document.createElement('img')
                    const productname = document.createElement('p')
                    const price = document.createElement('p')

                    /*
                    const quantity = document.createElement('td')
                    const tdaddbutton = document.createElement('td')
                    const tdremovebutton = document.createElement('td')
                    const tddeletebutton = document.createElement('td')
                    const addbutton = document.createElement('button')
                    const removebutton = document.createElement('button')
                    const deletebutton = document.createElement('button')
                    */

                    div.classList = 'cartitem'
                    img.classList = 'cartitemimg'
                    img.src = `../../../${productdata['image']}`
                    productname.classList = 'cartitemname'
                    productname.innerHTML = `${productdata['name']}`
                    price.classList = 'cartitemprice'
                    price.innerHTML = `${value} x $${productdata['price']}`

                    /*
                    quantity.innerHTML = `Quantity: ${value}`
                    addbutton.classList = 'productbutton'
                    addbutton.innerHTML = 'Add Item'
                    addbutton.id = productdata['name']
                    addbutton.type = 'button'
                    addbutton.addEventListener('click', additemtocartfunction)
                    removebutton.classList = 'productbutton'
                    removebutton.innerHTML = 'Remove Item'
                    removebutton.id = productdata['name']
                    removebutton.type = 'button'
                    removebutton.addEventListener('click', removeitemfromcartfunction)
                    deletebutton.classList = 'productbutton'
                    deletebutton.innerHTML = 'Delete Item'
                    deletebutton.id = productdata['name']
                    deletebutton.type = 'button'
                    deletebutton.addEventListener('click', deleteitemfromcartfunction)
                    */

                    div.appendChild(img)
                    div.appendChild(productname)
                    div.appendChild(price)

                    /*
                    div.appendChild(tdremovebutton)
                    tdremovebutton.appendChild(removebutton)
                    div.appendChild(quantity)
                    div.appendChild(tdaddbutton)
                    tdaddbutton.appendChild(addbutton)
                    div.appendChild(tddeletebutton)
                    tddeletebutton.appendChild(deletebutton)
                    */
                    
                    products.appendChild(div)

                    //Remove Cart Empty Message
                    if (products.hasChildNodes()) {
                        const cartempty = document.getElementById('cartempty')
                        cartempty.style.display = 'none';
                    }

                    total += productdata['price'] * value

                    if (i == localStorage.length-1) {
                        //Total
                        const carttotal = document.getElementById('cartitemtotal')
                        carttotal.innerHTML = `Subtotal: $${total}`
                    }
                }
            }
        }

        return
    })
    .catch(console.error)
}

/*
function additemtocartfunction(x) {
    if (!x.target) return
    const productdata = allproductdata.find((y) => y['name'] == x.target.id)

    var quantity = parseFloat(localStorage.getItem(productdata['name']))
    var notifmessage = 'You have added an item to cart!'
    if (!quantity) {
        quantity = 1
    }
    else {
        if (productdata['multi'] == true) {
            quantity += 1
        }
        else {
            notifmessage = 'You can only add 1 of this item!'
        }
    }
    localStorage.setItem(productdata['name'], quantity)

    console.log(productdata['name'], "/", quantity, "/", `Multi: ${productdata['multi']}`)
    
    const notificationbar = document.getElementById('notificationbar')
    const notification = document.createElement('div')
    notification.classList.add('notification')
    const p = document.createElement('p')
    p.innerHTML = notifmessage
    notification.appendChild(p)
    notificationbar.appendChild(notification)

    notification.style.display = 'block'
    notification.classList.add('notificationinanim')
    setTimeout(() => {
        notification.classList.remove('notificationinanim')
    }, 500)
    setTimeout(() => {
        notification.classList.add('notificationoutanim')
    }, 500+1000)
    setTimeout(() => {
        notification.classList.remove('notificationoutanim')
        notification.style.display = 'none'
        notification.remove()
    }, 500+1000+500)

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

    var notifmessage = 'You have removed an item from cart!'
    const notificationbar = document.getElementById('notificationbar')
    const notification = document.createElement('div')
    notification.classList.add('notification')
    const p = document.createElement('p')
    p.innerHTML = notifmessage
    notification.appendChild(p)
    notificationbar.appendChild(notification)

    notification.style.display = 'block'
    notification.classList.add('notificationinanim')
    setTimeout(() => {
        notification.classList.remove('notificationinanim')
    }, 500)
    setTimeout(() => {
        notification.classList.add('notificationoutanim')
    }, 500+1000)
    setTimeout(() => {
        notification.classList.remove('notificationoutanim')
        notification.style.display = 'none'
        notification.remove()
    }, 500+1000+500)

    reloadcart()
}

function deleteitemfromcartfunction(x) {
    if (!x.target) return
    const productdata = allproductdata.find((y) => y['name'] == x.target.id)

    localStorage.removeItem(productdata['name'])

    console.log(productdata['name'], "/", '0')

    var notifmessage = 'You have deleted an item from cart!'
    const notificationbar = document.getElementById('notificationbar')
    const notification = document.createElement('div')
    notification.classList.add('notification')
    const p = document.createElement('p')
    p.innerHTML = notifmessage
    notification.appendChild(p)
    notificationbar.appendChild(notification)

    notification.style.display = 'block'
    notification.classList.add('notificationinanim')
    setTimeout(() => {
        notification.classList.remove('notificationinanim')
    }, 500)
    setTimeout(() => {
        notification.classList.add('notificationoutanim')
    }, 500+1000)
    setTimeout(() => {
        notification.classList.remove('notificationoutanim')
        notification.style.display = 'none'
        notification.remove()
    }, 500+1000+500)

    reloadcart()
}
*/