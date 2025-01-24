function setInstrument(){
    const weeks = ["日", "月", "火", "水", "木", "金", "土"];
    const zodiacs = ["申","酉","戌","亥","子","丑","寅","卯","辰","巳","午","未"];
    
    setInterval(function(){
        let localDate = new Date();
        let JSTDate = new Date(localDate.getUTCFullYear()
                                ,localDate.getUTCMonth()
                                ,localDate.getUTCDate()
                                ,localDate.getUTCHours()
                                ,localDate.getUTCMinutes()
                                ,localDate.getUTCSeconds());
        JSTDate.setHours(JSTDate.getHours() + 9);

        let utcYear = localDate.getUTCFullYear();
        let utcMonth = (localDate.getUTCMonth() + 1).toString().padStart(2, 0);
        let utcDate = (localDate.getUTCDate()).toString().padStart(2, 0);
        let utcHours = localDate.getUTCHours().toString().padStart(2, 0);
        let utcMinutes = localDate.getUTCMinutes().toString().padStart(2, 0);
        let utcSeconds = localDate.getUTCSeconds().toString().padStart(2, 0);
        let utcWeek = weeks[localDate.getUTCDay()];

        let year = JSTDate.getFullYear();
        let month = (JSTDate.getMonth() + 1).toString().padStart(2, 0);
        let date = (JSTDate.getDate()).toString().padStart(2, 0);
        let hours = JSTDate.getHours().toString().padStart(2, 0);
        let minutes = JSTDate.getUTCMinutes().toString().padStart(2, 0);
        let seconds = JSTDate.getSeconds().toString().padStart(2, 0);
        let week = weeks[JSTDate.getDay()];
        let era = year - 2018;
        let isLeapYear;
        if((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0)
        {
            isLeapYear = "〇";
        }
        else
        {
            isLeapYear = "×";
        }
    
        let lastOfMonth = JSTDate;
        lastOfMonth.setMonth(lastOfMonth.getMonth() + 1, 0);
    
        let zodiac = zodiacs[year % 12];
    
        let yearEnd = new Date(year, 11, 31);
        let days = Math.ceil((Date.parse(yearEnd) - JSTDate.getTime()) / (24 * 60 * 60 * 1000));
    
        document.getElementById("today").innerHTML = year + "/" + month + "/" + date + " " + hours + ":" + minutes + ":" + seconds + "<br>" + week + "曜日";
        document.getElementById("utcToday").innerHTML = utcYear + "/" + utcMonth + "/" + utcDate + " " + utcHours + ":" + utcMinutes + ":" + utcSeconds + "<br>" + utcWeek + "曜日";
    
        document.getElementById("era").innerHTML = "令和" + era + "年";
        document.getElementById("lastOfMonth").innerHTML = "月末" + lastOfMonth.getDate() + "日<br>" + weeks[lastOfMonth.getDay()] + "曜日";
        document.getElementById("leapYear").innerHTML = "うるう年<br>" + isLeapYear;
        document.getElementById("zodiac").innerHTML = zodiac + "年";
        document.getElementById("days").innerHTML = "今年残り<br>" + days + "日";
    }, 1000);        
}


