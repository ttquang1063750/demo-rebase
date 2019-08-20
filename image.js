export class ImageComponent {
    _src = null;

    set src(src) {
        this._src = src;
    }

    get src() {
        return this._src;
    }

    get description() {
        return 'Just for the demo about image component creation';
    }
}
