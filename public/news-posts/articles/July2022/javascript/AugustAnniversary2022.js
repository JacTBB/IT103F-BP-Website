// Niche Javascript functions catering to a specific post page.


//Comment Model
let commentInfo;
const savedComments = JSON.parse(localStorage.getItem('AugustAnniversary2022Comment'));
if (Array.isArray(savedComments)){
  commentInfo = savedComments
}

else {
  commentInfo = [
    {Username: "Iron Man",
    ProfilePic: "../../../images/news-article/profile-pictures/profile26.jpg",
    DatePost: `&#9679; 2 days ago`,
    Comment: "'Sometimes, it takes balls of steel to announce all your projects at once in a single stream.'",
    LikeNumber: 41,
    },

    {Username: "MayaSays",
    ProfilePic: "../../../images/news-article/profile-pictures/profile29.jpg",
    DatePost: `&#9679; 1 day ago`,
    Comment: "Anyone know where to sign up as an employee in Blueprint Studios? seems like a fun place to work at.",
    LikeNumber: 38,
    },

    {Username: "hoT_Wheels",
     ProfilePic: "../../../images/news-article/profile-pictures/profile34.jpg",
     DatePost: `&#9679; 23 hours ago`,
     Comment: "OMG Koenigsegg will be here for this anniversary? Cant wait for the new AXT 3890 Corvette model to be released!",
     LikeNumber: 178,
    },

    {Username: "R6bandit#",
     ProfilePic: "../../../images/news-article/profile-pictures/profile22.png",
     DatePost: `&#9679; 21 hours ago`,
     Comment: "It's that time again.",
     LikeNumber: 138,
    },

    {Username: "Turtle",
     ProfilePic: "../../../images/news-article/profile-pictures/profile32.jpg",
     DatePost: `&#9679; 16 hours ago`,
     Comment: "*Gives seal of approval*",
     LikeNumber: 102,
    },

    {Username: "mon.Tima",
     ProfilePic: "../../../images/news-article/profile-pictures/profile18.jpg",
     DatePost: `&#9679; 12 hours ago`,
     Comment: "Is there free food as prizes?",
     LikeNumber: 48,
    },

    {Username: "mimiY",
     ProfilePic: "../../../images/news-article/profile-pictures/profile31.jpg",
     DatePost: `&#9679; 5 hours ago`,
     Comment: "*Stares with anticipation*",
     LikeNumber: 67,
    },

    {Username: "JaSYnX",
     ProfilePic: "../../../images/news-article/profile-pictures/profile7.jpg",
     DatePost: `&#9679; 3 hours ago`,
     Comment: "Ooo, I heard initial leaks abt the side projects, but didnt know it is tru.",
     LikeNumber: 89,
    },

    {Username: "phant0m",
     ProfilePic: "../../../images/news-article/profile-pictures/profile19.png",
     DatePost: `&#9679; 2 hours ago`,
     Comment: "UTAE, UTAE, UTAE!",
    LikeNumber: 148,
    },

    {Username: "VoyagerX1",
     ProfilePic: "../../../images/news-article/profile-pictures/profile21.jpg",
     DatePost: `&#9679; 2 hours ago`,
     Comment: "Realllllyyy needed those gun models for my games, can't survive without em.",
     LikeNumber: 128,
   },

   {Username: "V1PeR",
    ProfilePic: "../../../images/news-article/profile-pictures/profile23.jpg",
    DatePost: `&#9679; 1 hour ago`,
    Comment: `Looking forward to see what Koenigsegg has in store for us.`,
    LikeNumber: 210,
  }
]

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
  localStorage.setItem('AugustAnniversary2022Comment', JSON.stringify(commentInfo));
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
    AUDLikeimg.src = "../../../images/news-article/like-icon.png"
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
    AUDDislikeimg.src = "../../../images/news-article/dislike-icon.png"
    AUDDislikeBtn.appendChild(AUDDislikeimg)

    switch(true){
      case renderComment.Username === "Iron Man":
        break;
      case renderComment.Username === "MayaSays":
        break;
      case renderComment.Username === "hoT_Wheels":
        break;
      case renderComment.Username === "R6bandit#":
        break;
      case renderComment.Username === "Turtle":
        break;
      case renderComment.Username === "mon.Tima":
        break;
      case renderComment.Username === "mimiY":
        break;
      case renderComment.Username === "JaSYnX":
        break;
      case renderComment.Username === "phant0m":
        break;
      case renderComment.Username === "VoyagerX1":
        break;
      case renderComment.Username === "V1PeR":
        break;
      default:
        const AUDDeleteBtn = document.createElement('button')
        AUDDeleteBtn.className = "deleteCommentStyle"
        AUDDeleteBtn.textContent = "Remove"
        AUDDeleteBtn.id = renderComment.id;
        AUDDeleteBtn.onclick = deleteComment;
        AUDDeleteBtn.title = "Delete this comment"
        AUDControls.appendChild(AUDDeleteBtn)
      break;}
    
    document.getElementById('topic-discussion').prepend(AUDOpinion)
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
    ppEXP.value = "../../../images/news-article/anonymous-sus.png"
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

 renderComSec();



function alertJS(){
  alert ('JavaScript Enabled.');
}

function sliderBanner(){
}   

function productsSlider(){
}
