function openModals() {
  document.getElementById('carito').style.display = "none";
  favoriteCodes.style.display = "none";
  myWorld.style.display = "none";
  letsTalk.style.display = "none";
  content.style.display = "none";

};



function closeModal() {
  document.getElementById('carito').style.display = "block";
  favoriteCodes.style.display = "block";
  myWorld.style.display = "block";
  letsTalk.style.display = "block";
  content.style.display = "block";
};

//carusel funcionalidad

function moveToSelected(element) {

  if (element == "next") {
    var selected = $(".selected").next();
  } else if (element == "prev") {
    var selected = $(".selected").prev();
  } else {
    var selected = element;
  }

  var next = $(selected).next();
  var prev = $(selected).prev();


  $(selected).removeClass().addClass("selected");

  $(prev).removeClass().addClass("prev");
  $(next).removeClass().addClass("next");


}

// Eventos teclado
$(document).keydown(function (e) {
  switch (e.which) {
    case 37: // left
      moveToSelected('prev');
      break;

    case 39: // right
      moveToSelected('next');
      break;

    default:
      return;
  }
  e.preventDefault();
});

$('#carousel div').click(function () {
  moveToSelected($(this));
});

$('#prev').click(function () {
  moveToSelected('prev');
});

$('#next').click(function () {
  moveToSelected('next');
});