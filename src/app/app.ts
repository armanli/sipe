import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Sidebar} from './shared/components/struture/sidebar/sidebar';
import {Header} from './shared/components/struture/header/header';

@Component({
  imports: [RouterOutlet, Sidebar, Header],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('sipe');
}
