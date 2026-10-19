
import { Component, OnInit } from '@angular/core';
import { Imagen, ImagesService } from '../../services/images.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: false,
})
export class Tab2Page implements OnInit {

  fotos: Imagen[] = [];

  constructor(private imagesService: ImagesService) {}

  ngOnInit() {
    this.fotos = this.imagesService.obtenerImagenes();
  }

  agregarFoto() {
    const nuevaFoto: Imagen = {
      id: Date.now(),
      titulo: 'Nueva ilustración',
      descripcion: 'Ilustración agregada a la galería',
      url: 'https://picsum.photos/400/400?random=' + Date.now()
    };

    this.imagesService.agregarImagen(nuevaFoto);
  }
}
