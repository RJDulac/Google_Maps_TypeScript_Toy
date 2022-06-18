import { Markable } from "./Markable";

//encapsulate google map
export class CustomMap {
    private googleMap: google.maps.Map;

    constructor(divId: string) {
        this.googleMap = new google.maps.Map(document.getElementById(divId) as HTMLElement, {
            zoom: 1,
            center: {
                lat: 0,
                lng: 0
            }
        });
    }
    
    addMarker(marker: Markable): void {
       const mark = new google.maps.Marker({
            map: this.googleMap,
            position: {
                lat: marker.location.lat,
                lng: marker.location.lng
            }
        });

        mark.addListener("click", ()=> {
            const infoWindow = new google.maps.InfoWindow({
                content: marker.markerContent()
            });

            infoWindow.open(this.googleMap, mark)

        });
    }
}