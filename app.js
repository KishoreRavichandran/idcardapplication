function addDetails() {
    console.log('Add button clicked');
    // Check if user has entered all required data
    // If not show error message
    // Else post it
    if (validateFirstName()) 
    {
        $('#errForFirstName').hide();
        if (validateFullName()) 
        {
            $('#errForFullName').hide();
            if(validateEmpCode())
                {
                    $("#errForEmpCode").hide();
                    if(validatebloddGroup())
                    {
                        $("#errForBloodgrp").hide();
                        if(validateEmail())
                        {
                            $("#errForEmail").hide();
                            if(validateMobile())
                            {
                                $("#errForMobile").hide();
                                if(validateEmergencyMob())
                                {
                                    $("#errForEmergency").hide();
                                    postData();
                                }else{
                                    displayErrorMessageForEmergency();
                                }
                            }else
                            {
                                displayErrorMessageForMobile();
                            }
                        }else{
                            displayErrorMessageForMail();
                        }
                    }else{
                        displayErrorMessageForBlood();
                    }
                   // postData();
                }else{
                    displayErrorMessageForCode();
                }
            
        }
        else 
        {
            // Display error message for full Name
            displayErrorMessageForFullName();
        }
    } else 
    {
        // Display error message for first Name
        displayErrorMessageForFirstName();
    }

}
function displayErrorMessageForEmergency()
{
    $("#errForEmergency").show();
}
function displayErrorMessageForMobile()
{
    $("#errForMobile").show();
}
function displayErrorMessageForMail()
{
    $("#errForEmail").show();
}
function displayErrorMessageForBlood()
{
    $("#errForBloodgrp").show();
}
function displayErrorMessageForCode()
{
    $("#errForEmpCode").show();
}
function displayErrorMessageForFirstName() {
    $('#errForFirstName').show();
}

function displayErrorMessageForFullName() {
    $('#errForFullName').show();
}


function validateFirstName() {
    const firstName = $('#firstName').val();
    if (firstName === '' ) {
        return false;
    }else if(/^[A-Za-z\s]+$/.test(firstName))
    {
    return true;
    }
        
    
}


function validateFullName() {
    const fullName = $('#fullName').val();
    if (fullName === '') {
        return false;
    }else if(/^[A-Za-z\s]+$/.test(fullName))
    {
    return true;
    }
}
function validateEmpCode(){
    var code = $('#employeecode').val();
    
    var ex = /^[0-9]+\.?[0-9]*$/;
    if(code.length<6){
    
    if(ex.test(code) )
        {
            return true;
        }else
        {
            return false;
        }
       
    }else{
        return false;
    }
}
function validatebloddGroup()
{
    const grp=$("#bloodgrp").val();
    var e=  /^(A|B|AB|O)[+-]$/ ;
    if(e.test(grp))
    {
        return true;
    }else{
        return false;
    }
}
function validateEmail()
{
    const mail=$("#email").val();
    var reg= /@virtusa.com\s*$/;
    if(reg.test(mail))
    {
        return true;
    }
    else{
        return false;
    }
}
function validateMobile(){
const mob=$("#mobile").val();
var exp=/^(\+\d{1,3}[- ]?)?\d{10}$/;
if(exp.test(mob))
{
    return true;
}else{
    return false;
}
}
function validateEmergencyMob(){
    const mob1=$("#emergency").val();
    var exp1=/^(\+\d{1,3}[- ]?)?\d{10}$/;
    if(exp1.test(mob1))
    {
        return true;
    }else{
        return false;
    }
    }

    function readURL(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
                $('#blah')
                    .attr('src', e.target.result);
            };

            reader.readAsDataURL(input.files[0]);
        }
    }
function postData() {
    const data = {
        firstName: $('#firstName').val(),
        fullName: $('#fullName').val(),
        Designtion:$('#Designation').val(),
        EmployeeCode:$('#employeecode').val(),
        BloodGrp:$('#bloodgrp').val(),
        ReasonsForIssue:$('#Issue').val(),
        DateofEmployment:$('#dateemp').val(),
        Email:$('#email').val(),
        MobileNo:$('#mobile').val(),
        EmergencyMobile:$('#emergency').val()




    };
    $.ajax({
        type: "POST",
        url: 'https://idcard-application.firebaseio.com/application.json',
        data: JSON.stringify(data),
        success: onPostSuccess,
        // dataType: dataType
    });
}

const onPostSuccess = (data) => {
    console.log('Posting to firebase success');
    console.log(data);
}

$('document').ready(() => {
    // Initialize
    $('.span-for-errors').hide();
});