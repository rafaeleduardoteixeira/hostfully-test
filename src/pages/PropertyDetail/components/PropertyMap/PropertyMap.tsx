// Only to emulate the map to compose the layout
import L from 'leaflet';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { PropertyMapContainer } from './PropertyMap.styles';
import { Property } from '../../../../interfaces/property';

interface PropertyMapProps {
  property: Property;
}

export const PropertyMap = ({ property }: PropertyMapProps) => {
  const myIcon = new L.Icon({
    iconUrl: '/images/marker.png',
    iconRetinaUrl: '/images/marker.png',
    popupAnchor: [-0, -0],
    iconSize: [25, 40],
  });

  const position: [number, number] = [property?.position.latitude || 0, property?.position.longitude || 0];

  return (
    <PropertyMapContainer>
      <MapContainer center={position} zoom={13} scrollWheelZoom={false} className="MapStyles">
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position} icon={myIcon}>
          <Popup>{property.name}</Popup>
        </Marker>
      </MapContainer>
    </PropertyMapContainer>
  );
};
