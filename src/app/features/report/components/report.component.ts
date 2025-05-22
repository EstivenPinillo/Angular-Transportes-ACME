import { Component, inject } from '@angular/core';
import { ReportService } from '../services/report.service';
import { LogoutComponent } from "../../auth/components/logout/logout.component";

@Component({
    selector: 'report-acme',
    imports: [LogoutComponent],
    templateUrl: './report.component.html',
    styleUrl: './report.component.scss'
})
export class ReportComponent {

    reportService = inject(ReportService);

    createReport() {
        return this.reportService.createReport();
    }

}
