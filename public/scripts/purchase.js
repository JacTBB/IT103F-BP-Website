//Initialise
var allproductdata = null
var boughtproducts = []

//Functions
async function cart() {
    await fetch('scripts/productdata.json')
    .then(response => response.json())
    .then(data => {
        allproductdata = data['data']
        var total = 0

        //ProductInfo
        for (var i=0; i < localStorage.length; i++) {
            const key = localStorage.key(i)
            const value = localStorage.getItem(key)
            if (isNaN(value)) {
                setTimeout(() => {
                    localStorage.removeItem(key)
                }, 1000)
            }
            else {
                productdata = allproductdata.find((y) => y['name'] == key)
                total += productdata['price'] * value

                boughtproducts.push(productdata)

                localStorage.removeItem(key)
            }
        }

        return
    })
    .catch(console.error)
}

async function purchase() {
    await cart()

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
        .catch(console.error)
    }
}