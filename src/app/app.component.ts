import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Personagens', url: '/folder/Personagens', icon: 'mail' },
    { title: 'Episódios', url: '/folder/Episódios', icon: 'paper-plane' },
    { title: 'Quotes', url: '/folder/Quotes', icon: 'heart' },
    { title: 'Assassinatos', url: '/folder/Assassinatos', icon: 'archive' },
  ];
  constructor() {}
}
