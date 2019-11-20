import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';

@Component({
    selector: 'dashboard-cmp',
    moduleId: module.id,
    templateUrl: 'dashboard.component.html'
})

export class DashboardComponent implements OnInit{

  public data: Observable<any[]>;
  settings = {
    columns: {
      fecha: {
        title: 'Fecha'
      },
      hora: {
        title: 'Hora'
      },
      Temperatura: {
        title: 'Temperatura'
      }
    }
  };

  constructor(db: AngularFirestore) {
    this.data = db.collection('/data').valueChanges();
  }
  
  ngOnInit(){
  }
}
