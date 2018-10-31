// alert("I AM WORKING");
// console.log("I am working");

// this is how we set a variabel
// var x = 12;
// var firstName = "noodlehead";

// console.log (1+x);
// console.log (firstName);
// console.log ("Hi my name is, " + firstName);

// $("#main-box").addClass("animated infinite rollOut");

$(document).ready(function(){
    $("#btn-RollOut").on("click", function(){
    //   console.log("I AM CLICKED");
        $("#main-box").addClass("animated infinite rollOut");
    });

$("#btn-stopRollOut").on("click", function() {
    $("#main-box").removeClass("animated infinite rollOut");
    // console.log("i'm done");
});


});
    


