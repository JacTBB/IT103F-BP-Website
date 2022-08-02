// V0.2 (Prototype)
console.log ("Gui Cheng's Script");


//Comment Model
let commentInfo;
const savedComments = JSON.parse(localStorage.getItem('Comments'));
if (Array.isArray(savedComments)){
  commentInfo = savedComments
}

else {
  commentInfo = [
    {Username: "Johnny Smith",
     ProfilePic: "Default Picture URL",
     DatePost: 1/1/22,
     Comment: "",
    }]
}

//Posts a comment
function createComment(usertxt, pfpURL, comtxt){
  const id = '' + new Date().getTime();
  commentInfo.push({
    Username: usertxt,
    ProfilePic: pfpURL,
    DatePost: date,
    Comment: comtxt,
    id: id
  },);

  saveComments();
}

//Deletes a Comment
function removeComment(IDtoDelete){
  arraystr = arraystr.filter( (comment) => {
   if (comment.id === IDtoDelete){
     return false;
   }
   else {
     return true;
   }
 }); 

  saveComments();
 }

 //Saves comment to CommentInfo
 function saveComments(){
  localStorage.setItem('Comments', JSON.stringify(commentInfo));
 }

 //View 
 function renderComSec(){
  document.getElementById('').innerHTML = '';
  commentInfo.forEach( (renderComment) => {

  });
}
//Comment Controllers
function addComment() {
  const comInputTxt = document.getElementById();
  const comtxt = comInputTxt.value;
  
  const datePicker = document.getElementById();
  const date = datePicker.value;
  createTask(comtxt, date);
  renderComSec();
}
function deleteComment(event) {
  const deleteComButton = event.target;
  const IDtoDelete = deleteComButton.id;
  removeComment(IDtoDelete);
  renderComSec();
}




// News Model
let newsSelector = [
  {News_Name: 'News1', 
   IMG: "background-image: url('');",
   Link: "news-posts/articles/",
   Date: '1 July',
   Heading: 'e',
  },

  {News_Name: 'News2',
   IMG: "background-image: url('');",
   Link: "news-posts/articles/",
   Date: '1 July',
   Heading: 'e',
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

renderNewsDefault()




//View
let newsIndex = 3

function renderNewsDefault(){
  
  leftCardimg.style = "background-image: url('')"
  leftLink.href = "news-posts/articles/"
  leftDate.innerHTML = "1 May"
  leftHeading.innerHTML = "1M"

  
  midCardimg.style = "background-image: url('https://free3d.com/imgd/l95485-bugatti-chiron-2017-model-31847.jpg')"
  midLink.href = "news-posts/articles/"
  midDate.innerHTML = "2 June"
  midHeading.innerHTML = "JUNE 2022 PROMOTIONS"

  
  rightCardimg.style = "background-image: url('')"
  rightLink.href = "news-posts/articles/"
  rightDate.innerHTML = "3 July"
  rightHeading.innerHTML = "1J"
}


function renderNewsTemp(leftCardimg, midCardimg, rightCardimg){

}

//Controllers
function newsScrollLeft() {
  newsIndex -= 1
   switch(true){
    case newsIndex === 2: 
      leftCardimg.style = "background-image: url('https://cdn.realsport101.com/images/ncavvykf/gfinityesports/b843c4ae15c10f098c70e8d23f623303a593a4f9-1280x720.jpg?w=686&h=386&auto=format&dpr=2')"
      leftLink.href = "news-posts/articles/"
      leftDate.innerHTML = "1 April"
      leftHeading.innerHTML = "APRIL 2022"

      midCardimg.style = "background-image: url('')"
      midLink.href = "news-posts/articles/"
      midDate.innerHTML = "1 May"
      midHeading.innerHTML = "1M"

      rightCardimg.style = "background-image: url('https://free3d.com/imgd/l95485-bugatti-chiron-2017-model-31847.jpg')"
      rightLink.href = "news-posts/articles/"
      rightDate.innerHTML = "2 June"
      rightHeading.innerHTML = "JUNE 2022 PROMOTIONS"
    return true

    case newsIndex === 1:
    
      leftCardimg.style = "background-image: url('')"
      leftLink.href = "news-posts/articles/"
      leftDate.innerHTML = "31 Feb"
      leftHeading.innerHTML = "TEMPLATE MALD"


      midCardimg.style = "background-image: url('https://cdn.realsport101.com/images/ncavvykf/gfinityesports/b843c4ae15c10f098c70e8d23f623303a593a4f9-1280x720.jpg?w=686&h=386&auto=format&dpr=2')"
      midLink.href = "news-posts/articles/"
      midDate.innerHTML = "1 April"
      midHeading.innerHTML = "APRIL 2022"


      rightCardimg.style = "background-image: url('')"
      rightLink.href = "news-posts/articles/"
      rightDate.innerHTML = "1 May"
      rightHeading.innerHTML = "1M"
    return true

    default:
      newsIndex = 3
      renderNewsDefault();
      console.log('End of Left News')
    return false
   }
  }

function newsScrollRight(){
  newsIndex += 1
   switch(true){
    case newsIndex === 4:
      leftCardimg.style = "background-image: url('https://free3d.com/imgd/l95485-bugatti-chiron-2017-model-31847.jpg')"
      leftLink.href = "news-posts/articles/"
      leftDate.innerHTML = "2 June"
      leftHeading.innerHTML = "JUNE 2022 PROMOTIONS"

      midCardimg.style = "background-image: url('')"
      midLink.href = "news-posts/articles/"
      midDate.innerHTML = "3 July"
      midHeading.innerHTML = "1J"

      rightCardimg.style = "background-image: url('https://cdn.realsport101.com/images/ncavvykf/gfinityesports/b843c4ae15c10f098c70e8d23f623303a593a4f9-1280x720.jpg?w=686&h=386&auto=format&dpr=2')"
      rightLink.href = "news-posts/articles/"
      rightDate.innerHTML = "31 Feb"
      rightHeading.innerHTML = "TEMPLATE YES"
    return true

    case newsIndex === 5:
    
      leftCardimg.style = "background-image: url('')"
      leftLink.href = "news-posts/articles/"
      leftDate.innerHTML = "3 July"
      leftHeading.innerHTML = "1J"

      midCardimg.style = "background-image: url('https://cdn.realsport101.com/images/ncavvykf/gfinityesports/b843c4ae15c10f098c70e8d23f623303a593a4f9-1280x720.jpg?w=686&h=386&auto=format&dpr=2')"
      midLink.href = "news-posts/articles/"
      midDate.innerHTML = "31 Feb"
      midHeading.innerHTML = "TEMPLATE YES"

      rightCardimg.style = "background-image: url('')"
      rightLink.href = "news-posts/articles/"
      rightDate.innerHTML = ""
      rightHeading.innerHTML = ""
    return true 

    default: 
      newsIndex = 3
      renderNewsDefault();
      console.log('End of Right news')
    return false 
   }
 }



function alertJS(){
  alert ('JavaScript Enabled.');
}

function sliderBanner(){
}   

function productsSlider(){
}