import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
    selector: 'vehicle-acme',
    imports: [ReactiveFormsModule],
    templateUrl: './vehicle.component.html',
    styleUrl: './vehicle.component.scss'
})
export class VehicleComponent {

    @Input() formGroup!: FormGroup;

}
