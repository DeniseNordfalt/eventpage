$(function () {
  //default sets all card descriptions as hidden
  $(".card-description").hide();

  //on click of a more info button
  //save the parent of that specific button
  //find the child-description of that parent
  //toggle that baby!
  //(do not toggle actual babies)
  $(".more-button").on("click", function () {
    let text = $(this).parents(".card");
    $(text).find(".card-description").toggle();
  });

  //when contact button is clicked
  //throw away the whole form, who needs it?
  //(not me, that's for sure)
  //then take that div that used to have a form
  //put som text in it!
  //(visitors love text)
  //oh, also make it red i guess, who can stop me?

  $("#contact-button").on("click", function () {
    $("#contact-form-content").remove();

    $(".contact-form")
      .append(
        "<h2>Thank you for your message!" +
          "</br>" +
          "We will get back to you as soon as possible! </h2>"
      )
      .css("color", "teal");
  });
});
