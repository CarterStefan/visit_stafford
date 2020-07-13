      var map;
      function initMap() {
        map = new google.maps.Map(
            document.getElementById('map'),
            {center: new google.maps.LatLng(52.8072076, -2.1173127), zoom: 16});

        var iconBase =
            'http://maps.google.com/mapfiles/kml/paddle/';

        var icons = {
          food: {
            icon: iconBase + 'grn-blank.png'
          },
          attraction: {
            icon: iconBase + 'blu-blank.png'
          },
          info: {
            icon: iconBase + 'info-i_maps.png'
          }
        };

        var features = [
          {
            position: new google.maps.LatLng(52.80753743824589, -2.1172683617922083),
            type: 'food',
            title: 'pizza express'
          }, {
            position: new google.maps.LatLng(52.807513559894325, -2.1164920390789144),
            type: 'food',
            title: 'The Bakehouse'
          }, {
            position: new google.maps.LatLng(52.80694065799884, -2.1166817024969053),
            type: 'food',
            title: 'The Market Vaultss'
          }, {
            position: new google.maps.LatLng(52.80668482822292, -2.1180137534526633),
            type: 'food',
            title: 'Grove Coffee House'
          }, {
            position: new google.maps.LatLng(52.80587092807219, -2.1183753426146157),
            type: 'food',
            title: 'The Soup Kitchen'
          }, {
            position: new google.maps.LatLng(52.806071977798034, -2.116980032861837),
            type: 'food',
            title: 'The Swan'
          }, {
            position: new google.maps.LatLng(52.80486888552228, -2.1168604587943096),
            type: 'food',
            title: 'Royal Bangkok'
          }, {
            position: new google.maps.LatLng(52.80483665866169, -2.1170096765799973),
            type: 'food',
            title: 'Ayo Gorkhali'
          }, {
            position: new google.maps.LatLng(52.803756592079, -2.1144042312020117),
            type: 'food',
            title: 'The Sun Inn'
          }, {
            position: new google.maps.LatLng(52.80444489138128, -2.1133998484127536),
            type: 'food',
            title: 'Nandos'
          }, {
            position: new google.maps.LatLng(52.80642479101823, -2.116871050282536),
            type: 'food',
            title: 'The Bear'
          }, {
            position: new google.maps.LatLng(52.80637610727258, -2.117107258551081),
            type: 'attraction',
            title: 'Ancient High House'
          }, {
            position: new google.maps.LatLng(52.82024877228274, -2.145856260858241),
            type: 'attraction',
            title: 'Doxey Marshes'
          }, {
            position: new google.maps.LatLng(52.80719662664109, -2.1167741830841336),
            type: 'attraction',
            title: 'Shire Hall Gallery'
          }, {
            position: new google.maps.LatLng(52.80720378578625, -2.115744265416404),
            type: 'attraction',
            title: 'Stafford Gatehouse Theatre'
          }, {
            position: new google.maps.LatLng(52.80398925465019, -2.1203379837765857),
            type: 'attraction',
            title: 'Victoria Park'
          }, {
            position: new google.maps.LatLng(52.797918450118445, -2.147415021577961),
            type: 'attraction',
            title: 'Stafford Castle'
          }
        ];

        // Create markers.
        for (var i = 0; i < features.length; i++) {
          var marker = new google.maps.Marker({
            position: features[i].position,
            icon: icons[features[i].type].icon,
            map: map
          });
        };
      }
    

