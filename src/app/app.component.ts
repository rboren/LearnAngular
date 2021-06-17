import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  loadedFeature = 'recipe';

  onNavigate(feature: string){
    console.log("Loaded Feature: " + feature);
    this.loadedFeature = feature;
  }
}
