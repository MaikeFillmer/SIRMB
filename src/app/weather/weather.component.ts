import { Component, OnInit } from '@angular/core';
import { SharedService } from "./../shared.service";
 
@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styles: []
 
})
export class WeatherComponent implements OnInit {
  id_city: string = "";
  id_state: string = "";
  op_city: string = "";
  op_country: string = "";
  op_hour: string = "";
  op_text: string = "";
  op_temp: string = "";
  op_pop: string = "";
  entries = [];
  times = [];
  selectedEntry: { [key: string]: any } = {
    value: null,
    description: null
  };

  constructor(private _sharedService: SharedService) {
  }
 
  ngOnInit() {
  	this.entries = [
      {
        description: 'Today',
        value: 1
      },
      {
        description: 'Tomorrow',
        value: 2
      }
    ];

    this.times = [
    {
    	description: '12:00 AM',
    	value: 0
    },
    {
    	description: '1:00 AM',
    	value: 1
    },
    {
    	description: '2:00 AM',
    	value: 2
    },
    {
    	description: '3:00 AM',
    	value: 3
    },
    {
    	description: '4:00 AM',
    	value: 4
    },
    {
    	description: '5:00 AM',
    	value: 5
    },
    {
    	description: '6:00 AM',
    	value: 6
    },
    {
    	description: '7:00 AM',
    	value: 7
    },
    {
    	description: '8:00 AM',
    	value: 8
    },
    {
    	description: '9:00 AM',
    	value: 9
  	},
    {
    	description: '10:00 AM',
    	value: 10
    },
    {
    	description: '11:00 AM',
    	value: 11
    },
    {
    	description: '12:00 PM',
    	value: 12
    },
    {
    	description: '1:00 PM',
    	value: 13
    },
    {
    	description: '2:00 PM',
    	value: 14
    },
    {
    	description: '3:00 PM',
    	value: 15
    },
    {
    	description: '4:00 PM',
    	value: 16
    },
    {
    	description: '5:00 PM',
    	value: 17
    },
    {
    	description: '6:00 PM',
    	value: 18
    },
    {
    	description: '7:00 PM',
    	value: 19
    },
    {
    	description: '8:00 PM',
    	value: 20
    },
    {
    	description: '9:00 PM',
    	value: 21
    },
    {
    	description: '10:00 PM',
    	value: 22
    },
    {
    	description: '11:00 PM',
    	value: 23
    }
    ]
    
    // select the second one
    if(this.entries) {
      this.onSelectionChange(this.entries[1]);  
    };

  }

  onSelectionChange(entry) {
    // clone the object for immutability
    	this.selectedEntry = Object.assign({}, this.selectedEntry, entry);
  	}

  callWeatherService() { 
    this._sharedService.findWeather(this.id_city, this.id_state)
      .subscribe(
      lstresult => { 
        this.op_city = this.id_city;
        this.op_country = this.id_state;
        this.op_hour = lstresult["hourly_forecast"][0]["FCTTIME"]["pretty"];
        this.op_text = lstresult["hourly_forecast"][0]["wx"];
        this.op_temp = lstresult["hourly_forecast"][0]["temp"]["english"];
        this.op_pop = lstresult["hourly_forecast"][0]["pop"];
        console.log(lstresult);
      },
      error => {
        console.log("Error. The findWeather result JSON value is as follows:");
        console.log(error);
      }
      ); 
  }
}

