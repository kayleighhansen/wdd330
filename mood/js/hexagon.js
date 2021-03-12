export class Hexagon {
    constructor(content, color) {
        this.Id = Date.now();
        this.Content = content;
        this.Color = color;
        this.Date = new Date();
    }
}