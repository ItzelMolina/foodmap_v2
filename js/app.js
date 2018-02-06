/*acceder, crear, pintar*/
/*Función que se jecuta al cargar la página, contiene los eventos a mostrar*/

function loadPage() {

/*pintar*/
    paintRestaurants(data);
    //$('#icon_prefix').keyup(filterRestaurants)/*Filtra los restaurantes*/
    $('.modal').modal();
    //$('a').click(paintModal) /*los muestra en el modal*/
}
/*acceder,crear, pintar*/
/*Función para crear elementos, jalar la información de la data e insertarlos en el html*/
function paintRestaurants(data) {
    for (var i = 0; i < data.length; i++) {
        console.log(data[i]['image']);
        //Creamos elementos con el dom
        var $containerRestaurant = $('<div />', { 'class': 'card' });
        var $name = $('<h3/>');
        var $image = $('<img />');
        var $caracteristicas = $('<a/>', { 'class': 'modales waves-effect waves-light modal-trigger' });
        //Agregamos atributos y textos a nuestros elementos de mi data
        $name.text(data[i]['name']);
        $image.attr('src', data[i]['image']);
        $caracteristicas.attr( 'href','#modal1')
        $caracteristicas.attr('data-name', data[i]['name']);
        $caracteristicas.attr('data-adress', data[i]['adress']);
        $caracteristicas.attr('data-phone', data[i]['phone']);
        $caracteristicas.attr('data-image', data[i]['image']);
        $caracteristicas.text('ver detalle');

      //Damos estructura segun jerarquias de padre e hijos
      $containerRestaurant.append($name);
      $containerRestaurant.append($image);
      $containerRestaurant.append($caracteristicas);
      console.log($containerRestaurant);
      $('#container-card').append($containerRestaurant);

  }
}
        //$caracteristicas.attr('href', '#modal1') *//*modals html structure*/
        /*var $restaurantImage = $('<img />', { 'class': 'image'})
        $restaurantImage.attr('src', data[i]['image']);
        var $restaurantName = $('<h5 />');
        var $restaurantAdress = $('<p />', { 'class': 'adress' })
        var $restaurantPhone = $('<p />', { 'class': 'phone' })

        $restaurant.append($restaurant)
        $restaurant.append($restaurantImage)
        $restaurantCard.append($restaurantName)
        $restaurantCard.append($restaurantAdress)
        $restaurantCard.append($restaurantPhone)
        $restaurantName.append(data[i]['name'])
        $restaurantAdress.append(data[i]['adress'])
        $('#show').append($restaurants)
    }
}

// Función de filtrado de restaurantes según nombre
/*function filterRestaurants() {
    var search = $('#icon_prefix').val().trim().toLowerCase();
    $('h5').each(function() {
        if ($(this).text().toLowerCase().indexOf(search) === -1) {
            $(this).closest('div').hide()
        } else {
            $(this).closest('div').show()
        }
    })
}
*/
// Falta que toma los datos del div donde se genera el evento click y los transfiere al modal

function paintModal() {
  //console.log($(this).data('img'));
  var $name = $(this).data('name');
  var $adress = $(this).data('adress');
  var $phone = $(this).data('phone');
  var $image = $(this).data('image');

  $('#name-modal').text($name);
  $('#adress-modal').text($adress);
  $('#phone-modal').text($phone);
  $('#image-modal').attr('src', image);


}

$(document).on('click', '.modales', paintModal)
$(document).ready(loadPage);
