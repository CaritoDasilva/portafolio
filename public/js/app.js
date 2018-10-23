  // document.addEventListener('DOMContentLoaded', function () {
  //   var elems = document.querySelectorAll('.modal');
  //   var instances = M.Modal.init(elems);
  // });

  var instances;
  var instances2;

  // Funcionalidad Carrusel
  function openModals() {
    document.getElementById('fotoContent').style.display = "none";
    favoriteCodes.style.display = "none";
    myWorld.style.display = "none";
    letsTalk.style.display = "none";
    content.style.display = "none";
    document.getElementById('contactContent').style.display = "none";
    // document.getElementById('menu').style.display = "block";
    document.getElementById('carruselContent').style.display = "block";
    var elems = document.querySelectorAll('.carousel');
    instances = M.Carousel.init(elems, {
      onCycleTo: (element) => {
        document.getElementById("carouselDescription").innerHTML = `<ul>${element.getAttribute('data-description')}</ul>`;
        document.getElementById("carouselDescription").innerHTML += `<ul href="${element.href}" target="_blank">${element.href}</ul>`;
      }
    });
  };

  function closeModal() {
    document.getElementById('fotoContent').style.display = "block";
    favoriteCodes.style.display = "block";
    myWorld.style.display = "block";
    letsTalk.style.display = "block";
    content.style.display = "block";
    // document.getElementById('menu').style.display = "none";
    document.getElementById('carruselContent').style.display = "none";
    document.getElementById('contactContent').style.display = "none";
  };

  // Inicializaciones de Materialize

  document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.carousel');
    var instances = M.Carousel.init(elems);
  });

  document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.fixed-action-btn');
    var instances2 = M.FloatingActionButton.init(elems, {
      toolbarEnabled: true
    });
  });

  // document.addEventListener('DOMContentLoaded', function () {
  //   var elems = document.querySelectorAll('.modal');
  //   var instances = M.Modal.init(elems, {
  //     preventScrolling: false,
  //     opacity: 1
  //   });
  // });

  // Modal con Info de contacto
  function myContacInfo() {
    // var instance = M.Modal.getInstance(document.getElementById('modal1'));
    // instance.open();
    document.getElementById('fotoContent').style.display = "none";
    favoriteCodes.style.display = "none";
    myWorld.style.display = "none";
    letsTalk.style.display = "none";
    content.style.display = "none";
    document.getElementById('carruselContent').style.display = "none";
    // document.getElementById('menu').style.display = "block";
    document.getElementById('contactContent').style.display = "block";

  }