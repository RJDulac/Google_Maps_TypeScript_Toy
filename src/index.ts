//import red from "./User"; //can be any name. In TS never use default statements. It's not convention

/// <reference types="@types/google.maps" />

import { User } from './User';
import { Company } from "./Company";

//typeScript is stupid, so you need to assign an element this way.
// let mapID;
// mapID = document.getElementById("map")
// const mapElement = mapID;


//can also tell TypeScript it's an html element
// const map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
//     zoom: 1,
//     center: {
//         lat: 0,
//         lng: 0
//     }
// });

