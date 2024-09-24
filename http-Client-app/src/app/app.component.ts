import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PersonDetailComponent } from "./components/person-detail/person-detail.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PersonDetailComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'http-Client-app';
}
