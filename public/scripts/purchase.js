//Initialise
var allproductdata = null
var boughtproducts = []
var successcounter = 0

//Functions
async function cart() {
    await fetch('scripts/productdata.json')
    .then(response => response.json())
    .then(data => {
        allproductdata = data['data']
        var total = 0

        //ProductInfo
        const LocalStorageLength = localStorage.length
        for (var i=0; i < LocalStorageLength; i++) {
            const key = localStorage.key(i)
            const value = localStorage.getItem(key)
            if (isNaN(value)) {
                if (key != 'userdata') {
                    setTimeout(() => {
                        localStorage.removeItem(key)
                    }, 1000)
                }
            }
            else {
                productdata = allproductdata.find((y) => y['name'] == key)
                
                setTimeout(() => {
                    total += productdata['price'] * value

                    boughtproducts.push(productdata)

                    console.log(key)
                    localStorage.removeItem(key)
                }, 1)
            }
        }

        return
    })
    .catch(console.error)
}

async function purchase() {
    await cart()

    setTimeout(() => {
        const name = document.getElementById('CardName').value
        const email = document.getElementById('PayEmail').value
        const cardnumber = document.getElementById('CardNo.').value
        const cardexpiry = document.getElementById('CardEXP').value
        const cardCVC = document.getElementById('CardSecCode').value
        console.warn("Purchase attempt:", name, email, cardnumber, cardexpiry, cardCVC)


        console.log(boughtproducts)
        for (const product of boughtproducts) {
            const Headers = {
                'Content-Type': 'application/json'
            }
            const Body = {
                'name': name,
                'email': email,
                'data': [
                    {
                        'link': product['link'],
                        'name': product['name']
                    }
                ]
            }
            fetch('https://hook.us1.make.com/nm6jbdirz9dxypn4qvet67po8gq1jgm4', {method: 'POST', headers: Headers, body: JSON.stringify(Body)})
            .then(() => {
                successcounter += 1
                if (successcounter == boughtproducts.length) {
                    console.log('All Products Bought.')
                    window.location.href = 'checkout-success.html'
                }
            })
            .catch(console.error)
        }

        if (boughtproducts.length == 0) {
            document.getElementById('purchaseoverlay').style.display = 'none'
            alert("Your shopping cart is empty!")
        }
    }, 1000)
}

function submitfunction() {
    document.getElementById('purchaseoverlay').style.display = 'block'

    purchase()
    return false
}