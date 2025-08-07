import React from 'react';

function App() {
  // Office heading element
  const heading = <h1>Office Space Rental Listings</h1>;

  // Office image element
  const officeImage = "https://img.freepik.com/free-photo/3d-rendering-business-meeting-working-room-office-building_105762-1972.jpg?ga=GA1.1.571326393.1737090156&semt=ais_hybrid&w=740&q=80";

  // Single office object
  const office = {
    name: "Zenith Tower",
    rent: 55000,
    address: "123, MG Road, Bengaluru"
  };

  // Array of multiple office space objects
  const officeList = [
    { name: "Zenith Tower", rent: 55000, address: "MG Road" },
    { name: "Infinity Hub", rent: 75000, address: "Indiranagar" },
    { name: "Skyline Plaza", rent: 60000, address: "Whitefield" },
    { name: "Orchid Workbay", rent: 45000, address: "Koramangala" }
  ];

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      {heading}

      <img src={officeImage} alt="Office" style={{ width: '300px', height: '150px' }} />

      <h2>Single Office Space</h2>
      <p><strong>Name:</strong> {office.name}</p>
      <p><strong>Rent:</strong> <span style={{ color: office.rent < 60000 ? 'red' : 'green' }}>{office.rent}</span></p>
      <p><strong>Address:</strong> {office.address}</p>

      <h2>All Office Spaces</h2>
      <ul>
        {officeList.map((item, index) => (
          <li key={index} style={{ marginBottom: '15px' }}>
            <p><strong>Name:</strong> {item.name}</p>
            <p><strong>Rent:</strong> <span style={{ color: item.rent < 60000 ? 'red' : 'green' }}>{item.rent}</span></p>
            <p><strong>Address:</strong> {item.address}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
