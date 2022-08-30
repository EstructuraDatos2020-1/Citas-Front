import { Injectable } from '@angular/core';
import { Cita } from './cita';
import { Citas } from './mock-citas';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class CitaService {

  getCitas(): Observable <Cita[]> {
    const citas = of(Citas);
    this.messageService.add('Servicio de Citas: Citas Agendadas')
    return citas;
  }

  getCita(id: number): Observable<Cita> {
    
    const cita = Citas.find(h => h.id === id)!;
    this.messageService.add(`CitaService: fetched cita id=${id}`);
    return of(cita);
  }
  constructor(private messageService: MessageService) { }
}
