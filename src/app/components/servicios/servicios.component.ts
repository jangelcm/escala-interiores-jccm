import { Component, signal } from '@angular/core';

export interface Servicios {
  id: number;
  imgUrl: string;
  nombre: string;
}

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrl: './servicios.component.css',
})
export class ServiciosComponent {
  listServicios = signal<Servicios[]>([
    {
      id: 1,
      nombre: 'DISEÑO DE VIVIENDA - SURCO',
      imgUrl: 'vivienda-surco.jpg',
    },
    {
      id: 2,
      nombre: 'DISEÑO DE VIVIENDA - MIRAFLORES',
      imgUrl: 'vivienda-sanisidro.jpg',
    },
    {
      id: 3,
      nombre: 'DISEÑO DE NEGOCIO - CHORRILLOS',
      imgUrl: 'negocio-chorrillos.jpg',
    },
    {
      id: 4,
      nombre: 'DISEÑO DE CASA DE PERRO - CHORRILLOS',
      imgUrl: 'negocio-chorrillos.jpg',
    },
    {
      id: 5,
      nombre: 'DISEÑO DE CASA DE PERRO - CHORRILLOS',
      imgUrl: 'vivienda-sanisidro.jpg',
    },
  ]);
  numeroPagina = signal<number>(0);
  pageSize = 3;

  icono_button_inicio: string = '<';
  icono_button_fin: string = '>';

  get pagedServicios() {
    const start = this.numeroPagina() * this.pageSize;
    return this.listServicios().slice(start, start + this.pageSize);
  }

  avanzar() {
    if (
      (this.numeroPagina() + 1) * this.pageSize <
      this.listServicios().length
    ) {
      this.numeroPagina.update((page) => page + 1);
    }
  }

  retroceder() {
    if (this.numeroPagina() > 0) {
      this.numeroPagina.update((page) => page - 1);
    }
  }
}
