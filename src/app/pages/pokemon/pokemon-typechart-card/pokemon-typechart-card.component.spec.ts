import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonTypechartCardComponent } from './pokemon-typechart-card.component';

describe('PokemonTypechartCardComponent', () => {
  let component: PokemonTypechartCardComponent;
  let fixture: ComponentFixture<PokemonTypechartCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonTypechartCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokemonTypechartCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
