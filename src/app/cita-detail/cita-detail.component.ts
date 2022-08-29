import { Component, OnInit, Input } from '@angular/core';
import { Cita } from '../cita';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { CitaService } from '../cita.service';
@Component({
  selector: 'app-cita-detail',
  templateUrl: './cita-detail.component.html',
  styleUrls: ['./cita-detail.component.css']
})
export class CitaDetailComponent implements OnInit {

  cita: Cita | undefined;

  constructor(
    private route: ActivatedRoute,
    private citaService: CitaService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getCita();
  }

  getCita(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.citaService.getHero(id)
      .subscribe(cita => this.cita = cita);
  }

  goBack(): void {
    this.location.back();
  }

}
