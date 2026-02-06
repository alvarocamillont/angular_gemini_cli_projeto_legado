import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-digimon-list',
  standalone: false,
  templateUrl: './digimon-list.html',
  styleUrl: './digimon-list.css',
})
export class DigimonList implements OnInit, OnDestroy {
  digimons: any[] = [];
  loading = false;
  private sub: Subscription = new Subscription();

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.loading = true;
    // Padrão antigo: subscribe manual, sem tipagem e lógica de loading manual
    this.sub = this.http.get<any>('https://digi-api.com/api/v1/digimon?pageSize=10')
      .subscribe({
        next: (response) => {
          this.digimons = response.content;
          this.loading = false;
        },
        error: (err) => {
          console.error(err);
          this.loading = false;
        }
      });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  onSelect(digimon: any) {
    alert('Você escolheu o: ' + digimon.name);
  }
}