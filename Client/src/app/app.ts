import { Component, signal } from '@angular/core';
import { NavBar } from './nav-bar/nav-bar';
import { RouterLink, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,NavBar,],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('lesson2');
}
