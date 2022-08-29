import { Component, OnInit } from '@angular/core';
import { Cita } from '../cita';
import { CitaService } from '../cita.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  citas: Cita[] = [];

  constructor(private citaService: CitaService) { }

  getCitas(): void {
    this.citaService.getCitas()
      .subscribe(citas => this.citas = citas.slice(1, 4));
  }

  ngOnInit(): void {
  }

}
