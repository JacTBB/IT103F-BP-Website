//This JS file is only for checkout form validation. 
//V0.1 

//Model 
/*let formInput;

const savedInputs = JSON.parse(localStorage.getItem('key'));
if (Array.isArray(savedInputs)){
  formInput = savedInputs;
} else {
  formInput = [{
  CName: '',
  CEmail: '',
  CNumber: '',
  CExpiry: '',
  CvcCode: '',
  RecieptID: '',
  },];
}*/

//Push details to database form array.

/*function pushFormInputs(CCName, CCEmail, CCNum, CCExpiry, CVCCode){
  const id = '' + new Date().getTime();
  formInput.push({
    CName: CCName,
    CEmail: CCEmail,
    CNumber: CCNum,
    CExpiry: CCExpiry,
    CvcCode: CVCCode,
    RecieptID : id,
  },);
}

function saveInputs(){
  localStorage.setItem('key', JSON.stringify(savedInputs));

}*/

//View
function renderClear(){
  console.log('Cleared')

}

//Controller 
function formValidate(){
//Get form value inputs
  const NameContainer = document.getElementById('CardName');
  const CCName = NameContainer.value;

  /*const emailContainer = document.getElementById('');
  const CCEmail = emailContainer.value;

  const creditNumContainer = document.getElementById('');
  const CCNum = creditNumContainer.value;

  const creditExpiryContainer = document.getElementById('');
  const CCExpiry = creditExpiryContainer.value;

  const creditsecContainer = document.getElementById('');
  const CVCCode = creditsecContainer.value;*/

//Validation Test 
if (CCName === 'Name'){

const NameErrorDiv = document.createElement('div')
NameErrorDiv.id = 'errorType1'
NameErrorDiv.innerHTML = document.createElement('p')

let ErrorTxt1 = NameErrorDiv.innerHTML
ErrorTxt1.class = 'error'
ErrorTxt1.innerHTML = 'Name cannot have numbers (Error 1).'
console.log('Test');
return false 
}

/*else if(CCEmail){

return false 
}

else if(CCNum){

return false
}

else if(CCExpiry){

return false
}

else if(CVCCode < 0){

return false
}*/

else 
//Auth passed & push to database.
/* pushFormInputs(CCName, CCEmail, CCNum, CCExpiry, CVCCode);
  renderClear();*/
return true
}