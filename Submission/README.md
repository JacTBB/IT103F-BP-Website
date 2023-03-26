# Blueprint Studios Website
## IT103F Web Publishing Project
___

## Main Webpages Overview (16 pages)
| Webpage | Creator |
| ------- | ------- |
| index.html (Home) | Seng Hong |
| products.html | Jackie |
| services.html | Jackie |
| services-success.html | Jackie |
| about-us.html | Zhe Ming |
| careers.html | Zhe Ming |
| jobapplication.html | Zhe Ming |
| application-success.html | Zhe Ming |
| contact-us.html | Ameer |
| faq.html | Ameer |
| checkout.html | Gui Cheng |
| checkout-success.html | Gui Cheng |
| news.html | Gui Cheng |
| signin.html | Jackie |
| signup.html | Jackie |
| dashboard.html | Jackie |

## Subsidiary Webpage Folders (31 pages)
| Webpage Folder | Creator |
| -------------- | ------- |
| products (24 pages) | Jackie |
| news-posts (7 pages) | Gui Cheng |

## Servers
| Type | Language | Creator |
| ---- | -------- | ------- |
| Web Server | Firebase Hosting | Jackie |
| API Server | Javascript | Jackie |
| Database | PostgreSQL | Jackie |
| Email API Server | Make Workflow | Jackie |
___

## Notes
- Minimum Screen Width: 365px
- Recomended Browsers: Chrome, Microsoft Edge
- Please have a stable internet connection.
___

## Emailing System
At the checkout page, upon click purchase and validation success, an email is sent to users containing their product bought and the download file.

This works by sending a HTTP POST request to our back-end email server for each product in the cart that they purchase.

The back-end email server is hosted on make. https://www.make.com/
We use their scenario workflows feature.
The workflow has a webhook listener, and upon getting a HTTP POST, it uses the Zoho Mail API to send an email to the user along with the details.

![Scenario Workflow Image](https://i.gyazo.com/2ac2421fff0d9888cf4b424fc01cf019.png)

We use Zoho Mail as our emailing service. With the domain being @blueprint-studios.net
Users should expect the email from noreply@blueprint-studios.net within 10 minutes of purchase.
___

## Purchases Storing / Sign Up / Sign In / Dashboard
Upon purchasing a product on the checkout page, a HTTP POST request is made to our back-end server. With email and product details for the purchase. The data is then formatted and stored onto our database.

Sign Up is similar where it also sends a HTTP POST request to the back-end server with the inputted details and the server formattes the data and stores it into the database.

Sign In also uses a HTTP POST request with the inputted details to the back-end server. It checks the database for the email and see if the passwords match.

Dashboard sends a HTTP POST request to the server with the sign in credentials to get all previous purchases made by the email. Then displays it on the dashboard.
___

## Database
The database uses PostgreSQL, a squential query database language.
Both the database and back-end server is hosted on Railway, https://railway.app/.
The database contains 2 tables.

userdata table, it has 4 columns.
- id - To make each data entry unique
- name - Username
- email - Email used
- password - Password needed to sign in

![userdata Image](https://i.gyazo.com/6328d217ea665b649d296433545a18e5.png)

purchases table, it has 3 columns.
- id - To make each data entry unique
- email - Email used
- product - The product they purchased

![purchases Image](https://i.gyazo.com/e4c16097673edfc5af8bfe72e649914b.png)
___

## Credentials
### Zoho Mail:
https://mail.zoho.com/zm/#mail/folder/inbox

Email: developer@blueprint-studios.net
Password: D3V@blueprint

### Railway:
https://railway.app/project/f01b612d-f660-4702-b548-1203dd511a10/

Email: developer@blueprint-studios.net
Note: You may have to open the verification link in Zoho Mail.