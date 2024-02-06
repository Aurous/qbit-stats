class Parser {
    constructor(value) {
        this.value = value;
    }
    
    convert = () => (!+this.value) ? '0B' : `${parseFloat((this.value / Math.pow(1024, Math.floor(Math.log(this.value) / Math.log(1024)))).toFixed(2))} ${['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'][Math.floor(Math.log(this.value) / Math.log(1024))]}`;
    live = () => `${this.convert()}/s`;
    round = (r = 2) => isNaN(this.value) ? 0 : parseFloat(this.value).toFixed(r);
}

const parse = (value) => new Parser(value);

export default parse;