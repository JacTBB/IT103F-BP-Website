//This JS file is only for checkout form validation. 
//V0.3*

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
    let HiddenTxtIMG = document.getElementById('showIndicator')
    HiddenTxtIMG.style = "background-image: url('images/checkout/hide-text.png') "
    hidden.type = "text";
  } 
  
  else {
    let ShowTxtIMG = document.getElementById('showIndicator')
    ShowTxtIMG.style = "background-image: url('images/checkout/show-text.png') "
    hidden.type = "password";
  }
}


function formValidate(){
  renderClear()

//Get form value inputs
  const CCName = document.getElementById('CardName').value;
  const CCEmail = document.getElementById('PayEmail').value
  const CCNum = document.getElementById('CardNo.').value
  const CCExpiry = document.getElementById('CardEXP').value
  const CVCCode = document.getElementById('CardSecCode').value

//Pattern Recognition
  //var numRange = /[0-9]/g;
  var checkForName = new RegExp("[0-9~`!@#$%^&*()_+={}[]|:;'<>?/,.]")
  var resultCForName = checkForName.test(CCName)

  var checkForCardNo = new RegExp("[a-zA-Z~`!@#$%^&*()_+={}[]|:;'<>?/,.]")
  var resultCForCardNo = checkForCardNo.test(CCNum)

  var checkForCardEXP = new RegExp("[a-zA-Z~`!@#$%^&*()_+={}[]|:;'<>?,.]")
  var resultCForCardEXP = checkForCardEXP.test(CCExpiry)

//Validation Test 
if (resultCForName){
  setTimeout(() => {
  const NameErrorDiv = document.createElement('div')
  NameErrorDiv.id = 'errorType1'
  document.getElementById('errorTypeTxt').appendChild(NameErrorDiv);

  const ErrorTxt1 = document.createElement('p')
  ErrorTxt1.className = 'error'
  ErrorTxt1.innerHTML = 'Name must not contain any number or special characters! (Error 1)'
  document.getElementById('errorType1').appendChild(ErrorTxt1);
  console.log('Test 1 Failed!');
  }, 2000);
  return false 
}

else if(CCEmail === ''){
  setTimeout(() => {
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

else if(resultCForCardNo){
  setTimeout(() => {
  const CCNumErrorDiv = document.createElement('div')
  CCNumErrorDiv.id = 'errorType3' 
  document.getElementById('errorTypeTxt').appendChild(CCNumErrorDiv);
  
  const ErrorTxt3 = document.createElement('p')
  ErrorTxt3.className = 'error'
  ErrorTxt3.innerHTML = 'Credit Card Number is invalid! (Error 3)'
  document.getElementById('errorType3').appendChild(ErrorTxt3);
  console.log('Test 3 Failed!');
  }, 2000);
return false
}

else if(resultCForCardEXP){
  setTimeout(() => {
  const CCEXPErrorDiv = document.createElement('div')
  CCEXPErrorDiv.id = 'errorType4' 
  document.getElementById('errorTypeTxt').appendChild(CCEXPErrorDiv);
  
  const ErrorTxt4 = document.createElement('p')
  ErrorTxt4.className = 'error'
  ErrorTxt4.innerHTML = 'Credit Card Expiry Date must only contain Month/Year! (Error 4)'
  document.getElementById('errorType4').appendChild(ErrorTxt4);
  console.log('Test 4 Failed!');
  }, 2000);
return false
}

else if(isNaN(CVCCode)){
  setTimeout(() => {
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

//Auth Passed
else 
  setTimeout(() => {
  const ValidateSuccess = document.createElement('div')
  ValidateSuccess.id = 'Authorized'
  document.getElementById('errorTypeTxt').appendChild(ValidateSuccess);

  const FormSuccessTxt = document.createElement('p')
  FormSuccessTxt.className = 'success'
  FormSuccessTxt.innerHTML = 'Form Validation Test Successful.'
  document.getElementById('Authorized').appendChild(FormSuccessTxt);
  }, 2000);

console.log('Test passed')
return true
}
