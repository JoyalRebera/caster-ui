import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { DashboardService } from '../../dashboard-service/dashboard.service';

@Component({
  selector: 'app-dashboard-table',
  templateUrl: './dashboard-table.component.html',
  styleUrls: ['./dashboard-table.component.css']
})

export class DashboardTableComponent implements OnInit {
  displayedColumns: string[] = [
    'audit_id',
    'entity',
    'entity_type',
    'audit_type',
    'single_Group_audit',
    'overall_complians',
    'audit_year',
    'audit_status'];

  user: any = localStorage.getItem("userLog")
  TableFilterSelect: any;
  dataSource: any;//tables
  selectedProduct = ''
  istableContent: boolean = false;

  constructor(private dashboardTableElements: DashboardService) { }

  ngOnInit(): void {
    if (this.user) {
      // table filter
      let params = { trade: this.selectedProduct }
      this.dashboardTableFilter()
      //get table elements
      this.getTableElement(params)

    }
    else {
      null
    }
  }

  dashboardSelectChange(element: any) {
    this.getTableElement({ trade: element.value })
  }

  // table filter
  dashboardTableFilter() {
    this.dashboardTableElements.getDashboardTableFilter()
      .subscribe((res) => {
        this.TableFilterSelect = res.data.results
        this.TableFilterSelect.unshift({ name: 'All' })
        // for set default value
        this.selectedProduct = this.TableFilterSelect[0]
      },
        error => {
          console.log('table filter error occured', error)
        })
  }

  //get table elements
  getTableElement(params: { trade: string }) {
    this.dashboardTableElements.getDashboardTableElement(params)
      .subscribe((res) => {
        let Tabledata = res.data.results
        this.dataSource = new MatTableDataSource(Tabledata)
        if (Tabledata.length==0) {
          console.log('data not found', Tabledata)
          this.istableContent=false

        }
        else{
          this.istableContent=true
        }
        this.dataSource.filteredData[0].products.push({id:'111', name: "cookies" })
        this.dataSource.filteredData[0].products.push({id:'112', name: "candy" })
        this.dataSource.filteredData[0].products.push({id:'113',name: "sandwitch" })
      },
        error => {
          console.log('error occured getDashboardTableElement', error)
        })
  }
  //returnProductsinToolTip 
  returnProductsinToolTip(products: any) {
    return products.map((value: any) => value.name).join(', ')
  }

}
