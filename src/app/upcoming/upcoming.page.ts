import { Component, OnInit } from '@angular/core';
import { ViewChild, ElementRef } from '@angular/core';

declare var google: any;

@Component({
  selector: 'app-upcoming',
  templateUrl: './upcoming.page.html',
  styleUrls: ['./upcoming.page.scss'],
})
export class UpcomingPage implements OnInit {

  
	view: any;
	buttonIcon: string = "list";

  constructor() {
	this.view = 'map';
   }

  ngOnInit() {
  }

  	changeView(){
    	if(this.view == 'map'){
      		this.view = 'list';
			this.buttonIcon = "map-outline";
    	}else{
      		this.view = 'map';
			this.buttonIcon = "list";
    	}
  	}

  map: any;

  @ViewChild('map', {read:ElementRef, static: false}) mapRef: ElementRef;

  infoWindows: any = [];
  markers: any = [
  	{
  		title: "Decathlon Salt lake",
  		latitude: "-37.5",
  		longitude: "144.5",
		address: 'EP Block, Sector V, Bidhannagar, Kolkata, West Bengal 700091',
		distance: '5 miles',
		image: 'assets/images/cart1.png',
  	},
  	{
  		title: "Croma",
  		latitude: "-37.1",
  		longitude: "144.1",
		address: 'Aurora water front, Street Number 18, Bidhannagar, Kolkata, West Bengal 700091',
		distance: '2 miles',
		image: 'assets/images/cart2.png',
  	},
  	{
  		title: "Kishor Variety Store",
  		latitude: "-37.3",
  		longitude: "144.5",
		address: 'Street Number 18, Mahish Bathan, Sector V, Bidhannagar, Kolkata, West Bengal 700102',
		distance: '500 meters',
		image: 'assets/images/cart3.png',
  	}
  ];

  addMarkersToMap(markers) {
	for(let marker of markers ) {
		let iconBase = 'http://cp-33.hostgator.tempwebhost.net/~a1627unp/dev/hapster/';
		let position = new google.maps.LatLng(marker.latitude, marker.longitude);
		let mapMarker = new google.maps.Marker({
			position: position,
			title: marker.title,
			latitude: marker.latitude,
			longitude: marker.longitude,
			address: marker.address,
			distance: marker.distance,
			image: marker.image,
			icon: iconBase + 'map_icon.png'
		});

		mapMarker.setMap(this.map);
		this.addInfoWindowsToMap(mapMarker);
	}
  }
  addInfoWindowsToMap(marker) {
	  let infoWindowContent = '<ion-item>' +
							  '<ion-thumbnail slot="start">' +
								'<ion-img src="'+ marker.image +'"></ion-img>' +
							  '</ion-thumbnail>' +
							  '<ion-label>' +
								'<h4>'+ marker.title +'</h4>' +
								'<p>'+ marker.address +'</p>' +
								'<small>'+ marker.distance +'</small>' +
							  '</ion-label>' +
							'</ion-item>';

							  let infoWindow = new google.maps.InfoWindow({
								  content: infoWindowContent
							  });

							  marker.addListener('click', () => {
								this.closeAllInfoWindows();
								infoWindow.open(this.map, marker);
							  });
							  this.infoWindows.push(infoWindow);
  }

  ionViewDidEnter() {
   this.showMap();
  }

  closeAllInfoWindows() {
	  for(let window of this.infoWindows) {
		  window.close();
	  }
  }

  showMap() {
  	const location = new google.maps.LatLng(-37.3,144.3);

	const icon = {
		url: 'assets/icon/logo.png', // image url
		scaledSize: new google.maps.Size(30, 30), // scaled size
	};
  	
  	const options = {
  		center: location,
  		zoom: 10,
  		DisableDefaultUI: true,
		icon: icon
  	}
  	this.map = new google.maps.Map(this.mapRef.nativeElement, options);
	  this.addMarkersToMap(this.markers)
  }

}
