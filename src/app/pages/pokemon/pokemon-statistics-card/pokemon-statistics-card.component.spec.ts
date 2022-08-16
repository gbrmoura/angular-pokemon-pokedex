import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonStatisticsCardComponent } from './pokemon-statistics-card.component';

describe('PokemonStatisticsCardComponent', () => {
  let component: PokemonStatisticsCardComponent;
  let fixture: ComponentFixture<PokemonStatisticsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonStatisticsCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokemonStatisticsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
