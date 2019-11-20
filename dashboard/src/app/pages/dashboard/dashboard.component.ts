import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { CrudService } from "../../services/crud.service";
import { Sensores } from "../../models/sensores";

@Component({
    selector: 'dashboard-cmp',
    moduleId: module.id,
    templateUrl: 'dashboard.component.html'
})

export class DashboardComponent implements OnInit{
  public data = []
  public finalData = []
  settings = {
    columns: {
      fecha: {
        title: 'Fecha'
      },
      hora: {
        title: 'Hora'
      },
      temperatura: {
        title: 'Temperatura'
      }
    }
  };

  constructor(private crud: CrudService) {}
  getData(){
    this.crud.getAll()
  }

  ngOnInit(){
    console.log(this.crud.getAll().subscribe(item => {
      this.data = item.map(i => {
        return{
          id: i.payload.doc.id,
          ...i.payload.doc.data()
        } as Sensores
      })
    }))
  }
}
