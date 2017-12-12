/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$(document).ready(function() {
    /* =========================
     User Registration Validation
     ===========================*/
    $('#registration').validate({
        errorClass: 'validation-error', // so that it doesn't conflict with the error class of alert boxes
        rules: {
            username: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            contact: {
                required: true,
                number: true
            },
            password: {
                required: true
            }
        },
        highlight: function(element) {
            $(element).closest('.space').addClass('has-error');
        },
        unhighlight: function(element) {
            $(element).closest('.space').removeClass('has-error');
        },
        errorElement: 'span',
        errorPlacement: function(error, element) {
            if (element.parent('.input-group').length) {
                error.insertAfter(element.parent());
            } else {
                error.insertAfter(element);
            }
        },
        messages: {
            username: {
                required: "Field is required!"
            },
            email: {
                required: "Field is required!",
                email: "Please enter a valid email address"
            },
            contact: {
                required: "Field is required!"
            },
            password: {
                required: "Field is required!"
            }

        },
        submitHandler: function(form) {

            var result;
            $(form).ajaxSubmit({
                type: "POST",
                data: $(form).serialize(),
                url: "admin/register.php",
                success: function(msg) {
                    if (msg === 'OK') {

                        result = '<div class="alert success"><i class="fa fa-check-circle-o"></i>Register Successfully</div>';
                        $('#registration').clearForm();
                    } else {
                        result = '<div class="alert error"><i class="fa fa-times-circle"></i>' + msg + '</div>';
                        $('#registration').clearForm();
                    }
                    $("#formstatus").fadeOut(4000).html(result);
                    $('#register1').modal('hide').fadeOut(5000);

                },
                error: function() {
                    alert("not work");

                }
            });
        }
    });

    /* =========================
     Service form Validation
     ===========================*/

    $('#addservice').validate({
        errorClass: 'validation-error', // so that it doesn't conflict with the error class of alert boxes
        rules: {
            service: {
                required: true
            },
            service_price: {
                required: true,
                number: true
            }
        },
        highlight: function(element) {
            $(element).closest('.space').addClass('has-error');
        },
        unhighlight: function(element) {
            $(element).closest('.space').removeClass('has-error');
        },
        errorElement: 'span',
        errorPlacement: function(error, element) {
            if (element.parent('.input-group').length) {
                error.insertAfter(element.parent());
            } else {
                error.insertAfter(element);
            }
        },
        messages: {
            service: {
                required: "Field is required!"
            },
            service_price: {
                required: "Field is required!"
            }
        },
        submitHandler: function(form) {

            var result;
            $(form).ajaxSubmit({
                type: "POST",
                data: $(form).serialize(),
                url: "addservice.php",
                success: function(msg) {
                    if (msg === 'OK') {

                        result = '<div class="alert success"><i class="fa fa-check-circle-o"></i>Service Added Successfully</div>';
                        $('#addservice').clearForm();
                    } else {
                        result = '<div class="alert error"><i class="fa fa-times-circle"></i>' + msg + '</div>';
                        $('#addservice').clearForm();
                    }
                    $("#formstatus").fadeOut(4000).html(result);


                },
                error: function(msg) {
                    alert(msg);

                }
            });
        }
    });

    /* =========================
     SubService form Validation
     ===========================*/

    $('#addsubservice').validate({
        errorClass: 'validation-error', // so that it doesn't conflict with the error class of alert boxes
        rules: {
            s_id: {
                required: true
            },
            sb_service: {
                required: true
            },
            sb_price: {
                required: true,
                number: true
            }
        },
        highlight: function(element) {
            $(element).closest('.space').addClass('has-error');
        },
        unhighlight: function(element) {
            $(element).closest('.space').removeClass('has-error');
        },
        errorElement: 'span',
        errorPlacement: function(error, element) {
            if (element.parent('.input-group').length) {
                error.insertAfter(element.parent());
            } else {
                error.insertAfter(element);
            }
        },
        messages: {
            s_id: {
                required: "Field is required!"
            },
            sb_service: {
                required: "Field is required!"
            },
            sb_price: {
                required: "Field is required!"
            }
        },
        submitHandler: function(form) {

            var result;
            $(form).ajaxSubmit({
                type: "POST",
                data: $(form).serialize(),
                url: "subservicesubmit.php",
                success: function(msg) {
                    if (msg === 'OK') {

                        result = '<div class="alert success"><i class="fa fa-check-circle-o"></i>Service Added Successfully</div>';
                        $('#addservice').clearForm();
                    } else {
                        result = '<div class="alert error"><i class="fa fa-times-circle"></i>' + msg + '</div>';
                        $('#addservice').clearForm();
                    }
                    $("#formstatus").fadeOut(4000).html(result);


                },
                error: function(msg) {
                    alert(msg);

                }
            });
        }
    });



    /* =========================
     testimonial form Validation
     ===========================*/

    $('#addtestimonial').validate({
        errorClass: 'validation-error', // so that it doesn't conflict with the error class of alert boxes
        rules: {
            c_name: {
                required: true
            },
            c_pic: {
                extension: "jpg|jpeg|png|bmp",
                maxfilesizeb: true,
                required: true
            },
            c_desc: {
                required: true

            }
        },
        highlight: function(element) {
            $(element).closest('.space').addClass('has-error');
        },
        unhighlight: function(element) {
            $(element).closest('.space').removeClass('has-error');
        },
        errorElement: 'span',
        errorPlacement: function(error, element) {
            if (element.parent('.input-group').length) {
                error.insertAfter(element.parent());
            } else {
                error.insertAfter(element);
            }
        },
        messages: {
            c_name: {
                required: "Field is required!"
            },
            c_pic: {
                required: "Field is required!"

            },
            c_desc: {
                required: "Field is required!"
            }
        },
        submitHandler: function(form) {

            var result;
            $(form).ajaxSubmit({
                type: "POST",
                data: $(form).serialize(),
                url: "submittestimonial.php",
                success: function(msg) {
                    if (msg === 'OK') {

                        result = '<div class="alert success"><i class="fa fa-check-circle-o"></i>Testimonial Added Successfully</div>';
                        $('#addtestimonial').clearForm();
                    } else {
                        result = '<div class="alert error"><i class="fa fa-times-circle"></i>' + msg + '</div>';
                        $('#addtestimonial').clearForm();
                    }
                    $("#formstatus").fadeOut(4000).html(result);


                },
                error: function(msg) {
                    alert(msg);

                }
            });
        }
    });



    /* =========================
     enquiry form Validation
     ===========================*/

    $('#enquiry').validate({
        errorClass: 'validation-error', // so that it doesn't conflict with the error class of alert boxes
        rules: {
            sendto: {
                required: true
            },
            e_service: {
                
                required: true
            },
            c_email: {
                required: true,
                email: true

            },
            c_phone:{
                required: true,
                number: true
            }
        },
        highlight: function(element) {
            $(element).closest('.space').addClass('has-error');
        },
        unhighlight: function(element) {
            $(element).closest('.space').removeClass('has-error');
        },
        errorElement: 'span',
        errorPlacement: function(error, element) {
            if (element.parent('.input-group').length) {
                error.insertAfter(element.parent());
            } else {
                error.insertAfter(element);
            }
        },
        messages: {
            sendto: {
                required: "Field is required!"
            },
            e_service: {
                required: "Field is required!"

            },
            c_email: {
                required: "Field is required!"
            },
             c_phone: {
                required: "Field is required!"
            }
        },
        submitHandler: function(form) {

            var result;
            $(form).ajaxSubmit({
                type: "POST",
                data: $(form).serialize(),
                url: "enquirysubmit.php",
                success: function(msg) {
                    if (msg === 'OK') {

                        result = '<div class="alert success"><i class="fa fa-check-circle-o"></i>Enquiry Added Successfully</div>';
                        $('#enquiry').clearForm();
                    } else {
                        result = '<div class="alert error"><i class="fa fa-times-circle"></i>' + msg + '</div>';
                        $('#enquiry').clearForm();
                    }
                    $("#formstatus").html(result);


                },
                error: function(msg) {
                    alert(msg);

                }
            });
        }
    });
    
       /* =========================
     Email form Validation
     ===========================*/

    $('#sendmail').validate({
        errorClass: 'validation-error', // so that it doesn't conflict with the error class of alert boxes
        rules: {
            emailto: {
                required: true,
                 email: true
            },
            subject: {
                
                required: true
            },
            message: {
                required: true,
                

            }
        },
        highlight: function(element) {
            $(element).closest('.space').addClass('has-error');
        },
        unhighlight: function(element) {
            $(element).closest('.space').removeClass('has-error');
        },
        errorElement: 'span',
        errorPlacement: function(error, element) {
            if (element.parent('.input-group').length) {
                error.insertAfter(element.parent());
            } else {
                error.insertAfter(element);
            }
        },
        messages: {
            emailto: {
                required: "Field is required!"
            },
            subject: {
                required: "Field is required!"

            },
            message: {
                required: "Field is required!"
            }
        },
        submitHandler: function(form) {

            var result;
            $(form).ajaxSubmit({
                type: "POST",
                data: $(form).serialize(),
                url: "sendmail.php",
                success: function(msg) {
                    if (msg === 'OK') {

                        result = '<div class="alert success"><i class="fa fa-check-circle-o"></i>Mail Send Successfully</div>';
                        $('#sendmail').clearForm();
                    } else {
                        result = '<div class="alert error"><i class="fa fa-times-circle"></i>' + msg + '</div>';
                        $('#sendmail').clearForm();
                    }
                    $("#formstatus").html(result);


                },
                error: function(msg) {
                    alert(msg);

                }
            });
        }
    }); 
    
    $.validator.addMethod(
            "maxfilesizeb",
            function(value, element) {
                return this.optional(element) || (element.files && element.files[0]
                        && element.files[0].size < 1024 * 1000);
            },
            'The file size can not exceed 1 MB.'
            );




});

