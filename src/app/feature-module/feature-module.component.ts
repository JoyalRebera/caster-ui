import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-feature-module',
  templateUrl: './feature-module.component.html',
  styleUrls: ['./feature-module.component.css']
})

export class FeatureModuleComponent implements OnInit {
  @ViewChild(MatSidenav) sidenav!: MatSidenav
  constructor(private observer: BreakpointObserver) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.observer.observe(['(max-width:992px)']).subscribe((res) => {
        if (res.matches) {
          this.sidenav.mode = 'over'
          this.sidenav.close();
        }
        else {
          this.sidenav.mode = 'side'
          this.sidenav.open();
        }
      })
    }, 0)

  }

}
