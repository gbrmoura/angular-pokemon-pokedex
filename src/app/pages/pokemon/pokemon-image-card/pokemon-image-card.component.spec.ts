import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonImageCardComponent } from './pokemon-image-card.component';

describe('PokemonImageCardComponent', () => {
	let component: PokemonImageCardComponent;
	let fixture: ComponentFixture<PokemonImageCardComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [PokemonImageCardComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(PokemonImageCardComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
