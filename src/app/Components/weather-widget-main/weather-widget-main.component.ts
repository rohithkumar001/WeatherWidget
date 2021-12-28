import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather-widget-main',
  templateUrl: './weather-widget-main.component.html',
  styleUrls: ['./weather-widget-main.component.css']
})
export class WeatherWidgetMainComponent implements OnInit {

  WeatherData:any;
  WeatherData1:any;
  WeatherData2:any;
  WeatherData3:any;
  WeatherData4:any;
  WeatherData5:any;
  WeatherData6:any;
  WeatherData7:any;
  WeatherData8:any;
  WeatherData9:any;
  WeatherData10:any;
  WeatherData11:any;
  WeatherData12:any;
  WeatherData13:any;
  WeatherData14:any;

  constructor() { }

  ngOnInit() {
    this.WeatherData = {
      main : {},
      isDay: true
    
    };
    this.getWeatherData();
    console.log(this.WeatherData);

    this.WeatherData1 = {
      main : {},
      isDay: true
    
    };
    
    this.getWeatherData1();
    console.log(this.WeatherData1);

    this.WeatherData2 = {
      main : {},
      isDay: true
    
    };
    this.getWeatherData2();
    console.log(this.WeatherData2);

    this.WeatherData3 = {
      main : {},
      isDay: true
    
    };
    this.getWeatherData3();
    console.log(this.WeatherData3);

    this.WeatherData4 = {
      main : {},
      isDay: true
    
    };
    this.getWeatherData4();
    console.log(this.WeatherData4);

    this.WeatherData5 = {
      main : {},
      isDay: true
    
    };
    this.getWeatherData5();
    console.log(this.WeatherData5);

    this.WeatherData6 = {
      main : {},
      isDay: true
    
    };
    this.getWeatherData6();
    console.log(this.WeatherData6);

    this.WeatherData7 = {
      main : {},
      isDay: true
    
    };
    this.getWeatherData7();
    console.log(this.WeatherData7);

    this.WeatherData8 = {
      main : {},
      isDay: true
    
    };
    this.getWeatherData8();
    console.log(this.WeatherData8);

    this.WeatherData9 = {
      main : {},
      isDay: true
    
    };
    this.getWeatherData9();
    console.log(this.WeatherData9);

    this.WeatherData10 = {
      main : {},
      isDay: true
    
    };
    this.getWeatherData10();
    console.log(this.WeatherData10);

    this.WeatherData11 = {
      main : {},
      isDay: true
    
    };
    this.getWeatherData11();
    console.log(this.WeatherData11);

    this.WeatherData12 = {
      main : {},
      isDay: true
    
    };
    this.getWeatherData12();
    console.log(this.WeatherData12);

    this.WeatherData13 = {
      main : {},
      isDay: true
    
    };
    this.getWeatherData13();
    console.log(this.WeatherData13);

    this.WeatherData14 = {
      main : {},
      isDay: true
    
    };
    this.getWeatherData14();
    console.log(this.WeatherData14);

    
  }

  getWeatherData(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q=mumbai&appid=35fded223de3124df08fd36b63cf3226')
    .then(response=>response.json())
    .then(data=>{this.setWeatherData(data);})
    
  }

  setWeatherData(data){
    this.WeatherData = data;
    let sunsetTime = new Date(this.WeatherData.sys.sunset * 1000);
    this.WeatherData.sunset_time = sunsetTime.toLocaleTimeString();
    let currentDate = new Date();
    this.WeatherData.isDay = (currentDate.getTime() < sunsetTime.getTime());
    this.WeatherData.temp_celcius = (this.WeatherData.main.temp - 273.15).toFixed(0);
    this.WeatherData.temp_min = (this.WeatherData.main.temp_min - 273.15).toFixed(0);
    this.WeatherData.temp_max = (this.WeatherData.main.temp_max - 273.15).toFixed(0);
    this.WeatherData.temp_feels_like = (this.WeatherData.main.feels_like - 273.15).toFixed(0);
  }
  getWeatherData1(){
    fetch('http://api.openweathermap.org/data/2.5/weather?q=hyderabad&appid=35fded223de3124df08fd36b63cf3226')
    .then(response=>response.json())
    .then(data=>{this.setWeatherData1(data);})

  }
  setWeatherData1(data){
    this.WeatherData1 = data;
    let sunsetTime = new Date(this.WeatherData1.sys.sunset * 1000);
    this.WeatherData1.sunset_time = sunsetTime.toLocaleTimeString();
    let currentDate = new Date();
    this.WeatherData1.isDay = (currentDate.getTime() < sunsetTime.getTime());
    this.WeatherData1.temp_celcius = (this.WeatherData1.main.temp - 273.15).toFixed(0);
    this.WeatherData1.temp_min = (this.WeatherData1.main.temp_min - 273.15).toFixed(0);
    this.WeatherData1.temp_max = (this.WeatherData1.main.temp_max - 273.15).toFixed(0);
    this.WeatherData1.temp_feels_like = (this.WeatherData1.main.feels_like - 273.15).toFixed(0);
  }

