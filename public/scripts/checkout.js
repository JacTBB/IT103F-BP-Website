//Initialise
reloadcheckoutcart()

//Functions
function reloadcheckoutcart() {
    getproductdata()
    .then(() => {
        var total = 0

        const products = document.getElementById('products')
        while (products.hasChildNodes()) {
            products.removeChild(products.firstChild);
        }

        //Header
        const trheader = document.createElement('tr')
        const thheader = document.createElement('th')
        thheader.innerHTML = 'Your Shopping Cart'
        thheader.colSpan = 6
        trheader.appendChild(thheader)
        products.appendChild(trheader)

        //Cart Empty
        const trempty = document.createElement('tr')
        const tdempty = document.createElement('td')
        tdempty.innerHTML = 'Your shopping cart is empty!'
        tdempty.style.textAlign = 'center'
        tdempty.colSpan = 6
        trempty.appendChild(tdempty)
        products.appendChild(trempty)

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
                //Hide Empty Shopping Cart Messsage
                trempty.style.display = 'none'

                makeproductcard(allproductdata.find((y) => y['name'] == key))
                
                function makeproductcard(productdata) {
                    //Product 
                    const tr = document.createElement('tr')
                    const tdimage = document.createElement('td')
                    const image = document.createElement('img')
                    const productname = document.createElement('td')
                    const price = document.createElement('td')
                    const quantity = document.createElement('td')
                    const tdaddbutton = document.createElement('td')
                    const tdremovebutton = document.createElement('td')
                    const tddeletebutton = document.createElement('td')
                    const addbutton = document.createElement('button')
                    const removebutton = document.createElement('button')
                    const deletebutton = document.createElement('button')
                    const faremove = document.createElement('i')

                    tr.classList = 'productcard'
                    image.classList = 'checkoutcartimage'
                    image.src = productdata['image']
                    productname.innerHTML = `${productdata['name']}`
                    price.classList = 'price'
                    price.innerHTML = `$${productdata['price']}`
                    quantity.classList = 'quantity'
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
                    deletebutton.classList.add('deleteitembutton')
                    deletebutton.id = productdata['name']
                    deletebutton.type = 'button'
                    deletebutton.addEventListener('click', deleteitemfromcartfunction)
                    
                    faremove.classList.add('fa')
                    faremove.classList.add('fa-remove')
                    faremove.id = productdata['name']

                    tr.appendChild(tdimage)
                    tdimage.appendChild(image)
                    tr.appendChild(productname)
                    tr.appendChild(price)
                    tr.appendChild(quantity)
                    tr.appendChild(tddeletebutton)
                    tddeletebutton.appendChild(deletebutton)
                    
                    deletebutton.appendChild(faremove)
                    
                    products.appendChild(tr)

                    total += productdata['price'] * value

                    if (i == localStorage.length-1) {
                        //Total
                        const trtotal = document.createElement('tr')
                        const tdtotal = document.createElement('td')
                        tdtotal.innerHTML = `Total Amount: $${total}`
                        tdtotal.colSpan = 6
                        tdtotal.style.textAlign = 'right'
                        tdtotal.style.fontWeight = 'bold'
                        trtotal.appendChild(tdtotal)
                        products.appendChild(trtotal)
                    }
                }
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
    
    reloadcheckoutcart()
    setTimeout(() => { LoadContent() }, 10)

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

    reloadcheckoutcart()
    setTimeout(() => { LoadContent() }, 10)

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
}

function deleteitemfromcartfunction(x) {
    if (!x.target) return
    const productdata = allproductdata.find((y) => y['name'] == x.target.id)

    setTimeout(() => {
        localStorage.removeItem(productdata['name'])

        console.log(productdata['name'], "/", '0')

        reloadcheckoutcart()
        setTimeout(() => { LoadContent() }, 10)

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
    })
}