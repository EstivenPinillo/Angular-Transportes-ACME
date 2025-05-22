import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ReportComponent } from '../../features/report/components/report.component';
import { HeaderComponent } from "../../shared/header/header.component";
import { LogoutComponent } from "../../features/auth/components/logout/logout.component";


@Component({
  selector: 'acme',
  imports: [RouterOutlet, ReportComponent, HeaderComponent, LogoutComponent],
  templateUrl: './acme.component.html',
  styleUrl: './acme.component.scss'
})
export class AcmeComponent {

}
