import { Component, OnInit } from '@angular/core';

interface Productos {
  titulo: string;
  subtitulo: string;
  descripcion: string;
  precio: number;
  estado: string;
  imagen: string;
}

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.page.html',
  styleUrls: ['./catalogo.page.scss'],
})
export class CatalogoPage implements OnInit {

  public catalogo: string = 'Catalogo';

  public productos: Productos[] = [

    {
      titulo: 'Aorus B450',
      subtitulo: 'B450 Aorus Pro Wifi (rev. 1.x)',
      descripcion: 'Esta placa madre está diseñada para ser compatible con procesadores AMD Ryzen de segunda generación y posteriores, y se basa en el chipset B450.',
      precio: 120000,
      estado: 'Disponible',
      imagen: 'assets/images/b450.png'
    },
    {
      titulo: 'Producto 2',
      subtitulo: 'B450 Aorus Pro Wifi (rev. 1.x)',
      descripcion: 'Descripcion del producto 1',
      precio: 100,
      estado: 'Disponible',
      imagen: 'https://via.placeholder.com/150'
    },
    {
      titulo: 'Producto 3',
      subtitulo: 'B450 Aorus Pro Wifi (rev. 1.x)',
      descripcion: 'Descripcion del producto 1',
      precio: 100,
      estado: 'Disponible',
      imagen: 'https://via.placeholder.com/150'
    }

  ]

  constructor() { }

  ngOnInit() {
  }

}
