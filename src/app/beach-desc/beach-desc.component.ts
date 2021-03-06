import { Component, OnInit } from '@angular/core';
import {animate, query, stagger, style, transition, trigger} from "@angular/animations";
declare var jquery:any;
declare var $ :any;


@Component({
  selector: 'app-beach-desc',
  templateUrl: './beach-desc.component.html',
  styleUrls: ['./beach-desc.component.css'],
  animations: [
    trigger('childAnimation', [
      transition(':enter', [
        query('.col',style({ opacity: 0, transform: 'translateX(-40px)'})),
        query('.col',
          stagger('500ms', [
            animate('800ms 3s ease-out', style({ opacity: 1, transform: 'translateX(0)'}))
          ]))
      ])
    ])
  ]
})
export class BeachDescComponent implements OnInit {

  myBeachImage = [
    {'image': 'https://picsum.photos/300/200?image=1041'},
    {'image': 'https://picsum.photos/300/200?image=986'},
    {'image': 'https://picsum.photos/300/200?image=970'},
    {'image': 'https://picsum.photos/300/200?image=909'},
    {'image': 'https://picsum.photos/300/200?image=846'},
    {'image': 'https://picsum.photos/300/200?image=653'},
    {'image': 'https://picsum.photos/300/200?image=610'},
  ];

  constructor() { }

  ngOnInit() {
    $("#myBeaches").on("slide.bs.carousel", function(e) {
     let $e = $(e.relatedTarget);
     let idx = $e.index();
      let itemsPerSlide = 1;
     let totalItems = $(".carousel-item").length;

      if (idx >= totalItems - (itemsPerSlide - 4)) {
        let it = itemsPerSlide - (totalItems - idx);
        for (let i = 0; i < it; i++) {
          // append slides to end
          if (e.direction == "left") {
            $(".carousel-item")
              .eq(i)
              .appendTo(".carousel-inner");
          } else {
            $(".carousel-item")
              .eq(0)
              .appendTo(".carousel-inner");
          }
        }
      }
    });

  }

}
