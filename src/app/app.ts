import { Component, signal } from '@angular/core';
import { Header } from "./header/header";
import { Home } from "./home/home";
import { Catalog } from "./catalog/catalog";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [Header, Home, Catalog, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('hello-world');
}
