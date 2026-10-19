
import { Injectable } from '@angular/core';

export interface Imagen {
  id: number;
  titulo: string;
  descripcion: string;
  url: string;
}

@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  private imagenes: Imagen[] = [
    {
      id: 1,
      titulo: 'Fantasma',
      descripcion: 'Un fantasma aterrador',
      url: 'https://i.pinimg.com/736x/5d/27/b9/5d27b933276dca4d9d8994aef522df10.jpg'
    }
  ];

  constructor() {}

  obtenerImagenes(): Imagen[] {
    return this.imagenes;
  }

  obtenerImagenPorId(id: number): Imagen | undefined {
    return this.imagenes.find(imagen => imagen.id === id);
  }

  agregarImagen(imagen: Imagen): void {
    this.imagenes.push(imagen);
  }
}
