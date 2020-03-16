import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-collapse',
  templateUrl: './collapse.component.html',
  styleUrls: ['./collapse.component.css']
})
export class CollapseComponent implements OnInit {

  invoiceReviewShow = false;
  dashboardSettingsShow = false;
  dataManagementShow = false;
  invoiceLimitsShow = false;

  adminForm: FormGroup;
  constructor() { }

  ngOnInit() {
    this.adminForm = new FormGroup({
      'urlLocation': new FormControl('', [Validators.required])
    });
    this.invoiceReviewShow = true;
  }

  onSubmitForm() {

  }

}