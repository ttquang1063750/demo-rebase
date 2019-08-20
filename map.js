export class MapComponent {
    _url;

    set url(url) {
        this._url = url;
    }

    get src() {
        return this._url;
    }
}
