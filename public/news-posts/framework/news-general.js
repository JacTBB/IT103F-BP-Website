//Global Javascript Functions that affect all news posts/articles.

//Detect comment input 

const detectComInput = document.getElementById('ComInput')
detectComInput.addEventListener("focus", TxtCheckTimer);
detectComInput.addEventListener("focusout", TxtClearTimer);

document.getElementById("clearBtn").onclick = () => {
  detectComInput.value = ''
  commentBtn.disabled = true;
  commentBtn.className = "comBtnInactive";
  console.log('Input cleared.')
}


const commentBtn = document.getElementById('commentBtn')
let checkforStr;

function TxtCheckTimer(){
  checkforStr = setInterval(enableComBtn, 200)
}

function TxtClearTimer() {
  clearInterval(checkforStr)
}

function enableComBtn(){
  switch(true){
    case detectComInput.value !== '':
    commentBtn.disabled = false;
    commentBtn.className = "comBtnActive"
    break;

    default:
    commentBtn.disabled = true;
    commentBtn.className = "comBtnInactive"
    break;
  }
}



//Detech Profile Picture URL input 
const detectProfilePic = document.getElementById('expFTPP')
detectProfilePic.addEventListener("focus", PPIMGCheckTimer)
detectProfilePic.addEventListener("focusout", PPIMGClearTimer)
let checkforURL;

function PPIMGCheckTimer(){
  checkforURL = setInterval(changeProfilePic, 400)
}

function PPIMGClearTimer() {
  clearInterval(checkforURL)
}

function changeProfilePic(){
  const UserPP = document.getElementById('PFPUser')
  if (detectProfilePic.value === ''){
    UserPP.src = "../images/anonymous-sus.png"
  }
  else{
    UserPP.src = detectProfilePic.value;
  }
}

//Show Experiment features

function showHiddenFeatures(){
  const EXPButton = document.getElementById('experimentBtn')
  if (EXPButton.checked === true){
    document.getElementById('expFT1').style = "display: flex;"
    document.getElementById('expFT2').style = "display: flex;"
  }
  else {
    document.getElementById('expFT1').style = "display: none;"
    document.getElementById('expFT2').style = "display: none;"
  }
}

 //Star rating
 $('.stars p').on('click', function(){
  $('.stars span, .stars p').removeClass('active');

  $(this).addClass('active');
  $('.stars span').addClass('active');

  const notificationbar = document.getElementById('notificationbar')
  const notification = document.createElement('div')
  notification.classList.add('notification')
  const p = document.createElement('p')
  p.innerHTML = "Thank you for rating us!"
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
});
