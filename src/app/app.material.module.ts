import { NgModule } from '@angular/core';
import { MatButtonModule, MatCheckboxModule, MatSliderModule } from '@angular/material';

@NgModule({

    imports: [MatButtonModule, MatCheckboxModule, MatSliderModule],
    exports: [MatButtonModule, MatCheckboxModule, MatSliderModule],
})
export class AppMaterialModule { }