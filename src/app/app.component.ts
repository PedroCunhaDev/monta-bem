import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Monta Bem';

  public navItems = [
    {
      title: 'Procurar',
      img: ''
    },
    {
      title: 'Meu carrinho',
      img: ''
    },
    {
      title: 'Catálogo',
      img: ''
    },
    {
      title: 'Como Montar',
      img: ''
    }
  ];

  public navItemsBottom = [
    {
      title: 'Conta',
      img: ''
    },
    {
      title: 'Idioma',
      img: ''
    },
    {
      title: 'Definições',
      img: ''
    }]
}
