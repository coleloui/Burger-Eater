$(function () {
  $(".change-eatin").on("click", function (event) {
    var id = $(this).data("id");
    var newEatin = $(this).data("neweatin");

    var newEatinState = {
      eatin: newEatin,
    };

    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newEatinState,
    }).then(function () {
      console.log("changed eatin to", newEatin);
      location.reload();
    });
  });

  $(".create-form").on("submit", function (event) {
    event.preventDefault();

    var newBurger = {
      name: $("#ca").val().trim(),
    };

    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger,
    }).then(function () {
      console.log("created new burger to eat");
      location.reload();
    });
  });
});
