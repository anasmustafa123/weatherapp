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
    get time_f(){
        return `${this.resp.current.temp_f} °F`;
    }
    get condition(){
        return `${this.resp.current.condition.text}`;
    }
    get temp_feelLike_c(){
        return `${this.resp.current.feelslike_c} °C`;
    }
    get temp_feelLike_f(){
        return `${this.resp.current.feelslike_f} °F`;
    }
    get iconUrl(){
        return `${this.resp.current.condition.icon}`;
    }
}

export { weatherToday };