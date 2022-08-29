import { Component, OnInit } from '@angular/core';
import { Cita } from '../cita';
import { CitaService } from '../cita.service';


@Component({
  selector: 'app-citas',
  templateUrl: './citas.component.html',
  styleUrls: ['./citas.component.css'],
})
export class CitasComponent implements OnInit {
  citas: Cita[] = [];  
  

  constructor(private citaService: CitaService) {}
  
  getCitas(): void {
    this.citaService.getCitas()
    .subscribe(citas => this.citas = citas);
  }   

  ngOnInit(): void {
    this.getCitas();
  }
}
