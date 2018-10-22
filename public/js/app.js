  // document.addEventListener('DOMContentLoaded', function () {
  //   var elems = document.querySelectorAll('.modal');
  //   var instances = M.Modal.init(elems);
  // });

  var instances;
  var instances2;

  // Funcionalidad Carrusel
  function openModals() {
    // var instance = M.Modal.getInstance(document.getElementById('modal1'));
    // instance.open();
    document.getElementById('carito').style.display = "none";
    favoriteCodes.style.display = "none";
    myWorld.style.display = "none";
    letsTalk.style.display = "none";
    content.style.display = "none";
    document.getElementById('carousel').style.display = "block";
    var elems = document.querySelectorAll('.carousel');
    instances = M.Carousel.init(elems);
  };

  // function closeModal() {
  //   document.getElementById('carito').style.display = "block";
  //   favoriteCodes.style.display = "block";
  //   myWorld.style.display = "block";
  //   letsTalk.style.display = "block";
  //   content.style.display = "block";
  // };

  document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.carousel');
    var instances = M.Carousel.init(elems);
  });

  function myCodes() {
    var instance = M.Carousel.getInstance(document.getElementsByClassName('carousel-item'));
    instance.next();
    instance.prev();
    instance.set();
  }

  document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.fixed-action-btn');
    var instances = M.FloatingActionButton.init(elems, {
      toolbarEnabled: true
    });
  });

  function menu() {
    var instance = M.FloatingActionButton.getInstance(document.getElementsByClassName('fixed-action-btn'));
    instance.open();

  }