import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Polyline, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import './Dashboard.scss';
import SideBar from '../../Components/sidebar/SideBar.jsx';
import Navbar from '../../Components/Navbar/Navbar.jsx';
import PageButtons from '../../Components/PageButtons/PageButtons.jsx';

// Sample markers data
const markers = [
  {
    geocode: [-3, 114.121014],
    icon: new L.Icon({
      iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
      iconSize: [25, 41],
      iconAnchor: [12, 41],
    }),
    popUp: 'Marker 1',
  },
  // Add more markers as needed
  {
    geocode: [-4.824280, 121.763249],
    icon: new L.Icon({
      iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
      iconSize: [25, 41],
      iconAnchor: [12, 41],
    }),
    popUp: 'Marker 2',
  },

  {
    geocode: [-8.272657, 123.223220],
    icon: new L.Icon({
      iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
      iconSize: [25, 41],
      iconAnchor: [12, 41],
    }),
    popUp: 'Marker 3',
  },

  {
  geocode: [-2.345678, 120.987654],
  icon: new L.Icon({
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
  }),
  popUp: 'Marker 4',
},
{
  geocode: [-8, 140.345678],
  icon: new L.Icon({
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
  }),
  popUp: 'Marker 5',
}

];

function Dashboard() {
  const [sampleShipmentData, setSampleShipmentData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1); // State to manage current page
  const itemsPerPage = 8; // Number of items per page
  const totalPages = Math.ceil(sampleShipmentData.length / itemsPerPage); // Calculate total pages

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const renderData = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, sampleShipmentData.length);
    const slicedData = sampleShipmentData.slice(startIndex, endIndex);
    return slicedData.map((item, index) => (
      <div key={index} className="shipment-item">
        {/* Render your shipment item details here */}
        <div>Batch ID: {item.batchId}</div>
        <div>Shipping ID: {item.shippingId}</div>
        {/* Add other fields */}
      </div>
    ));
  };

  return (
    <div className="home">
      <SideBar />
      <div className="homeContainer">
        <Navbar />
        <div className="centraContainer">
          <div className="centra">Centra</div>
          <div className="map-container">
            <MapContainer center={[-5.565210, 123.121014]} zoom={5.2} zoomControl={false} style={{ height: '300px', width: '1230px' }}>
              <TileLayer
                attribution="JawgLab"
                url="https://tile.jawg.io/e5d8beb2-b5e0-4ac4-bb0b-9b553e2f5acb/{z}/{x}/{y}{r}.png?access-token=DfaT20L6p2ckAELwn9yTxvLM6O6PAYil1yP7DbDPLdiZqXc8G1hhkai4HtTJCTLv"
              />
              {markers.map((marker, index) => (
                <Marker key={index} position={marker.geocode} icon={marker.icon}>
                  <Popup>{marker.popUp}</Popup>
                </Marker>
              ))}
            </MapContainer>
          </div>
        </div>
        <div className="centraContainer">
          <div className="centra1">Centra1</div>
          <div className="map-container1">
            <div id="map1">
              {/* Another Google Maps component or any other content goes here */}
            </div>
          </div>
        </div>
        {/* Render paginated data */}
        <div className="shipment-data">{renderData()}</div>
        {/* Render PageButtons component */}
        <PageButtons currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
      </div>
    </div>
  );
}

export default Dashboard;
