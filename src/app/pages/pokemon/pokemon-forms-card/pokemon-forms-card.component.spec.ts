import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonFormsCardComponent } from './pokemon-forms-card.component';

describe('PokemonFormsCardComponent', () => {
	let component: PokemonFormsCardComponent;
	let fixture: ComponentFixture<PokemonFormsCardComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [PokemonFormsCardComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(PokemonFormsCardComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
