import faker from "faker";
import { Markable } from "./Markable";

export class User implements Markable{
    name: string;
    location: {
        lat: number;
        lng: number;
    };
    constructor() {
        this.name = faker.name.firstName();
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude())
        };
    }
    markerContent(): string {
        return `<h1 style='color:blue;'>User Name: ${this.name}</h1>`;
    }
}
