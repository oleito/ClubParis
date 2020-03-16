import { Component, OnInit } from '@angular/core';

import { ConferenceData } from '../../providers/conference-data';
import { ActivatedRoute } from '@angular/router';
import { UserData } from '../../providers/user-data';

declare var google;

/** Cambiar de lugar este codigo */
interface Marker {
  position: {
    lat: number,
    lng: number,
  };
  title: string;
}

@Component({
  selector: 'page-session-map',
  styleUrls: ['./session-map.scss'],
  templateUrl: 'session-map.html'
})
export class SessionMapPage implements OnInit {




  session: any;
  isFavorite = false;
  defaultHref = '';
  sessionId: any;
  map = null;

  constructor(
    private dataProvider: ConferenceData,
    private userProvider: UserData,
    private route: ActivatedRoute
  ) { }
  ngOnInit(): void {
    this.sessionId = this.route.snapshot.paramMap.get('sessionId');
    this.loadMap();
  }

  loadMap() {
    // create a new map by passing HTMLElement
    const mapEle: HTMLElement = document.getElementById('map');
    // create LatLng object
    const myLatLng = { lat: 4.658383846282959, lng: -74.09394073486328 };
    // create map
    this.map = new google.maps.Map(mapEle, {
      center: myLatLng,
      zoom: 12
    });

    google.maps.event.addListenerOnce(this.map, 'idle', () => {
      this.renderMarkers();
      mapEle.classList.add('show-map');
    });
  }

  addMarker(marker: Marker) {
    return new google.maps.Marker({
      position: marker.position,
      map: this.map,
      title: marker.title
    });
  }

  markers: Marker[] = [
    {
      position: {
        lat: 4.658383846282959,
        lng: -74.09394073486328,
      },
      title: 'Parque Simón Bolivar'
    },
    {
      position: {
        lat: 4.667945861816406,
        lng: -74.09964752197266,
      },
      title: 'Jardín Botánico'
    },
    {
      position: {
        lat: 4.676802158355713,
        lng: -74.04825592041016,
      },
      title: 'Parque la 93'
    },
    {
      position: {
        lat: 4.6554284,
        lng: -74.1094989,
      },
      title: 'Maloka'
    },
  ];

  renderMarkers() {
    this.markers.forEach(marker => {
      this.addMarker(marker);
    });
  }

}
