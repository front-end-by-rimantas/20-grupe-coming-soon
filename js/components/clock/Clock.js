class Clock {
    constructor(selector) {
        this.selector = selector;
        this.now = Date.now();
        this.deadline = {
            year: (new Date()).getFullYear(),
            month: 11,
            day: 16,
            hour: 10,
            minutes: 0,
            seconds: 0
        }
        this.dateString = this.createDateString();
        this.DOM = null;
        this.DOMdays = null;
        this.DOMhour = null;
        this.DOMminutes = null;
        this.DOMseconds = null;
    }

    createDateString() {
        const { year, month, day, hour, minutes, seconds } = this.deadline;
        return `${year}-${month}-${day} ${hour}:${minutes}:${seconds}`;
    }

    arBusMetines() {
        const jubiliejausMiliseconds = (new Date(this.dateString)).getTime();
        return this.now < jubiliejausMiliseconds;
    }

    atnaujintiInformacija() {
        /*
        kadangi, pagal dabartinius metus, metines yra praeityje,
        tai reikia atnaujinti metus ir is naujo viska perskaiciuoti
        */
        this.deadline.year++;
        this.dateString = this.createDateString();
    }

    isValidSelector() {
        const DOM = document.querySelector(this.selector);
        if (!DOM) {
            console.error('ERROR: blogas selectorius.')
            return false;
        }
        this.DOM = DOM;
        return true;
    }

    findClockValueElements() {
        const values = this.DOM.querySelectorAll('.value');
        this.DOMdays = values[0];
        this.DOMhour = values[1];
        this.DOMminutes = values[2];
        this.DOMseconds = values[3];
    }
}

export { Clock }