  getWeatherData2(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q=chennai&appid=35fded223de3124df08fd36b63cf3226')
    .then(response=>response.json())
    .then(data=>{this.setWeatherData2(data);})
  }
  setWeatherData2(data){
    this.WeatherData2 = data;
    let sunsetTime = new Date(this.WeatherData2.sys.sunset * 1000);
    this.WeatherData2.sunset_time = sunsetTime.toLocaleTimeString();
    let currentDate = new Date();
    this.WeatherData2.isDay = (currentDate.getTime() < sunsetTime.getTime());
    this.WeatherData2.temp_celcius = (this.WeatherData2.main.temp - 273.15).toFixed(0);
    this.WeatherData2.temp_min = (this.WeatherData2.main.temp_min - 273.15).toFixed(0);
    this.WeatherData2.temp_max = (this.WeatherData2.main.temp_max - 273.15).toFixed(0);
    this.WeatherData2.temp_feels_like = (this.WeatherData2.main.feels_like - 273.15).toFixed(0);
  }

  getWeatherData3(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q=kolkata&appid=35fded223de3124df08fd36b63cf3226')
    .then(response=>response.json())
    .then(data=>{this.setWeatherData3(data);})
  }
  setWeatherData3(data){
    this.WeatherData3 = data;
    let sunsetTime = new Date(this.WeatherData3.sys.sunset * 1000);
    this.WeatherData3.sunset_time = sunsetTime.toLocaleTimeString();
    let currentDate = new Date();
    this.WeatherData3.isDay = (currentDate.getTime() < sunsetTime.getTime());
    this.WeatherData3.temp_celcius = (this.WeatherData3.main.temp - 273.15).toFixed(0);
    this.WeatherData3.temp_min = (this.WeatherData3.main.temp_min - 273.15).toFixed(0);
    this.WeatherData3.temp_max = (this.WeatherData3.main.temp_max - 273.15).toFixed(0);
    this.WeatherData3.temp_feels_like = (this.WeatherData3.main.feels_like - 273.15).toFixed(0);
  }

  getWeatherData4(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q=bengaluru&appid=35fded223de3124df08fd36b63cf3226')
    .then(response=>response.json())
    .then(data=>{this.setWeatherData4(data);})
  }
  setWeatherData4(data){
    this.WeatherData4 = data;
    let sunsetTime = new Date(this.WeatherData4.sys.sunset * 1000);
    this.WeatherData4.sunset_time = sunsetTime.toLocaleTimeString();
    let currentDate = new Date();
    this.WeatherData4.isDay = (currentDate.getTime() < sunsetTime.getTime());
    this.WeatherData4.temp_celcius = (this.WeatherData4.main.temp - 273.15).toFixed(0);
    this.WeatherData4.temp_min = (this.WeatherData4.main.temp_min - 273.15).toFixed(0);
    this.WeatherData4.temp_max = (this.WeatherData4.main.temp_max - 273.15).toFixed(0);
    this.WeatherData4.temp_feels_like = (this.WeatherData4.main.feels_like - 273.15).toFixed(0);
  }

  getWeatherData5(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q=delhi&appid=35fded223de3124df08fd36b63cf3226')
    .then(response=>response.json())
    .then(data=>{this.setWeatherData5(data);})
  }
  setWeatherData5(data){
    this.WeatherData5 = data;
    let sunsetTime = new Date(this.WeatherData5.sys.sunset * 1000);
    this.WeatherData5.sunset_time = sunsetTime.toLocaleTimeString();
    let currentDate = new Date();
    this.WeatherData5.isDay = (currentDate.getTime() < sunsetTime.getTime());
    this.WeatherData5.temp_celcius = (this.WeatherData5.main.temp - 273.15).toFixed(0);
    this.WeatherData5.temp_min = (this.WeatherData5.main.temp_min - 273.15).toFixed(0);
    this.WeatherData5.temp_max = (this.WeatherData5.main.temp_max - 273.15).toFixed(0);
    this.WeatherData5.temp_feels_like = (this.WeatherData5.main.feels_like - 273.15).toFixed(0);
  }

