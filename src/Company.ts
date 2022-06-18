import faker, { fake } from 'faker';
import { Markable } from './Markable';

export class Company implements Markable{
    companyName: string;
    catchPhrase: string;
    location: {
        lat: number;
        lng: number;
    }

    constructor() {
        this.companyName = faker.company.companyName();
        this.catchPhrase = faker.company.catchPhrase();

        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude())
        };
    }
    markerContent(): string {
        return `
        <div style='text-align:center;'>
        <h1>Company Name: ${this.companyName}</h1>
        <h3 style='color:gray;'>Catchphrase: ${this.catchPhrase}</h3>
        </div>
        `;
    };
}