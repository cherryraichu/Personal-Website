var myForm;

//Form validation
function validFormInput()
{
    var hasNullInput = (myForm['fullname_input'].value == null || myForm['email_input'].value == null || 
    myForm['msg_input'].value == null)? true: false;
    var hasUndefinedInput = (myForm['fullname_input'].value == undefined || myForm['email_input'].value == undefined || 
    myForm['msg_input'].value == undefined)? true: false;

    //Check if all form fields are filled out
    if (!hasNullInput && !hasUndefinedInput)
    {
        var allWhiteSpace = new RegExp("/^\s*$/");
       
        var hasEmptyInput = (myForm['fullname_input'].value === '' || 
        myForm['email_input'].value === '' || myForm['msg_input'].value === '')? true: false;
        var hasAllWhiteSpace = (allWhiteSpace.test(myForm['fullname_input'].value) || 
        allWhiteSpace.test(myForm['email_input'].value) || allWhiteSpace.test(myForm['msg_input'].value))? true: false;

        //console.log(validEmail.test(myForm['email_input']));
        if (!hasEmptyInput && !hasAllWhiteSpace && myForm['email_input'].value.includes('@')) return true;
    }
    return false;    
}

//Display message for incorrect/empty form fields
function notifyInvalidInput()
{
    window.alert("Please fill out all required fields (*) in the correct format before submitting.");
}

//Submit form
function submitForm()
{
    myForm = document.forms['email_form'];

    if (validFormInput()) myForm.submit();
    else notifyInvalidInput();
}