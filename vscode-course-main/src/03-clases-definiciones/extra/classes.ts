
export class Heroe {

    name   : string = '';
    power  : string = '';
    age    : number = 0;
    hobbies: string[] = [];

    private _secretName: string = '';

    constructor() { }

    get secretName() {
        return this._secretName;
    }

    usePower() {}

    fly() {}

    run() {}

    walk() {}

    revive() {}

}