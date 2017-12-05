import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { DogBreeds, DogPic } from "../models/dog.model";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class DogService {
    dogsUrl: string = "https://dog.ceo/api/";
    
    constructor(
        private http: HttpClient
    ) {
    }

    GetAllDogBreeds(): Observable<DogBreeds> {
        return this.http.get<DogBreeds>(
            this.dogsUrl + 'breeds/list'
        );
    }

    GetRandomBreedImage(BreedName: string): Observable<DogPic> {
        return this.http.get<DogPic>(
            `${this.dogsUrl}breed/${BreedName}/images/random`
        );
    }
}