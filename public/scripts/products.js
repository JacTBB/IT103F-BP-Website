//Configuration
const data = [
    {
        'name': 'Product 1',
        'image': 'https://cdn.discordapp.com/attachments/913619592067293206/959037469007941712/Overhead_V1_300x200.png',
        'desc': "This is a product description. This is a Blueprint Studios' product, a 3D CAD Model.",
        'price': '$6.00'
    },
    {
        'name': 'Product 2',
        'image': 'https://cdn.discordapp.com/attachments/913619592067293206/959037469007941712/Overhead_V1_300x200.png',
        'desc': "This is a product description. This is a Blueprint Studios' product, a 3D CAD Model.",
        'price': '$6.00'
    },
    {
        'name': 'Product 3',
        'image': 'https://cdn.discordapp.com/attachments/913619592067293206/959037469007941712/Overhead_V1_300x200.png',
        'desc': "This is a product description. This is a Blueprint Studios' product, a 3D CAD Model.",
        'price': '$6.00'
    },
    {
        'name': 'Product 4',
        'image': 'https://cdn.discordapp.com/attachments/913619592067293206/959037469007941712/Overhead_V1_300x200.png',
        'desc': "This is a product description. This is a Blueprint Studios' product, a 3D CAD Model.",
        'price': '$6.00'
    },
    {
        'name': 'Product 5',
        'image': 'https://cdn.discordapp.com/attachments/913619592067293206/959037469007941712/Overhead_V1_300x200.png',
        'desc': "This is a product description. This is a Blueprint Studios' product, a 3D CAD Model.",
        'price': '$6.00'
    }
]

//Initialise
for (productdata of data) {
    const div = document.createElement('div')
    const img = document.createElement('img')
    const productname = document.createElement('h4')
    const desc = document.createElement('p')
    const price = document.createElement('p')
    const button = document.createElement('button')

    div.classList = 'productcard'
    productname.innerHTML = productdata['name']
    img.src = productdata['image']
    desc.innerHTML = productdata['desc']
    price.classList = 'price'
    price.innerHTML = `${productdata['price']}\n`
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

//Temp
//localStorage.clear()

//Functions
function addtocartfunction(x) {
    if (!x.target) return
    const productdata = data.find((y) => y['name'] == x.target.id)

    var quantity = parseFloat(localStorage.getItem(productdata['name']))
    if (!quantity) quantity = 0
    quantity += 1
    localStorage.setItem(productdata['name'], quantity)

    console.log(productdata['name'], "/", quantity)
}

//Print localStorage
console.log('localStorage:')
for (var i=0; i < localStorage.length; i++) {
    const key = localStorage.key(i)
    console.log(key, localStorage.getItem(key))
}
console.log('\n')