//Initialise
getproductdata()
.then(() => {
    for (productdata of allproductdata) {
        const decodedURI = decodeURI(window.location.pathname).split('/')   
        const id = decodedURI[decodedURI.length-1].slice(0,-5)
        if (productdata['name'] == id) {
            const div = document.createElement('div')
            const img = document.createElement('img')
            const leftspan = document.createElement('span')
            const rightdiv = document.createElement('div')
            const productname = document.createElement('h4')
            const desc = document.createElement('p')
            const price = document.createElement('p')
            const button = document.createElement('button')
        
            div.classList = 'productcard'
            div.id = productdata['name']
            productname.innerHTML = productdata['name']
            img.src = `../${productdata['image']}`
            img.alt = productdata['name']
            desc.innerHTML = productdata['desc']
            price.classList = 'price'
            price.innerHTML = `$${productdata['price']} `
            button.classList = 'productbutton'
            button.innerHTML = 'Add To Cart'
            button.id = productdata['name']
            button.type = 'button'
            button.addEventListener('click', addtocartfunction)

            div.appendChild(leftspan)
            leftspan.appendChild(img)
            div.appendChild(rightdiv)
            rightdiv.appendChild(productname)
            rightdiv.appendChild(desc)
            rightdiv.appendChild(price)
            price.appendChild(button)
        
            document.getElementById('products').appendChild(div)
        }
    }
    
    document.getElementById('productcardplaceholder').remove()

    return
})
.catch(console.error)

//Functions
function addtocartfunction(x) {
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
}