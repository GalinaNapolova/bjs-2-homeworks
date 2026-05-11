class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }
    fix() {
    this.state *= 1.5;
    }
    set state(newState) {
        if (newState < 0) {
        this._state = 0;
        } else if (newState > 100) {
        this._state = 100;
        } else {
        this._state = newState;
        }
    }
    get state() {
        return this._state;
    }
  }