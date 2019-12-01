import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { CrudService } from "../../services/crud.service";
import { Sensores } from "../../models/sensores";
import * as moment from 'moment';
import * as Chartist from 'chartist'

@Component({
  selector: 'dashboard-cmp',
  moduleId: module.id,
  templateUrl: 'dashboard.component.html'
})

export class DashboardComponent implements OnInit {
  public data = []
  public finalData = []
  chartData: any = {
    labels: [],
    series: [[]]
  };

  settings = {
    actions: {
      edit: false,
      delete: false,
      add: false
    },
    pager: {
      perPage: 15,
    },
    attr: {
      class: 'table-striped mb-5'
    },
    columns: {
      fecha: {
        filter: false,
        title: 'Date'
      },
      hora: {
        filter: false,
        title: 'Time'
      },
      temperatura: {
        filter: false,
        title: 'Temp (° C)'
      }
    }
  };
  chart: Chartist.IChartistLineChart;

  constructor(private crud: CrudService) { }
  getData() {
    this.crud.getAll()
  }

  ngOnInit() {
    this.crud.getAll().subscribe(item => {
      this.data = item.map(i => {
        let tempRow = i.payload.doc.data();

        return {
          id: i.payload.doc.id,
          fecha: moment(tempRow['fecha']).format('MMM Do YYYY'),
          hora: tempRow['hora'].split(':').map(unit => unit.padStart(2, '0')).join(),
          temperatura: tempRow['temperatura'].toFixed(2)
        } as Sensores
      })

      this.chartData.series[0] = this.data.map(row => row.temperatura);
      new Chartist.Line('.ct-chart', this.chartData);
    })
  }
}
