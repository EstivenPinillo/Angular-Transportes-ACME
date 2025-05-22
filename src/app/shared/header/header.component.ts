import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { LogoutComponent } from "../../features/auth/components/logout/logout.component";


@Component({
  selector: 'header-acme',
  imports: [RouterLink, RouterLinkActive, LogoutComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
