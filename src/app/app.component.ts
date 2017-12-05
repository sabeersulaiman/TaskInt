import { Component } from '@angular/core';
import { DogService } from './services/dog.service';
import { DogBreeds, DogPic } from './models/dog.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  dogList: string[];
  dog: DogPic;
  selectedDog: string;

  constructor(private dogService: DogService) {
    dogService.GetAllDogBreeds().subscribe(
      (response: DogBreeds) => {
        this.dogList = response.message;
      }
    );
  }

  DogClick(BreedName: string) {
    this.dogService.GetRandomBreedImage(BreedName).subscribe(
      (response: DogPic) => {
        this.dog = response;
        this.selectedDog = BreedName;
      }
    )
  }
}
