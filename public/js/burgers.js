// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(document).ready(function() {
    $(".eatBurger").on("click", function(event) {
        event.preventDefault()
        var id = $(this).data("id");
        var devoured = $(this).data("devoured")

        var newState = {
            devoured: devoured
        };
  
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newState
      }).then(
        function(data) {
        console.log(data)
          console.log("Moved"+id);
          // Reload the page to get the updated list
          location.reload();
        }
      );
      console.log("hello")
    });



    $(".deleteBurger").on("click", function(event) {
        event.preventDefault()

        var id = $(this).data("id")
        // Send the DELETE request.

        $.ajax("/api/burgers/" + id, {
            type: "DELETE",
            url: "api/burgers/" + id
      }).then(
        function() {
          console.log("Deleted burger");
          location.reload();
        });
        
        })
  

    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newBurger = {
        name: $("#newBurger").val().trim(),
      };
  
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("Created new burger!");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });
  