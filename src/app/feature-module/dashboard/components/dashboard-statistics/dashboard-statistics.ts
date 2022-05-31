import { DashboardService } from '../../dashboard-service/dashboard.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-statistics',
  templateUrl: './dashboard-statistics.html',
  styleUrls: ['./dashboard-statistics.css']
})
export class DashboardStatisticsComponent implements OnInit {

  displayStatistics= {
    totalAudit: '',
    certified: '',
    approved: '',
    completed: '',
    ongoing: '',
    pending: ''
  };

  constructor(private dashboardService: DashboardService) { }
  user: any = localStorage.getItem("userLog")

  ngOnInit(): void {
    if (this.user) {

      this.dashboardService.getDashboardStatistics()
        .subscribe((res) => {
          this.displayStatistics.totalAudit = res.data.total_sys_certifies 
          this.displayStatistics.certified=res.data.total_transactions
          this.displayStatistics.approved=res.data.operators
          this.displayStatistics.completed=res.data.issued_trans_count
          this.displayStatistics.ongoing=res.data.draft_trans_count
          this.displayStatistics.pending=res.data.archived_trans_count

        }, error => console.log('Error occured getDashboardStatistics' + error))
    }
  }
}