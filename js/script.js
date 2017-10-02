;(function($){

	$(window).on('load', function() {
            
        var map = new google.maps.Map(document.getElementById('ba_map'), {
          zoom: 16,
          center: {lat: 49.5685276, lng: 34.58543170000007}
        });
        var geocoder = new google.maps.Geocoder();

        document.getElementById('ba_button').addEventListener('click', function() {
          geocodeAddress(geocoder, map);
        });


      function geocodeAddress(geocoder, resultsMap) {
        var address = document.getElementById('ba_address').value;
        geocoder.geocode({'address': address}, function(results, status) {
          if (status === 'OK') {
            resultsMap.setCenter(results[0].geometry.location);
            var marker = new google.maps.Marker({
              map: resultsMap,
              position: results[0].geometry.location
            });
          } else {
            alert('Geocode was not successful for the following reason: ' + status);
          }
        });
      }


    });


     
  }) (jQuery);

// {lat: 49.5685276, lng: 34.58543170000007}