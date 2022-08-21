import { Component, OnInit } from '@angular/core';
import { Cita } from '../cita';
import { CitaService } from '../cita.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-citas',
  templateUrl: './citas.component.html',
  styleUrls: ['./citas.component.css'],
})
export class CitasComponent implements OnInit {
  citas: Cita[] = [];

  selectedCita?: Cita;
  
  

  constructor(private citaService: CitaService, private messageService: MessageService) {}
  
  getCitas(): void {
    this.citaService.getCitas()
    .subscribe(citas => this.citas = citas);
  }

  onSelect(cita: Cita): void {
    this.selectedCita = cita;
    this.messageService.add('Compoente de Cita: Se ha seleccionado la cita con el id=${cita.id}');
  }  

  ngOnInit(): void {
    this.getCitas();
  }
}
