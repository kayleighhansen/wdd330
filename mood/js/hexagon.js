export class Hexagon {
    constructor(content, color) {
        this.Id = Date.now();
        this.Color = color;
        this.Date = new Date();
        this.Content = content;
    }
}