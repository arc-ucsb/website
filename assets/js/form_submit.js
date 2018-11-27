var $form = $('form#contactform'),
    url = 'https://script.google.com/macros/s/AKfycby5GyPHpjvGlU25rH75Mhk5a91u9FolDof3b-sWovzUN0ZF1kJ8/exec'

$('#submitcontact').on('click', function(e) {
  e.preventDefault();
  var jqxhr = $.ajax({
    url: url,
    method: "GET",
    dataType: "json",
    data: $form.serialize()
  }).success(
    alert("Thanks! We'll get back to you soon!")
  );
})
