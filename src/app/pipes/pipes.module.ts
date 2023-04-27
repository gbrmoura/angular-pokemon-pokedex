import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobalModule } from 'src/app/global.module';
import { CapitalizeAlTextPipe } from 'src/app/pipes';

@NgModule({
	declarations: [CapitalizeAlTextPipe],
	imports: [CommonModule, GlobalModule],
	exports: [CapitalizeAlTextPipe],
})
export class PipesModule {}
