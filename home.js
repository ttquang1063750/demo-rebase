import ImageComponent from './image';
import MapComponent from './map';
export class HomeComponent {
    constructor() {
        this.map = new MapComponent();
        this.image = new ImageComponent();
    }
}
