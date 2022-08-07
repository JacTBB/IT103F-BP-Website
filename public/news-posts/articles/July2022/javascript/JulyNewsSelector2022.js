// News Model
let newsSelector = [
  {News_Name: '', 
   IMG: "background-image: url('');",
   Link: "news-posts/articles/",
   Date: "",
   Heading: "",
  },

  {News_Name: '',
   IMG: "background-image: url('')",
   Link: "news-posts/articles/",
   Date: '',
   Heading: '',
  },

  {News_Name: 'May 2022 Promotion',
  IMG: "background-image: url('../../../images/products/Keyboard Logitech 3D Model.png')",
  Link: "../../articles/May2022/MayPromotion2022.html",
  Date: '1 May',
  Heading: 'MAY 2022 PROMOTION',
  },

  {News_Name: 'June 2022 Promotion',
  IMG: "background-image: url('../../../images/products/Learjet - 25 AtlasJet 3D Model.png')",
  Link: "../../articles/June2022/JunePromotion2022.html",
  Date: '1 June',
  Heading: 'JUNE 2022 PROMOTION',
  },

  {News_Name: '',
  IMG: "background-image: url('')",
  Link: "",
  Date: '',
  Heading: '',
  },

  {News_Name: '',
  IMG: "background-image: url('../../../images/products/Bugatti Chiron 2017 Sports Car 3D Model.jpg')",
  Link: "news-posts/articles/",
  Date: '',
  Heading: '',
  },

  {News_Name: '',
  IMG: "background-image: url('')",
  Link: "news-posts/articles/",
  Date: '',
  Heading: '',
  },
]

//News Containers
const leftCardimg = document.getElementById('newsLeft')
  const leftLink = document.getElementById('hyperLeft') 
  const leftDate = document.getElementById('dateLeft')
  const leftHeading = document.getElementById('heading-left') 

const midCardimg = document.getElementById('newsMid')
  const midLink = document.getElementById('hyperMid')
  const midDate = document.getElementById('dateMid')
  const midHeading = document.getElementById('heading-mid') 

const rightCardimg = document.getElementById('newsRight')
  const rightLink = document.getElementById('hyperRight')
  const rightDate = document.getElementById('dateRight')
  const rightHeading = document.getElementById('heading-right')


//View
let newsIndex = 3

function renderNews(leftNews, midNews, rightNews){

  leftCardimg.style = leftNews.IMG
  leftLink.href = leftNews.Link
  leftDate.textContent = leftNews.Date
  leftHeading.textContent = leftNews.Heading

  midCardimg.style = midNews.IMG
  midLink.href = midNews.Link
  midDate.textContent = midNews.Date
  midHeading.textContent = midNews.Heading

  rightCardimg.style = rightNews.IMG
  rightLink.href = rightNews.Link
  rightDate.textContent = rightNews.Date
  rightHeading.textContent = rightNews.Heading
}

//Controllers
function newsScrollLeft() {
  newsIndex -= 1
   switch(true){
    case newsIndex === 2: 
      renderNews(newsSelector[1], newsSelector[2], newsSelector[3]);                
    return true

    case newsIndex === 1:
      renderNews(newsSelector[0], newsSelector[1], newsSelector[2]);
    return true

    default:
      newsIndex = 3
        renderNews(newsSelector[2], newsSelector[3], newsSelector[4]);
      console.log('End of Left News')
    return false
   }
  }

function newsScrollRight(){
  newsIndex += 1
   switch(true){
    case newsIndex === 4: 
      renderNews(newsSelector[3], newsSelector[4], newsSelector[5]);             
    return true

    case newsIndex === 5:        
     renderNews(newsSelector[4], newsSelector[5], newsSelector[6]);             
    return true 

    default: 
      newsIndex = 3
       renderNews(newsSelector[2], newsSelector[3], newsSelector[4]);
      console.log('End of Right news')
    return false 
   }
 }

 renderNews(newsSelector[2], newsSelector[3], newsSelector[4]);