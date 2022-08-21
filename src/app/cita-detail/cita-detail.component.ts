import { Component, OnInit, Input } from '@angular/core';
import { Cita } from '../cita';

@Component({
  selector: 'app-cita-detail',
  templateUrl: './cita-detail.component.html',
  styleUrls: ['./cita-detail.component.css']
})
export class CitaDetailComponent implements OnInit {

  @Input() cita?: Cita;

  constructor() { }

  ngOnInit(): void {
  }

}
