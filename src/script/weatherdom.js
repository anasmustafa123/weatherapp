class Change {
    constructor(){
    }
    set fullName(fullname){
        const searched_country = document.querySelector('.searched-country');
        searched_country.textContent = fullname;
    }
    set date(date){
        const thedate = new Date(date);
        const options = {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        };
        const newdate = thedate.toLocaleString('en-IN', options);
        document.getElementById('date').textContent = newdate;
    }
    set time(time){
        console.log(time);
        let hours = Number(time.split(':')[0]);
        let mainutes = time.split(':')[1];
        let part = 'pm';
        if(hours < 12){
            part = 'am';
        }
        hours = Number(time.split(':')[0]) % 12;
        if(Number(time.split(':')[0]) == 12) hours = 12;
        if(Number(time.split(':')[0]) == 0) hours = '00';
        document.getElementById('time').textContent = `${hours}:${mainutes} ${part}`;
    }
    set temp(temp){
        if(typeof temp === 'string'){
            document.getElementById('temp').textContent = temp;;
        }else{
        document.getElementById('temp').append(temp);
    }
    }
    set condition(condition){
        document.getElementById('condition').textContent = condition;
    }
    set temp_feelLike(feellike){
        document.getElementById('feel_like').textContent = feellike;
    }
    set iconUrl(url){
        document.getElementById('temp-icon').src = url;
    }
    set humidity(humidity) {
        document.getElementById('humidity').textContent = humidity;
    }
    set windspeed(wspeed){
        document.getElementById('wind-speed').textContent = wspeed;
    }
    set rain(chanse_of_rain){
        document.getElementById('rain').textContent = chanse_of_rain;
    }

}

export { Change };