function timer() {
    // Таймер

    const deadline = '2021-11-10';
    // console.log(Date.parse('2021-11-04'));
    // let T= Date.parse(deadline)-Date.parse(new Date());
    // console.log(T/(1000*60*60));



    function getTimeRemanig(endtime) {
        let t = Date.parse(endtime) - Date.parse(Date());

        let days = Math.floor(t / (1000 * 60 * 60 * 24));

        let hours = Math.floor((t / (1000 * 60 * 60) % 24) - 3);

        let minutes = Math.floor(t / (1000 * 60) % 60);

        let seconds = Math.floor(t / 1000 % 60);

        return {
            "total": t,
            "days": days,
            "hours": hours,
            "minutes": minutes,
            "seconds": seconds
        };
    }


    function setClock(selector, endtime) {
        let timer = document.querySelector(selector);
        let days = timer.querySelector("#days");
        let hours = timer.querySelector("#hours");
        let minutes = timer.querySelector("#minutes");
        let seconds = timer.querySelector("#seconds");
        const SetInterval = setInterval(updateClock, 1000);
        updateClock();
        function updateClock() {
            let t = getTimeRemanig(endtime);
            days.innerHTML = getZero(t.days);
            hours.innerHTML = getZero(t.hours);
            minutes.innerHTML = getZero(t.minutes);
            seconds.innerHTML = getZero(t.seconds);
            if (t.total <= 0) {
                clearInterval(SetInterval);
                days.innerHTML = "00";
                hours.innerHTML = "00";
                minutes.innerHTML = "00";
                seconds.innerHTML = "00";
            }
        }
    }
    setClock(".timer", deadline);

    function getZero(num) {
        if (num > 0 && num < 10) {
            return `0${num}`;
        } else {
            return num;
        }
    }



}

export default timer;