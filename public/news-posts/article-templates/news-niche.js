// Niche Javascript functions catering to a specific post page.

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
     ProfilePic: "profile3.jpg",
     DatePost: `&#9679; 1 day ago`,
     Comment: "Sampletxt",
    }]
}

//Posts a comment
function createComment(name, profilepic, date, comtxt){
  const id = '' + new Date().getTime();
  commentInfo.push({
    Username: name,
    ProfilePic: profilepic,
    DatePost: date,
    Comment: comtxt,
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
  localStorage.setItem('Comments', JSON.stringify(commentInfo));
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
    AUDControls.appendChild(AUDLikeBtn)

    const AUDLikeimg = document.createElement('img')
    AUDLikeimg.className = "ThumbsIcon1"
    AUDLikeimg.src = "../images/like-icon.png"
    AUDLikeBtn.appendChild(AUDLikeimg)

    const AUDLikeCount = document.createElement('p')
    AUDLikeCount.className = "likenumStyle"
    AUDLikeCount.textContent = 0
    AUDControls.appendChild(AUDLikeCount)

    const AUDDislikeBtn = document.createElement('button')
    AUDDislikeBtn.className = "DislikeBtnStyle"
    AUDControls.appendChild(AUDDislikeBtn)

    const AUDDislikeimg = document.createElement('img')
    AUDDislikeimg.className = "ThumbsIcon2"
    AUDDislikeimg.src = "../images/dislike-icon.png"
    AUDDislikeBtn.appendChild(AUDDislikeimg)

    const AUDReplyBtn = document.createElement('button')
    AUDReplyBtn.className = "ReplyBtnStyle"
    AUDReplyBtn.textContent = "Reply"
    AUDControls.appendChild(AUDReplyBtn)

    const AUDDeleteBtn = document.createElement('button')
    AUDDeleteBtn.className = "deleteCommentStyle"
    AUDDeleteBtn.textContent = "Remove"
    AUDDeleteBtn.id = renderComment.id;
    AUDDeleteBtn.onclick = deleteComment;
    AUDControls.appendChild(AUDDeleteBtn)

    document.getElementById('topic-discussion').appendChild(AUDOpinion)
  });
}

renderComSec();

//Comment Controllers

function addComment() {
  
//Username 
const usernameEXP = document.getElementById('expFTName');
let UNInput = usernameEXP.value
  switch (true){
    case UNInput === '':
      UNInput = "Anonymous User"
    break;
  }
 
//Profile Picture URL
const ppEXP = document.getElementById('expFTPP')

//Date Posted
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

//Comment Input GET from textarea
const comInputTxt = document.getElementById('ComInput');


  const date = `&#9679; ${dayofMonth} ${month} ${year}`
  const name = UNInput
  const profilepic = ppEXP.value; 
  const comtxt = comInputTxt.value;

  createComment(name, profilepic, date, comtxt);
  renderComSec();
}

function deleteComment(event) {
  const deleteComButton = event.target;
  const IDtoDelete = deleteComButton.id;
  removeComment(IDtoDelete);
  renderComSec();
}



//Like Button 



// News Model
let newsSelector = [
  {News_Name: 'June 2022 Promotion', 
   IMG: "background-image: url('../../images/products/Bugatti Chiron 2017 Sports Car 3D Model.jpg');",
   Link: "news-posts/articles/",
   Date: "2 June",
   Heading: "JUNE 2022 PROMOTIONS",
  },

  {News_Name: 'SampleNews2',
   IMG: "background-image: url('https://cdn.realsport101.com/images/ncavvykf/gfinityesports/b843c4ae15c10f098c70e8d23f623303a593a4f9-1280x720.jpg?w=686&h=386&auto=format&dpr=2')",
   Link: "news-posts/articles/",
   Date: '1 April',
   Heading: 'APRIL 2022 SAMPLE',
  },

  {News_Name: 'SampleNews3',
  IMG: "background-image: url('../../images/products/Sofa 3D Model.png')",
  Link: "news-posts/articles/",
  Date: '2 April',
  Heading: 'GET PRANKED',
  },

  {News_Name: 'SampleNews4',
  IMG: "background-image: url('../../images/products/P250 3D Model.png')",
  Link: "news-posts/articles/",
  Date: '3 April',
  Heading: 'AMOGUS',
  },

  {News_Name: 'SampleNews5',
  IMG: "background-image: url('../../images/products/4 Axle Box Truck 3D Model.png')",
  Link: "news-posts/articles/",
  Date: '69 April',
  Heading: 'XUE HUA PIAO PUAO',
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

//Default news
renderNews(newsSelector[0], newsSelector[1], newsSelector[2]);


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
      renderNews(newsSelector[3], newsSelector[0], newsSelector[1]);                
    return true

    case newsIndex === 1:
      renderNews(newsSelector[4], newsSelector[3], newsSelector[0]);
    return true

    default:
      newsIndex = 3
        renderNews(newsSelector[0], newsSelector[1], newsSelector[2]);
      console.log('End of Left News')
    return false
   }
  }

function newsScrollRight(){
  newsIndex += 1
   switch(true){
    case newsIndex === 4: 
      renderNews(newsSelector[1], newsSelector[2], newsSelector[3]);             
    return true

    case newsIndex === 5:        
     renderNews(newsSelector[2], newsSelector[3], newsSelector[4]);             
    return true 

    default: 
      newsIndex = 3
       renderNews(newsSelector[0], newsSelector[1], newsSelector[2]);
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