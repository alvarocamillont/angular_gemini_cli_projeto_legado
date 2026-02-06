import { Component, inject, resource } from '@angular/core';
import { DigimonService } from '../digimon.service';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-digimon-list',
  standalone: true,
  templateUrl: './digimon-list.html',
  styleUrl: './digimon-list.css',
})
export class DigimonList {
  private digimonService = inject(DigimonService);

  digimonsResource = resource({
    loader: () => firstValueFrom(this.digimonService.getDigimons())
  });

  onSelect(digimon: any) {
    alert('Você escolheu o: ' + digimon.name);
  }
}
