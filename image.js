export class ImageComponent {
    _src = null;

    set src(src) {
        this._src = src;
    }

    get src() {
        return this._src;
    }
}
