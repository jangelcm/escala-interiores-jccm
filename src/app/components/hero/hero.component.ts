import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent implements OnInit, OnDestroy {
  imageLoaded: boolean = false;
  private startX: number | null = null;
  private dragging = false;

  // Métodos para swipe
  onPointerDown(event: TouchEvent | MouseEvent) {
    this.dragging = true;
    if (event instanceof TouchEvent) {
      this.startX = event.touches[0].clientX;
    } else {
      this.startX = event.clientX;
    }
  }

  onPointerMove(event: TouchEvent | MouseEvent) {
    if (!this.dragging || this.startX === null) return;
    let currentX = 0;
    if (event instanceof TouchEvent) {
      currentX = event.touches[0].clientX;
    } else {
      currentX = event.clientX;
    }
    // No acción aquí, solo para posible feedback visual
  }

  onPointerUp(event: TouchEvent | MouseEvent) {
    if (!this.dragging || this.startX === null) return;
    let endX = 0;
    if (event instanceof TouchEvent) {
      endX = event.changedTouches[0].clientX;
    } else {
      endX = event.clientX;
    }
    const diff = endX - this.startX;
    if (Math.abs(diff) > 50) {
      if (diff < 0) {
        this.nextSlide(); // swipe izquierda
      } else {
        this.prevSlide(); // swipe derecha
      }
    }
    this.dragging = false;
    this.startX = null;
  }

  prevSlide() {
    this.currentIndex =
      (this.currentIndex - 1 + this.images.length) % this.images.length;
  }
  images: string[] = [
    '/oficina-grande.jpeg',
    '/living-moderno.jpg',
    '/cocina-blanca.jpg',
    '/sala-estilo.jpg',
  ];

  currentIndex = 0;
  intervalId: any;

  ngOnInit() {
    this.imageLoaded = false;
    this.intervalId = setInterval(() => {
      this.nextSlide();
    }, 5000); // cambia cada 5 segundos
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
    this.imageLoaded = false;
  }

  goToSlide(index: number) {
    this.currentIndex = index;
    this.imageLoaded = false;
  }

  onImageLoad() {
    this.imageLoaded = true;
  }
}
