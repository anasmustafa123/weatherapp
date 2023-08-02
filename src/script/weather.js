class weatherToday {
    constructor(resp){
        this.resp = resp;
    }
    get fullName(){
        return `${this.resp.location.name}, ${this.resp.location.country}`;
    }
    get date(){
        return `${this.resp.location.localtime.split(' ')[0]}`;
    }
    get time(){
        return `${this.resp.location.localtime.split(' ')[1]}`;
    }
    get temp_c(){
        return `${this.resp.current.temp_c} °C`;
    }
    get temp_f(){
        return `${this.resp.current.temp_f} °F`;
    }
    get condition(){
        return `${this.resp.current.condition.text}`;
    }
    get temp_feelLike_c(){
        return `feels like  ${this.resp.current.feelslike_c} °C`;
    }
    get temp_feelLike_f(){
        return `feelsl like ${this.resp.current.feelslike_f} °F`;
    }
    get iconUrl(){
        return `${this.resp.current.condition.icon}`;
    }
    get wspeed_kph(){
        return `${this.resp.current.wind_kph} kph`
    }
    get wspeed_mph(){
        return `${this.resp.current.wind_kph} mph`
    }
    get humidity(){
        return `${this.resp.current.humidity} %`;
    }
    get rain(){
        return `${this.resp.forecast.forecastday[0].hour[0].chance_of_rain} %`;
    }
}

export { weatherToday };