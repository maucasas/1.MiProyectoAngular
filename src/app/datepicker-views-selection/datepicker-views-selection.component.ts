import { Component, OnInit } from '@angular/core';
import { DatepickerOptions, NgDatepickerComponent  } from 'ng2-datepicker';
import * as frLocale from 'date-fns/locale/fr';

@Component({
  selector: 'app-datepicker-views-selection',
  templateUrl: './datepicker-views-selection.component.html',
  styleUrls: ['./datepicker-views-selection.component.css']
})
export class DatepickerViewsSelectionComponent implements OnInit {
dateOptions: DatepickerOptions = {
  minYear: new Date(2017, 8, null),
  maxYear: new Date(2018, 8, null),
  displayFormat: ' MMM YYYY',
  barTitleFormat: 'MMM YYYY',
  dayNamesFormat: 'dd',
  firstCalendarDay: 0,
  locale: frLocale,
  minDate: new Date(Date.now()),
  maxDate: new Date(Date.now()),
  barTitleIfEmpty: 'Click to Selected a Date',
  placeholder: 'Click to Selected a Date',
  addClass: 'form-control',
  addStyle: {},
  fieldId: 'my-date-picker',
  useEmptyBarTitle: false,
};

  constructor() {
    // console.log(this.options.minDate);
   }

  ngOnInit() {
  }
}



