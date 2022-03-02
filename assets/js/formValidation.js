const scriptURL = 'https://script.google.com/macros/s/AKfycbz5837AFo92YJnmevzMglMyvytQ6_3qFh97u_K8jtjtoku_v8IGD7q-7aR1cUcl38Vn/exec'
const form = document.forms['contactform']


form.addEventListener('submit', e => {
    let nameFound = nameCheck();
    let numberFound = numberCheck();
    let emailFound = emailCheck();
    let messageFound = messageCheck();
    if (nameFound && numberFound && emailFound && messageFound) {

        e.preventDefault()
        fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        
        
         swal("Success!", "Form Sent Successfully", "success");


    }
    else{
        e.preventDefault()
        $("#contactform")[0].reset();
        
        
        




    }
});
const messageCheck = (() => {
    let message = $("#message").val();
    message = message.replace(/  +/g, ' ');
    $("#message").val(message);
    var count = message.replace(/\s+/g, '').length;
    if (message.length == 0) {
        $('0').show();
        $("#mErr").text("Please Enter the Message");
        return false;
    }
    else if (message.charCodeAt(0) == 32) {
        $('#mErr').show();
        $("#mErr").text("First letter not be a space");
        return false;
    }
    if (count > 10 && count < 250) {
        $('#mErr').hide();
        return true;
    }
    else if (count < 10) {
        $('#mErr').show();
        $("#mErr").text("Minimum 10 characters needed");
        return false;
    }
    else if (count > 250) {
        $('#mErr').show();
        $("#mErr").text("Maximum 250 character allowed");
        return false;
    }
})

const emailCheck = (() => {
    let email = $('#email').val();
    filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (email.length == 0) {
        $("#eErr").show();
        $("#eErr").text("Please enter the Email");
        return false;
    }
    else if (email.endsWith(" ")) {
        $("#eErr").show();
        $("#eErr").text("Last letter not be a space");
        return false;
    }
    else if (filter.test(email)) {
        $("#eErr").hide();
        return true;
    }
    else {
        $("#eErr").show();
        $("#eErr").text("Enter the valid email address");
        return false;
    }
})
const numberCheck = (() => {
    let number = $("#number").val();
    var isNum = /^[0-9]+$/;
    if (number.length == 0) {
        $("#nErr").show();
        $("#nErr").text("Please enter the number");
        return false;
    }
    if (number.match(isNum)) {
        if (number.length < 10) {
            $("#nErr").show();
            $("#nErr").text("Minimum 10 numbers needed");
            return false;
        }
        else if (number.length > 10) {
            $("#nErr").show();
            $("#nErr").text("Only 10 numbers allowed");
            return false;
        }
        else if (number.length == 10) {
            $("#nErr").hide();
            return true;
        }
    }
    else {
        $("#nErr").show();
        $("#nErr").text("Please enter the number");
        return false;
    }
})
const nameCheck = (() => {
   $('#name').val($('#name').val().replace(/[^a-zA-Z\s]/gi, ''));
    let name = $("#name").val();
    name = name.replace(/  +/g, ' ');
    var reg_exp = /^[A-Za-z0-9 ]+$/;
    var is_valid = reg_exp.test(name);
    $("#name").val(name);
    if (name.length == 0) {
        $("#naErr").show();
        $("#naErr").text("Please enter the name");
        return false;
    }
    else if (name.charCodeAt(0) == 32) {
        $("#naErr").show();
        $("#naErr").text("First letter not be a space");
        return false;
    }
    else if (/\s$/.test(name)) {
        $("#naErr").show();
        $("#naErr").text("Last letter not be a space");
        return false;
    }
    else if (!is_valid) {
        $("#naErr").show();
        $("#naErr").text("Only characters allowed");
        return false;
    }
    else if (name.length >= 2 && name.length <= 12) {
        var hasNumber = /\d/;
        if (hasNumber.test(name)) {
            $("#naErr").show();
            $("#naErr").text("Only characters allowed");
            return false;
        }
        else {
            $("#naErr").hide();
            return true;
        }
    }
    else if (name.length > 20) {
        $("#naErr").show();
        $("#naErr").text("Maximum 20 character allowed");
        return false;
    }
    else {
        $("#naErr").show();
        $("#naErr").text("Minimum 2 characters needed");
        return false;
    }
})





               














