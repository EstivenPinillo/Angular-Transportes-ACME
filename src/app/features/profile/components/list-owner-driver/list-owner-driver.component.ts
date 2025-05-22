import { Component, inject} from '@angular/core';
import { ProfileService } from '../../services/profile.service';
import { ownerDriverResponse } from '../../interfaces/profile.interface';

@Component({
  selector: 'list-owner-driver',
  imports: [],
  templateUrl: './list-owner-driver.component.html',
  styleUrl: './list-owner-driver.component.scss'
})
export class ListOwnerDriverComponent {

    profileService = inject(ProfileService);
    profileOwnerDriver: ownerDriverResponse[] = [];


    subscribe = this.profileService.getListProfile().subscribe({
                next: (data) => {
                    this.profileOwnerDriver = data;
                },
                error: (error) => {
                    console.error(error);
                }
            });


}
