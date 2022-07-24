// V0.1 (Prototype)
console.log ("Gui Cheng's Script");

let newsSelector = [
  {News_Name: 'News1', 
   Desciption: '1 July',
   URL: 'e'
  },

  {News_Name: 'News2',
   Date: '2 July',
   URL: 'a',
  },
]

function sliderBanner(){
}   

function productsSlider(){
}

let newsIndex = 3

function renderNewsDefault(){
  const leftCardimg = document.getElementById('newsLeft')
  leftCardimg.style = "background-image: url('https://free3d.com/imgd/l95485-bugatti-chiron-2017-model-31847.jpg')"
  document.getElementById('hyperLeft').href = "news-posts/articles/"
  document.getElementById('dateLeft').innerHTML = "1 May"
  document.getElementById('heading-left').innerHTML = "MAY 2022 PROMOTIONS"

  const midCardimg = document.getElementById('newsMid')
  midCardimg.style = "background-image: url('https://free3d.com/imgd/l95485-bugatti-chiron-2017-model-31847.jpg')"
  document.getElementById('hyperMid').href = "news-posts/articles/"
  document.getElementById('dateMid').innerHTML = "2 June"
  document.getElementById('heading-mid').innerHTML = "JUNE 2022 PROMOTIONS"

  const rightCardimg = document.getElementById('newsRight')
  rightCardimg.style = "background-image: url('https://free3d.com/imgd/l95485-bugatti-chiron-2017-model-31847.jpg')"
  document.getElementById('hyperRight').href = "news-posts/articles/"
  document.getElementById('dateRight').innerHTML = "3 July"
  document.getElementById('heading-right').innerHTML = "JULY 2022 PROMOTIONS"
}

function newsScrollLeft() {
  newsIndex = newsIndex - 1
   if (newsIndex === 2){
    const leftCardimg = document.getElementById('newsLeft')
    leftCardimg.style = "background-image: url('https://cdn.realsport101.com/images/ncavvykf/gfinityesports/b843c4ae15c10f098c70e8d23f623303a593a4f9-1280x720.jpg?w=686&h=386&auto=format&dpr=2')"
    document.getElementById('hyperLeft').href = "news-posts/articles/"
    document.getElementById('dateLeft').innerHTML = "1 April"
    document.getElementById('heading-left').innerHTML = "APRIL 2022 PROMOTIONS"

    const midCardimg = document.getElementById('newsMid')
    midCardimg.style = "background-image: url('https://free3d.com/imgd/l95485-bugatti-chiron-2017-model-31847.jpg')"
    document.getElementById('hyperMid').href = "news-posts/articles/"
    document.getElementById('dateMid').innerHTML = "2 June"
    document.getElementById('heading-mid').innerHTML = "JUNE 2022 PROMOTIONS"

    const rightCardimg = document.getElementById('newsRight')
    rightCardimg.style = "background-image: url('https://free3d.com/imgd/l95485-bugatti-chiron-2017-model-31847.jpg')"
    document.getElementById('hyperRight').href = "news-posts/articles/"
    document.getElementById('dateRight').innerHTML = "3 July"
    document.getElementById('heading-right').innerHTML = "JULY 2022 PROMOTIONS"
    return true
   }

   else if (newsIndex === 1){
    const leftCardimg = document.getElementById('newsLeft')
    leftCardimg.style = "background-image: url('../../images/about-us/guicheng.jpeg')"
    document.getElementById('hyperLeft').href = "news-posts/articles/"
    document.getElementById('dateLeft').innerHTML = "31 Feb"
    document.getElementById('heading-left').innerHTML = "TEMPLATE MALD"

    const midCardimg = document.getElementById('newsMid')
    midCardimg.style = "background-image: url('https://cdn.realsport101.com/images/ncavvykf/gfinityesports/b843c4ae15c10f098c70e8d23f623303a593a4f9-1280x720.jpg?w=686&h=386&auto=format&dpr=2')"
    document.getElementById('hyperMid').href = "news-posts/articles/"
    document.getElementById('dateMid').innerHTML = "1 April"
    document.getElementById('heading-mid').innerHTML = "APRIL 2022 PROMOTIONS"

    const rightCardimg = document.getElementById('newsRight')
    rightCardimg.style = "background-image: url('https://free3d.com/imgd/l95485-bugatti-chiron-2017-model-31847.jpg')"
    document.getElementById('hyperRight').href = "news-posts/articles/"
    document.getElementById('dateRight').innerHTML = "2 June"
    document.getElementById('heading-right').innerHTML = "JUNE 2022 PROMOTIONS"
    return true
   }

   else {
    newsIndex = 3
    renderNewsDefault();
    console.log('End of Left News')
    return false
   }
  }

function newsScrollRight(){
  newsIndex = newsIndex + 1
   if (newsIndex === 4 ){
    const leftCardimg = document.getElementById('newsLeft')
    leftCardimg.style = "background-image: url('https://free3d.com/imgd/l95485-bugatti-chiron-2017-model-31847.jpg')"
    document.getElementById('hyperLeft').href = "news-posts/articles/"
    document.getElementById('dateLeft').innerHTML = "2 June"
    document.getElementById('heading-left').innerHTML = "ANOTHER ANOTHER TEMPLATE"

    const midCardimg = document.getElementById('newsMid')
    midCardimg.style = "background-image: url('../../images/about-us/guicheng.jpeg')"
    document.getElementById('hyperMid').href = "news-posts/articles/"
    document.getElementById('dateMid').innerHTML = "3 July"
    document.getElementById('heading-mid').innerHTML = "ANOTHER TEMPLATE"

    const rightCardimg = document.getElementById('newsRight')
    rightCardimg.style = "background-image: url('https://cdn.realsport101.com/images/ncavvykf/gfinityesports/b843c4ae15c10f098c70e8d23f623303a593a4f9-1280x720.jpg?w=686&h=386&auto=format&dpr=2')"
    document.getElementById('hyperRight').href = "news-posts/articles/"
    document.getElementById('dateRight').innerHTML = "31 Feb"
    document.getElementById('heading-right').innerHTML = "TEMPLATE YES"
    return true
   }

   else if (newsIndex === 5){
    const leftCardimg = document.getElementById('newsLeft')
    leftCardimg.style = "background-image: url('')"
    document.getElementById('hyperLeft').href = "news-posts/articles/"
    document.getElementById('dateLeft').innerHTML = ""
    document.getElementById('heading-left').innerHTML = ""

    const midCardimg = document.getElementById('newsMid')
    midCardimg.style = "background-image: url('')"
    document.getElementById('hyperMid').href = "news-posts/articles/"
    document.getElementById('dateMid').innerHTML = ""
    document.getElementById('heading-mid').innerHTML = ""

    const rightCardimg = document.getElementById('newsRight')
    rightCardimg.style = "background-image: url('')"
    document.getElementById('hyperRight').href = "news-posts/articles/"
    document.getElementById('dateRight').innerHTML = ""
    document.getElementById('heading-right').innerHTML = ""
    return true 
   }

   else {
    newsIndex = 3
    renderNewsDefault();
    console.log('End of Right news')
    return false 
   }
 }

function starRating(){
}

function alertJS(){
  alert ('JavaScript Enabled.');
}