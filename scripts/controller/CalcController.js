class CalcController {
    constructor() {
        this._displayCalcEl = document.querySelector("#display")
        this._dateEl = document.querySelector("#data")
        this._timeEl = document.querySelector("#hora")
        this._currentDate
        this.initialize()
    }

    initialize() {
    }

    get displayTime() { () => this._timeEl.innerHTML }
    set displayTime(value) {
        this._timeEl.innerHTML = value
    }

    get displayDate() { () => this._dateEl.innerHTML }
    set displayDate(value) {
        this._dateEl.innerHTML = value
    }

    get displayCalc() { () => this._displayCalcEl.innerHTML }
    set displayCalc(value) {
        this._displayCalcEl.innerHTML = value
    }

    get currentDate() { () => new Date() }
    set currentDate(value) {
        this._currentDate = value
    }
}