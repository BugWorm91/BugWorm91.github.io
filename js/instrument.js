window.addEventListener('DOMContentLoaded', function(){
    const weeks = ["日", "月", "火", "水", "木", "金", "土"];
    const zodiacs = ["申","酉","戌","亥","子","丑","寅","卯","辰","巳","午","未"];
    setInterval(function() {
        let today = new Date();
        let utcYear = today.getUTCFullYear();
        let year = today.getFullYear();
        let utcMonth = (today.getUTCMonth() + 1).toString().padStart(2, 0);
        let month = (today.getMonth() + 1).toString().padStart(2, 0);
        let utcDate = (today.getUTCDate()).toString().padStart(2, 0);
        let date = (today.getDate()).toString().padStart(2, 0);
        let utcHours = today.getUTCHours().toString().padStart(2, 0);
        let hours = today.getHours().toString().padStart(2, 0);
        let utcMinutes = today.getUTCMinutes().toString().padStart(2, 0);
        let minutes = today.getUTCMinutes().toString().padStart(2, 0);
        let utcSeconds = today.getUTCSeconds().toString().padStart(2, 0);
        let seconds = today.getSeconds().toString().padStart(2, 0);
        let utcWeek = weeks[today.getUTCDay()];
        let week = weeks[today.getDay()];
        let era = year - 2018;
        let isLeapYear;
        if((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0)
        {
            isLeapYear = "&#x2611";
        }
        else
        {
            isLeapYear = "&#x2610";
        }

        let lastOfMonth = new Date();
        lastOfMonth.setMonth(lastOfMonth.getMonth() + 1, 0);

        let zodiac = zodiacs[year % 12];

        let yearEnd = new Date(year, 11, 31);
        let days = Math.ceil((Date.parse(yearEnd) - today.getTime()) / (24 * 60 * 60 * 1000));

        document.getElementById("today").innerHTML = "日本標準時(JST)<br>" + year + "/" + month + "/" + date + " " + hours + ":" + minutes + ":" + seconds + "<br>" + utcWeek + "曜日";
        document.getElementById("utcToday").innerHTML = "協定世界時(UTC)<br>" + utcYear + "/" + utcMonth + "/" + utcDate + " " + utcHours + ":" + utcMinutes + ":" + utcSeconds + "<br>" + utcWeek + "曜日";

        document.getElementById("era").innerHTML = "令和" + era + "年";
        document.getElementById("lastOfMonth").innerHTML = "月末" + lastOfMonth.getDate() + "日<br>" + weeks[lastOfMonth.getDay()] + "曜日";
        document.getElementById("leapYear").innerHTML = "うるう年<br>" + isLeapYear;
        document.getElementById("zodiac").innerHTML = zodiac + "年";
        document.getElementById("days").innerHTML = "今年残り<br>" + days + "日";
    }, 1000);        
});

