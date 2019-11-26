$("#ch3form").submit(function(event){
    if ($("input[name=fruit]:checked").val() && $("input[name=standing]:checked").val()){return}
    else{alert("You must select one from each set")
    event.preventDefault()}

  });