  getWeatherData6(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q=kochi&appid=35fded223de3124df08fd36b63cf3226')
    .then(response=>response.json())
    .then(data=>{this.setWeatherData6(data);})
  }
  setWeatherData6(data){
    this.WeatherData6 = data;
    let sunsetTime = new Date(this.WeatherData6.sys.sunset * 1000);
    this.WeatherData6.sunset_time = sunsetTime.toLocaleTimeString();
    let currentDate = new Date();
    this.WeatherData6.isDay = (currentDate.getTime() < sunsetTime.getTime());
    this.WeatherData6.temp_celcius = (this.WeatherData6.main.temp - 273.15).toFixed(0);
    this.WeatherData6.temp_min = (this.WeatherData6.main.temp_min - 273.15).toFixed(0);
    this.WeatherData6.temp_max = (this.WeatherData6.main.temp_max - 273.15).toFixed(0);
    this.WeatherData6.temp_feels_like = (this.WeatherData6.main.feels_like - 273.15).toFixed(0);
  }

  getWeatherData7(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q=noida&appid=35fded223de3124df08fd36b63cf3226')
    .then(response=>response.json())
    .then(data=>{this.setWeatherData7(data);})
  }
  setWeatherData7(data){
    this.WeatherData7 = data;
    let sunsetTime = new Date(this.WeatherData7.sys.sunset * 1000);
    this.WeatherData7.sunset_time = sunsetTime.toLocaleTimeString();
    let currentDate = new Date();
    this.WeatherData7.isDay = (currentDate.getTime() < sunsetTime.getTime());
    this.WeatherData7.temp_celcius = (this.WeatherData7.main.temp - 273.15).toFixed(0);
    this.WeatherData7.temp_min = (this.WeatherData7.main.temp_min - 273.15).toFixed(0);
    this.WeatherData7.temp_max = (this.WeatherData7.main.temp_max - 273.15).toFixed(0);
    this.WeatherData7.temp_feels_like = (this.WeatherData7.main.feels_like - 273.15).toFixed(0);
  }

  getWeatherData8(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q=indore&appid=35fded223de3124df08fd36b63cf3226')
    .then(response=>response.json())
    .then(data=>{this.setWeatherData8(data);})
  }
  setWeatherData8(data){
    this.WeatherData8 = data;
    let sunsetTime = new Date(this.WeatherData8.sys.sunset * 1000);
    this.WeatherData8.sunset_time = sunsetTime.toLocaleTimeString();
    let currentDate = new Date();
    this.WeatherData8.isDay = (currentDate.getTime() < sunsetTime.getTime());
    this.WeatherData8.temp_celcius = (this.WeatherData8.main.temp - 273.15).toFixed(0);
    this.WeatherData8.temp_min = (this.WeatherData8.main.temp_min - 273.15).toFixed(0);
    this.WeatherData8.temp_max = (this.WeatherData8.main.temp_max - 273.15).toFixed(0);
    this.WeatherData8.temp_feels_like = (this.WeatherData8.main.feels_like - 273.15).toFixed(0);
  }

  getWeatherData9(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q=ahmedabad&appid=35fded223de3124df08fd36b63cf3226')
    .then(response=>response.json())
    .then(data=>{this.setWeatherData9(data);})
  }
  setWeatherData9(data){
    this.WeatherData9 = data;
    let sunsetTime = new Date(this.WeatherData9.sys.sunset * 1000);
    this.WeatherData9.sunset_time = sunsetTime.toLocaleTimeString();
    let currentDate = new Date();
    this.WeatherData9.isDay = (currentDate.getTime() < sunsetTime.getTime());
    this.WeatherData9.temp_celcius = (this.WeatherData9.main.temp - 273.15).toFixed(0);
    this.WeatherData9.temp_min = (this.WeatherData9.main.temp_min - 273.15).toFixed(0);
    this.WeatherData9.temp_max = (this.WeatherData9.main.temp_max - 273.15).toFixed(0);
    this.WeatherData9.temp_feels_like = (this.WeatherData9.main.feels_like - 273.15).toFixed(0);
  }

  getWeatherData10(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q=goa&appid=35fded223de3124df08fd36b63cf3226')
    .then(response=>response.json())
    .then(data=>{this.setWeatherData10(data);})
  }
  setWeatherData10(data){
    this.WeatherData10 = data;
    let sunsetTime = new Date(this.WeatherData10.sys.sunset * 1000);
    this.WeatherData10.sunset_time = sunsetTime.toLocaleTimeString();
    let currentDate = new Date();
    this.WeatherData10.isDay = (currentDate.getTime() < sunsetTime.getTime());
    this.WeatherData10.temp_celcius = (this.WeatherData10.main.temp - 273.15).toFixed(0);
    this.WeatherData10.temp_min = (this.WeatherData10.main.temp_min - 273.15).toFixed(0);
    this.WeatherData10.temp_max = (this.WeatherData10.main.temp_max - 273.15).toFixed(0);
    this.WeatherData10.temp_feels_like = (this.WeatherData10.main.feels_like - 273.15).toFixed(0);
  }

