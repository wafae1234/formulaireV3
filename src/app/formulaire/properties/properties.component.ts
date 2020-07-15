import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.css']
})
export class PropertiesComponent implements OnInit {
  table: any;
  properties: [];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {

    this.table = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        params.get('table'))
    );
    // this.route.queryParams.subscribe(params => {
    //       this.table = params.table;
    //       console.log(this.table);
    // });
  }

}
