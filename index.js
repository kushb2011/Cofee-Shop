$(document).ready(function() {

    $("body").quietflow({
        theme : "vortex",
        miniRadii : 40
    });

    $(".project").hover3d({
        selector: ".project__card",
        sensitivity : 3,
        shine : true,
        invert : true
    });

    $("#tt1").tooltip();
    $("#tt2").tooltip();
    $("#tt3").tooltip();
    $("#tt4").tooltip();
    $("#tt5").tooltip();
    $("#tt6").tooltip();
    $("#tt7").tooltip();
    $("#tt8").tooltip();
    $("#tt9").tooltip();

});

$(document).ready(function() {
    $.ajax({
        type: "get",
        url: "coffee.json",
        beforeSend: function() {
            $("#us").html("Loading...");
        },

        timeout: 10000,
        error: function(xhr, status, error) {
            alert("Error: " + xhr.status + " - " + error);
        },

        dataType: "json",
        success: function(data) {
            $("#us").html("");
            $(document).ready(function() {
                $.each(data, function() {
                    $.each(this, function(key, value) {
                        $("#us").append(
                            "Name: " + value.name + "<br>" +
                            "Who: " + value.title + "<br>" +
                            "About: " + value.bio + "<br>" +
                            "Email: " + value.email + "<br>" +
                            "Phone Number: " + value.phone + "<br><br>"
                        );
                    });
                });
            });
        }
    });
});



$(() => {

    $("#send").click(function() {
        var form = $("#feedback");
        var url = form.attr('action');
        $.ajax({
            type: "POST",
            url: url,
            data: form.serialize(),
            success: function() {
                alert("Form Submited Successfully");
            },
            error: function() {
                alert("some Error");
            }
        });
    });
});