  getWeatherData11(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q=jaipur&appid=35fded223de3124df08fd36b63cf3226')
    .then(response=>response.json())
    .then(data=>{this.setWeatherData11(data);})
  }
  setWeatherData11(data){
    this.WeatherData11 = data;
    let sunsetTime = new Date(this.WeatherData11.sys.sunset * 1000);
    this.WeatherData11.sunset_time = sunsetTime.toLocaleTimeString();
    let currentDate = new Date();
    this.WeatherData11.isDay = (currentDate.getTime() < sunsetTime.getTime());
    this.WeatherData11.temp_celcius = (this.WeatherData11.main.temp - 273.15).toFixed(0);
    this.WeatherData11.temp_min = (this.WeatherData11.main.temp_min - 273.15).toFixed(0);
    this.WeatherData11.temp_max = (this.WeatherData11.main.temp_max - 273.15).toFixed(0);
    this.WeatherData11.temp_feels_like = (this.WeatherData11.main.feels_like - 273.15).toFixed(0);
  }

  getWeatherData12(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q=surat&appid=35fded223de3124df08fd36b63cf3226')
    .then(response=>response.json())
    .then(data=>{this.setWeatherData12(data);})
  }
  setWeatherData12(data){
    this.WeatherData12 = data;
    let sunsetTime = new Date(this.WeatherData12.sys.sunset * 1000);
    this.WeatherData12.sunset_time = sunsetTime.toLocaleTimeString();
    let currentDate = new Date();
    this.WeatherData12.isDay = (currentDate.getTime() < sunsetTime.getTime());
    this.WeatherData12.temp_celcius = (this.WeatherData12.main.temp - 273.15).toFixed(0);
    this.WeatherData12.temp_min = (this.WeatherData12.main.temp_min - 273.15).toFixed(0);
    this.WeatherData12.temp_max = (this.WeatherData12.main.temp_max - 273.15).toFixed(0);
    this.WeatherData12.temp_feels_like = (this.WeatherData12.main.feels_like - 273.15).toFixed(0);
  }

  getWeatherData13(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q=srinagar&appid=35fded223de3124df08fd36b63cf3226')
    .then(response=>response.json())
    .then(data=>{this.setWeatherData13(data);})
  }
  setWeatherData13(data){
    this.WeatherData13 = data;
    let sunsetTime = new Date(this.WeatherData13.sys.sunset * 1000);
    this.WeatherData13.sunset_time = sunsetTime.toLocaleTimeString();
    let currentDate = new Date();
    this.WeatherData13.isDay = (currentDate.getTime() < sunsetTime.getTime());
    this.WeatherData13.temp_celcius = (this.WeatherData13.main.temp - 273.15).toFixed(0);
    this.WeatherData13.temp_min = (this.WeatherData13.main.temp_min - 273.15).toFixed(0);
    this.WeatherData13.temp_max = (this.WeatherData13.main.temp_max - 273.15).toFixed(0);
    this.WeatherData13.temp_feels_like = (this.WeatherData13.main.feels_like - 273.15).toFixed(0);
  }

  getWeatherData14(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q=chandigarh&appid=35fded223de3124df08fd36b63cf3226')
    .then(response=>response.json())
    .then(data=>{this.setWeatherData14(data);})
  }
  setWeatherData14(data){
    this.WeatherData14 = data;
    let sunsetTime = new Date(this.WeatherData14.sys.sunset * 1000);
    this.WeatherData14.sunset_time = sunsetTime.toLocaleTimeString();
    let currentDate = new Date();
    this.WeatherData14.isDay = (currentDate.getTime() < sunsetTime.getTime());
    this.WeatherData14.temp_celcius = (this.WeatherData14.main.temp - 273.15).toFixed(0);
    this.WeatherData14.temp_min = (this.WeatherData14.main.temp_min - 273.15).toFixed(0);
    this.WeatherData14.temp_max = (this.WeatherData14.main.temp_max - 273.15).toFixed(0);
    this.WeatherData14.temp_feels_like = (this.WeatherData14.main.feels_like - 273.15).toFixed(0);
  } 
}