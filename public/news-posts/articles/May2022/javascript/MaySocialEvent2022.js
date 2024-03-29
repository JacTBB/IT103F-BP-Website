// Niche Javascript functions catering to a specific post page.


//Comment Model
let commentInfo;
const savedComments = JSON.parse(localStorage.getItem('MaySocialEvent2022Comment'));
if (Array.isArray(savedComments)){
  commentInfo = savedComments
}

else {
  commentInfo = [
    {Username: "Xiao",
     ProfilePic: "../../../images/news-article/profile-pictures/profile39.jpg",
     DatePost: `&#9679; 21 hours ago`,
     Comment: "Interesting.",
     LikeNumber: 140,
    },

    {Username: "T3sla",
     ProfilePic: "../../../images/news-article/profile-pictures/profile33.jpg",
     DatePost: `&#9679; 12 hours ago`,
     Comment: "Where are the car models at? I need em in my gam now!!",
     LikeNumber: 92,
    },

    {Username: "ManInBat",
     ProfilePic: "../../../images/news-article/profile-pictures/profile35.jpg",
     DatePost: `&#9679; 8 hours ago`,
     Comment: "It seems like joker isn't here, I'll have to look somewhere else",
     LikeNumber: 73,
    },

    {Username: "TheProfoundTrickster",
     ProfilePic: "../../../images/news-article/profile-pictures/profile38.jpg",
     DatePost: `&#9679; 8 hours ago`,
     Comment: "Spellbook, tomes, incantations. Gimme all of em nowwww",
     LikeNumber: 102,
    },

    {Username: "CRUSAD1023",
     ProfilePic: "../../../images/news-article/profile-pictures/profile37.jpg",
     DatePost: `&#9679; 3 hours ago`,
     Comment: "WE SHALL RECLAIM MOTHERLAND!!",
    LikeNumber: 93,
    },

    {Username: "SPARTA36",
     ProfilePic: "../../../images/news-article/profile-pictures/profile36.jpg",
     DatePost: `&#9679; 2 hours ago`,
     Comment: "DEUS VULT! DEUS VULT!",
     LikeNumber: 87,
   },

   {Username: "Anonymous Archon",
    ProfilePic: "../../../images/news-article/profile-pictures/profile40.png",
    DatePost: `&#9679; 1 hour ago`,
    Comment: `Osmanthus wine tastes the same as always, but where is those who share the memory?`,
    LikeNumber: 189,
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
  localStorage.setItem('MaySocialEvent2022Comment', JSON.stringify(commentInfo));
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
      case renderComment.Username === "Xiao":
        break;
      case renderComment.Username === "T3sla":
        break;
      case renderComment.Username === "ManInBat":
        break;
      case renderComment.Username === "TheProfoundTrickster":
        break;
      case renderComment.Username === "CRUSAD1023":
        break;
      case renderComment.Username === "SPARTA36":
        break;
      case renderComment.Username === "Anonymous Archon":
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