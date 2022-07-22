//This JS file is only for checkout form validation. 
//V0.2 

//Model 

//View
function renderClear(){
  document.getElementById('errorTypeTxt').innerHTML = ''
  console.log('Previous Error Texts Removed.')
}

//Controller 
function showHidden(){
  var hidden = document.getElementById("CardNo.");
  if (hidden.type === "password") {
    hidden.type = "text";
  } 
  
  else {
    hidden.type = "password";
  }
}


function formValidate(){
  renderClear()

//Get form value inputs
  const NameContainer = document.getElementById('CardName');
  const CCName = NameContainer.value;

  const emailContainer = document.getElementById('PayEmail');
  const CCEmail = emailContainer.value;

  const creditNumContainer = document.getElementById('CardNo.');
  const CCNum = creditNumContainer.value;

  const creditExpiryContainer = document.getElementById('CardEXP');
  const CCExpiry = creditExpiryContainer.value;

  const creditsecContainer = document.getElementById('CardSecCode');
  const CVCCode = creditsecContainer.value

//Pattern Recognition
  let rangeNum = new Range();
  
  var ccfourChar = num + num + num + num

//Validation Test 
if (CCName !== ''){
  setTimeout(function (){
  const NameErrorDiv = document.createElement('div')
  NameErrorDiv.id = 'errorType1'
  document.getElementById('errorTypeTxt').appendChild(NameErrorDiv);

  const ErrorTxt1 = document.createElement('p')
  ErrorTxt1.className = 'error'
  ErrorTxt1.innerHTML = 'Name cannot have numbers! (Error 1)'
  document.getElementById('errorType1').appendChild(ErrorTxt1);
  console.log('Test 1 Failed!');
  }, 2000);
  return false 
}

else if(CCEmail === ""){
  setTimeout(function (){
  const EmailErrorDiv = document.createElement('div')
  EmailErrorDiv.id = 'errorType2' 
  document.getElementById('errorTypeTxt').appendChild(EmailErrorDiv);

  const ErrorTxt2 = document.createElement('p')
  ErrorTxt2.className = 'error'
  ErrorTxt2.innerHTML = 'Email cannot be empty! (Error 2)'
  document.getElementById('errorType2').appendChild(ErrorTxt2);
  console.log('Test 2 Failed!');
  }, 2000);
  return false 
}

else if(CCNum !== ccfourChar + '-' + ccfourChar + '-' + ccfourChar + '-' + ccfourChar ){
  setTimeout(function (){
  const CCNumErrorDiv = document.createElement('div')
  CCNumErrorDiv.id = 'errorType3' 
  document.getElementById('errorTypeTxt').appendChild(CCNumErrorDiv);
  
  const ErrorTxt3 = document.createElement('p')
  ErrorTxt3.className = 'error'
  ErrorTxt3.innerHTML = 'CC input is invalid! (Error 3)'
  document.getElementById('errorType3').appendChild(ErrorTxt3);
  console.log('Test 3 Failed!');
  }, 2000);
return false
}

else if(CCExpiry !== ''){
  setTimeout(function (){
  const CCEXPErrorDiv = document.createElement('div')
  CCEXPErrorDiv.id = 'errorType4' 
  document.getElementById('errorTypeTxt').appendChild(CCEXPErrorDiv);
  
  const ErrorTxt4 = document.createElement('p')
  ErrorTxt4.className = 'error'
  ErrorTxt4.innerHTML = 'CCExpiry must only contain Month/Year! (Error 4)'
  document.getElementById('errorType4').appendChild(ErrorTxt4);
  console.log('Test 4 Failed!');
  }, 2000);
return false
}

else if(isNaN(CVCCode)){
  setTimeout(function (){
  const CVCErrorDiv = document.createElement('div')
  CVCErrorDiv.id = 'errorType5' 
  document.getElementById('errorTypeTxt').appendChild(CVCErrorDiv);
  
  const ErrorTxt5 = document.createElement('p')
  ErrorTxt5.className = 'error'
  ErrorTxt5.innerHTML = 'CVC must only contain numbers! (Error 5)'
  document.getElementById('errorType5').appendChild(ErrorTxt5);
  console.log('Test 5 Failed!');
  }, 2000);
return false 
}

else 
//Auth passed

console.log('Test passed')
return true
}
