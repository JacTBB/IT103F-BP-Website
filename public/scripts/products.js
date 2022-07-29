//Initialise
getproductdata()
.then(() => {
    for (productdata of allproductdata) {
        const div = document.createElement('div')
        const img = document.createElement('img')
        const productname = document.createElement('h4')
        const desc = document.createElement('p')
        const price = document.createElement('p')
        const button = document.createElement('button')

        div.classList = 'productcard'
        div.id = productdata['name']
        productname.innerHTML = productdata['name']
        img.src = productdata['image']
        img.alt = productdata['name']
        img.id = `URL${productdata['name']}`
        img.addEventListener('click', productpagefunction)
        desc.innerHTML = productdata['brief']
        price.classList = 'price'
        price.innerHTML = `$${productdata['price']} `
        button.classList = 'productbutton'
        button.innerHTML = 'Add To Cart'
        button.id = productdata['name']
        button.type = 'button'
        button.addEventListener('click', addtocartfunction)

        div.appendChild(img)
        div.appendChild(productname)
        div.appendChild(desc)
        div.appendChild(price)
        price.appendChild(button)

        document.getElementById('products').appendChild(div)
    }
    
    document.getElementById('productcardplaceholder').remove()

    return
})
.catch(console.error)

//Functions
function productpagefunction(x) {
    if (!x.target) return
    const productdata = allproductdata.find((y) => `URL${y['name']}` == x.target.id)

    window.open(`products/${productdata['name']}.html`, '_self')
}

function addtocartfunction(x) {
    if (!x.target) return
    const productdata = allproductdata.find((y) => y['name'] == x.target.id)

    var quantity = parseFloat(localStorage.getItem(productdata['name']))
    var notifmessage = 'You have added an item to cart!'
    if (localStorage.length < 6) {
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
    }
    else {
        notifmessage = 'Your shopping cart is full!'
    }

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