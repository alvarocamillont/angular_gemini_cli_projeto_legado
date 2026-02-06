import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { DigimonList } from './digimon-list';

describe('DigimonList', () => {
  let component: DigimonList;
  let fixture: ComponentFixture<DigimonList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DigimonList],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DigimonList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});