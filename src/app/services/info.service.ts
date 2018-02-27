import { Injectable } from '@angular/core';
import { Http } from '@angular/http';


@Injectable()
export class InfoService {

  informacion: any = {};
  cargada = false;

  constructor(public http: Http) {

    this.http.get('assets/data.json')
            .subscribe(data => {
              this.cargada = true;
              this.informacion = data.json();
            });
   }

}
