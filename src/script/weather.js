class weatherToday {
  constructor(resp) {
    this.name__ = resp.location.name;
    this.country__ = resp.location.country;
    this.date__ = resp.location.localtime.split(" ")[0];
    this.time__ = resp.location.localtime.split(" ")[1];
    this.hour__ = this.time.split(":")[0]; 
    this.temp_c__ = resp.current.temp_c;
    this.temp_f__ = resp.current.temp_f;
    this.condition__ = resp.current.condition.text;
    this.temp_feelLike_c__ = resp.current.feelslike_c;
    this.temp_feelLike_f__ = resp.current.feelslike_f;
    this.iconUrl__ = resp.current.condition.icon;
    this.wspeed_kph__ = resp.current.wind_kph;
    this.wspeed_mph__ = resp.current.wind_mph;
    this.humidity__ = resp.current.humidity;
    this.rain__ = resp.forecast.forecastday[0].hour[0].chance_of_rain;
    this.cloud__ = resp.current.cloud; 
  }
  get fullName() {
    return `${this.name__}, ${this.country__}`;
  }
  get date() {
    return `${this.date__}`;
  }
  get time() {
    return `${this.time__}`;
  }
  get temp_c() {
    return `${this.temp_c__} °C`;
  }
  get temp_f() {
    return `${this.temp_f__} °F`;
  }
  get condition() {
    return `${this.condition__}`;
  }
  get temp_feelLike_c() {
    return `feels like ${this.temp_feelLike_c__} °C`;
  }
  get temp_feelLike_f() {
    return `feels like ${this.temp_feelLike_f__} °F`;
  }
  get iconUrl() {
    return `${this.iconUrl__}`;
  }
  get wspeed_kph() {
    return `${this.wspeed_kph__} km/h`;
  }
  get wspeed_mph() {
    return `${this.wspeed_mph__} mi/h`;
  }
  get humidity() {
    return `${this.humidity__} %`;
  }
  get rain() {
    return `${this.rain__} %`;
  }
}

export { weatherToday };
