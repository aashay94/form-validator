$(document).ready(function () {
    $("#submitBtn").click(function (e) {
        e.preventDefault();
        $(".error").remove();
        var validate = true;
        if ($("input[name='title']:checked").length <= 0) {
            $('#radioError').append('<span class="error">This field is required</span>');
            validate = false;
        }
        else {
            console.log("Radio button has been selected");
            validate = true;
        }
        if ($("#firstName").val().match('^[a-zA-Z]{3,16}$')) {
            console.log("Valid first name");
            validate = true;
        } else {
            $('#firstName').after('<span class="error">This is not a valid first name</span>');
            validate = false;
        }
        if ($("#lastName").val().match('^[a-zA-Z]{3,16}$')) {
            console.log("Valid last name");
            validate = true;
        } else {
            $('#lastName').after('<span class="error">This is not a valid last name</span>');
            validate = false;
        }
        if ($("#emailId").val().match('[^@]+@[^@]+\.[a-zA-Z]{2,6}')) {
            console.log("Valid email");
            validate = true;
        } else {
            $('#emailId').after('<span class="error">This is not a valid emaid id</span>');
            validate = false;
        }
        var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
        if ($("#phoneNumber").val().match(phoneno)) {
            console.log("Valid phone no");
            validate = true;
        } else {
            $('#phoneNumber').after('<span class="error">This is not a valid phone number</span>');
            validate = false;
        }
        var zipCode = /^\d{5}(?:-?\d{4})?$/;
        if ($("#zipcode").val().match(zipCode)) {
            console.log("Valid zipcode");
            validate = true;
        } else {
            $('#zipcode').after('<span class="error">This is not a valid zipcode</span>');
            validate = false;
        }
        if ($("input[name='source']:checked").length <= 0) {
            $('#checkBoxError').append('<span class="error">This field is required</span>');
            validate = false;
        }
        else {
            validate = true;
            console.log("Checkbox selected");
        }
        if($.trim($('#comments').val()) == '') {
            $('#comments').after('<span class="error">The comments field cant be empty</span>');
            validate = false;
        }
        if(validate === true) {
            alert("validation successful");
        }
    });
    $("#resetBtn").click(function() {
        $(".error").remove();
    });
});