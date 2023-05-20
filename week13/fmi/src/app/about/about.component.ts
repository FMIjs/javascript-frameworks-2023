import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  constructor(private activatedRoute: ActivatedRoute) {
    console.log(this.activatedRoute.snapshot.params);

    this.activatedRoute.params.subscribe(console.log);
  }
}
