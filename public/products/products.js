const data = {
    'product1': {
        'productname': 'Product 1',
        'productimage': 'https://gameworldobserver.com/wp-content/uploads/2020/02/roblox.jpg',
        'about': 'This is a product.',
        'price': '$6.00'
    },
    'product2': {
        'productname': 'Product 2',
        'productimage': 'https://gameworldobserver.com/wp-content/uploads/2020/02/roblox.jpg',
        'about': 'This is a product.',
        'price': '$6.00'
    },
    'product3': {
        'productname': 'Product 3',
        'productimage': 'https://gameworldobserver.com/wp-content/uploads/2020/02/roblox.jpg',
        'about': 'This is a product.',
        'price': '$6.00'
    }
}

var productnumber = window.document.URL
const origin = window.location.origin

const originlength = window.location.origin.length
productnumber = productnumber.slice(originlength + 17, originlength + 17 + 8)

console.log(productnumber)

const productdata = data[productnumber]

document.getElementById('title').innerHTML = productdata['productname']
document.getElementById('productname').innerHTML = productdata['productname']
document.getElementById('productimage').src = productdata['productimage']
document.getElementById('about').innerHTML = productdata['about']
document.getElementById('price').innerHTML = 'Price: ' + productdata['price']