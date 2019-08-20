export class MapComponent {
    _url;

    set url(url) {
        this._url = url;
    }

    get src() {
        return this._url;
    }

    get description() {
        return 'Just for the demo about map component creation';
    }
}
