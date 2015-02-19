$(document).ready(function() {

  $("#add-address").click(function() {
    $("#new-addresses").append('<div class="new-address">' +
                                  '<div class="form-group">' +
                                    '<input type="text" id= "street" class="form-control" placeholder="street" required>' +
                                 '</div>' +
                                 '<div class="form-group">' +
                                    '<input type="text" id = "city" class="form-control" placeholder="city" required>' +
                                 '</div>' +
                                 '<div class="form-group">' +
                                    '<input type="text" id = "state" class="form-control" placeholder="state" required>' +
                                  '</div>' +
                                  '<div class ="form-group">' +
                                    '<input type="text" id = "zip" class = "form-control" placeholder="zip" required>' +
                                  '</div>' +
                               '</div>');
  });

  $("form#new-contact").submit(function(event) {
    event.preventDefault();

    var inputtedFirstName = $("input#new-first-name").val();
    var inputtedLastName = $("input#new-last-name").val();

    var newContact = { firstName: inputtedFirstName, lastName: inputtedLastName, addresses: [] };

    $(".new-address").each(function() {
      var inputtedStreet = $(this).find("input#street").val();
      var inputtedCity = $(this).find("input#city").val();
      var inputtedState = $(this).find("input#state").val();
      var inputtedZip = $(this).find("input#zip").val()

    var newAddress = { street: inputtedStreet, city: inputtedCity, state: inputtedState, zip: inputtedZip, };
    newContact.addresses.push(newAddress);
  });

    $("ul#contacts").append("<li><span class='contact'>" +
                            newContact.firstName + " " +
                            newContact.lastName + " " +
                            "</span></li>");
    // debugger;
    $(".contact").last().click(function() {
      $("#show-contact").show();
      $("#show-contact h2").text(newContact.firstName + " " + newContact.lastName);
      $(".first-name").text(newContact.firstName);
      $(".last-name").text(newContact.lastName);

      $("ul#addresses").text("");
      newContact.addresses.forEach(function(address) {
        $("ul#addresses").append("<li>" + address.street + ", " + address.city + ", " + address.state + ", " + address.zip + "</li>");
    });
  });

    $("input#new-first-name").val("");
    $("input#new-last-name").val("");
    $("input#street").val("");
    $("input#city").val("");
    $("input#state").val("");
    $("input#zip").val("");
  });
});
