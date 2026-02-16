import { Component } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-landing',
  imports: [],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent {


  ngAfterViewInit() {
  $('.owl-carousel').owlCarousel({
    loop: true,
    margin: 30,
    dots: true,
    nav: false,
    items: 4,
    responsive: {
      0: { items: 1 },
      600: { items: 2 },
      1024: { items: 3 },
      1366: { items: 4 }
    }
  });
}
}
