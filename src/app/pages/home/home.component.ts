import { Component } from '@angular/core';
import { ServiciosComponent } from '../../components/servicios/servicios.component';
import { NosotrosComponent } from '../../components/nosotros/nosotros.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { HeroComponent } from '../../components/hero/hero.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { ContactoComponent } from '../../components/contacto/contacto.component';

@Component({
  selector: 'app-home',
  imports: [
    ServiciosComponent,
    NosotrosComponent,
    NavbarComponent,
    HeroComponent,
    FooterComponent,
    ContactoComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
