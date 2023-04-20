// import React from 'react';
// import Sidebar from '../Sidebar/Sidebar';

// function Dashboard() {
//   return (
//     <div>
//       <Sidebar />

//     </div>
//   );
// }

// export default Dashboard;

import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Sidebar from '../Sidebar/Sidebar';

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';

function Dashboard() {
  const [trips, setTrips] = useState(0);
  const [routes, setRoutes] = useState(0);
  const [drivers, setDrivers] = useState(0);
  const [trucks, setTrucks] = useState(0);
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data from API and set state variables
  }, []);

  return (
    <div class="mainInner">
      <div style={{ marginTop: '10%' }}>dhfjejfhj</div>
    </div>

    // <Container fluid>
    //   {/* <Sidebar /> */}
    //   <Row>
    //     <Col>
    //       <Card>
    //         <Card.Body>
    //           <Card.Title>Trips</Card.Title>
    //           <Card.Text>{trips}</Card.Text>
    //         </Card.Body>
    //       </Card>
    //     </Col>
    //     <Col>
    //       <Card>
    //         <Card.Body>
    //           <Card.Title>Routes</Card.Title>
    //           <Card.Text>{routes}</Card.Text>
    //         </Card.Body>
    //       </Card>
    //     </Col>
    //     <Col>
    //       <Card>
    //         <Card.Body>
    //           <Card.Title>Drivers</Card.Title>
    //           <Card.Text>{drivers}</Card.Text>
    //         </Card.Body>
    //       </Card>
    //     </Col>
    //     <Col>
    //       <Card>
    //         <Card.Body>
    //           <Card.Title>Trucks</Card.Title>
    //           <Card.Text>{trucks}</Card.Text>
    //         </Card.Body>
    //       </Card>
    //     </Col>
    //   </Row>
    //   <Row>
    //     <Col>
    //       <Card>
    //         <Card.Body>
    //           <Card.Title>Trips in last 30 days</Card.Title>
    //           <LineChart width={500} height={300} data={data}>
    //             <CartesianGrid strokeDasharray="3 3" />
    //             <XAxis dataKey="date" />
    //             <YAxis />
    //             <Tooltip />
    //             <Legend />
    //             <Line
    //               type="monotone"
    //               dataKey="trips"
    //               stroke="#8884d8"
    //               activeDot={{ r: 8 }}
    //             />
    //           </LineChart>
    //         </Card.Body>
    //       </Card>
    //     </Col>
    //   </Row>
    // </Container>
  );
}

export default Dashboard;
