// Niche Javascript functions catering to a specific post page.


//Comment Model
let commentInfo;
const savedComments = JSON.parse(localStorage.getItem('JulyPromotion2022Comments'));
if (Array.isArray(savedComments)){
  commentInfo = savedComments
}

else {
  commentInfo = [
    {Username: "",
     ProfilePic: "../../images/profile-pictures/profile3.jpg",
     DatePost: `&#9679; 1 day ago`,
     Comment: "Sampletxt",
    }]
}

//Posts a comment
function createComment(name, profilepic, date, comtxt, onoff, likenum){
  const id = '' + new Date().getTime();
  commentInfo.push({
    Username: name,
    ProfilePic: profilepic,
    DatePost: date,
    Comment: comtxt,
    LikeActive: onoff,
    LikeNumber: likenum,
    id: id
  },);

  saveComments();
}

//Deletes a Comment
function removeComment(IDtoDelete){
  commentInfo = commentInfo.filter( (comment) => {
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
  localStorage.setItem('JulyPromotion2022Comments', JSON.stringify(commentInfo));
 }

 //View 
 function renderComSec(){
 document.getElementById('topic-discussion').innerHTML = '';
  commentInfo.forEach( (renderComment) => {

    const AUDOpinion = document.createElement('div')
    AUDOpinion.className = "AUD-opinion"
    AUDOpinion.id = renderComment.id 

    //Profile Picture
    const profilePAUD = document.createElement('img')
    profilePAUD.className = "PPAUD"
    profilePAUD.src = renderComment.ProfilePic
    AUDOpinion.appendChild(profilePAUD)


    //User detail container
    const AUDDetails = document.createElement('div')
    AUDDetails.className = "AUD-details"
    AUDOpinion.appendChild(AUDDetails)

    //Username + Date container
    const AUDName = document.createElement('div')
    AUDName.className = "AUDName"
    AUDDetails.appendChild(AUDName)

    const userName = document.createElement('p')
    userName.className = "usernameStyle"
    userName.innerHTML = renderComment.Username
    AUDName.appendChild(userName)

    const datePost = document.createElement('p')
    datePost.className = "datepostStyle"
    datePost.innerHTML = renderComment.DatePost
    AUDName.appendChild(datePost)

    //User comment container
    const AUDComment = document.createElement('p')
    AUDComment.className = "commentStyle"
    AUDComment.id = renderComment.id
    AUDComment.textContent = renderComment.Comment
    AUDDetails.appendChild(AUDComment)

    //Reply user form controls
    const AUDControls = document.createElement('div')
    AUDControls.className = "AUDReplyControls"
    AUDDetails.appendChild(AUDControls)

    //Buttons
    const AUDLikeBtn = document.createElement('button')
    AUDLikeBtn.className = "LikeBtnStyle"
    AUDLikeBtn.id = renderComment.id + 1
    AUDLikeBtn.onclick = LikeUnavailable;
    AUDControls.appendChild(AUDLikeBtn)

    const AUDLikeimg = document.createElement('img')
    AUDLikeimg.className = "ThumbsIcon1"
    AUDLikeimg.src = "../../images/like-icon.png"
    AUDLikeBtn.appendChild(AUDLikeimg)

    //Like Number
    const AUDLikeCount = document.createElement('p')
    AUDLikeCount.className = "likenumStyle"
    AUDLikeCount.id = renderComment.id + 2

    if (renderComment.LikeNumber === undefined){
      renderComment.LikeNumber = 0
      AUDLikeCount.innerHTML = renderComment.LikeNumber
    }

    else{
      AUDLikeCount.innerHTML = renderComment.LikeNumber
    }
    AUDControls.appendChild(AUDLikeCount)
    
    //Dislike Button

    const AUDDislikeBtn = document.createElement('button')
    AUDDislikeBtn.className = "DislikeBtnStyle"
    AUDDislikeBtn.onclick = LikeUnavailable;
    AUDControls.appendChild(AUDDislikeBtn)

    const AUDDislikeimg = document.createElement('img')
    AUDDislikeimg.className = "ThumbsIcon2"
    AUDDislikeimg.src = "../../images/dislike-icon.png"
    AUDDislikeBtn.appendChild(AUDDislikeimg)

    if (renderComment.Username !== "Johnny Smith"){
    const AUDDeleteBtn = document.createElement('button')
    AUDDeleteBtn.className = "deleteCommentStyle"
    AUDDeleteBtn.textContent = "Remove"
    AUDDeleteBtn.id = renderComment.id;
    AUDDeleteBtn.onclick = deleteComment;
    AUDDeleteBtn.title = "Delete this comment"
    AUDControls.appendChild(AUDDeleteBtn)}

    else {}
    document.getElementById('topic-discussion').appendChild(AUDOpinion)
  });
}


//Comment Controllers

function addComment() {
const commentBtn = document.getElementById('commentBtn')
commentBtn.disabled = true;
commentBtn.className = "comBtnInactive"


const usernameEXP = document.getElementById('expFTName');
let UNInput = usernameEXP.value
  switch (true){
    case UNInput === '':
      UNInput = "Anonymous User"
    break;
  }
 
  let date1 = new Date();
  let dayofMonth = date1.getDate();
  let month = date1.getMonth() + 1
  let year = date1.getFullYear();

  switch (true){
    case month === 1:
       month = "January"
    break;
    case month === 2:
      month = "February"
    break;
    case month === 3:
      month = "March"
    break;
    case month === 4:
      month = "April"
    break;
    case month === 5:
      month = "May"
    break;
    case month === 6:
      month = "June"
    break;
    case month === 7:
      month = "July"
    break;
    case month === 8:
      month = "August"
    break;
    case month === 9:
      month = "September"
    break;
    case month === 10:
      month = "October"
    break;
    case month === 11:
      month = "November"
    break;
    case month === 12:
      month = "December"
    break;
  }

  let ppEXP = document.getElementById('expFTPP')
  if (ppEXP.value === ''){
    ppEXP.value = "../images/anonymous-sus.png"
  }
  else (
    console.log("PP Passed")
  )
  
  const comInputTxt = document.getElementById('ComInput');


  const date = `&#9679; ${dayofMonth} ${month} ${year}`
  const name = UNInput
  const profilepic = ppEXP.value; 
  const comtxt = comInputTxt.value;

  createComment(name, profilepic, date, comtxt);
  renderComSec();

  //Timeout Post Comment button
  setTimeout(() => {
    commentBtn.disabled = false;
    commentBtn.className = "comBtnActive"
  }
  , 2000)
}

function deleteComment(event) {
  const delCommentBtn = event.target;
  const IDtoDelete = delCommentBtn.id;
  removeComment(IDtoDelete);
  renderComSec();
}



//Like Button
function LikeUnavailable(){

  const notificationbar = document.getElementById('notificationbar')
  const notification = document.createElement('div')
  notification.classList.add('notification')
  const p = document.createElement('p')
  p.innerHTML = "You must sign in first before you like/dislike!"
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

  {News_Name: '',
  IMG: "background-image: url('../../../images/products/Sofa 3D Model.png')",
  Link: "news-posts/articles/",
  Date: 'M1',
  Heading: 'H3',
  },

  {News_Name: '',
  IMG: "background-image: url('../../../images/products/P250 3D Model.png')",
  Link: "news-posts/articles/",
  Date: 'M2',
  Heading: 'H4',
  },

  {News_Name: '',
  IMG: "background-image: url('../../../images/products/4 Axle Box Truck 3D Model.png')",
  Link: "news-posts/articles/",
  Date: 'M3',
  Heading: 'H5',
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

 renderComSec();
 renderNews(newsSelector[2], newsSelector[3], newsSelector[4]);



function alertJS(){
  alert ('JavaScript Enabled.');
}

function sliderBanner(){
}   

function productsSlider(){
}
