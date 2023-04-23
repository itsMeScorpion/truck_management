import { Container, Row, Col, Card } from 'react-bootstrap';
import {
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Line,
} from 'recharts';
import styled, { keyframes } from 'styled-components';

// Define the keyframe for the animation
const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

// Define a styled component for the Card component that uses the animation
const AnimatedCard = styled(Card)`
  animation: ${fadeIn} 1s ease-out;
`;

const Dashboard = ({ trips, routes, drivers, trucks, data }) => {
  return (
    <Container fluid className='mt-5'>
      <Row>
        <Col>
          <AnimatedCard>
            <Card.Body>
              <Card.Title>Trips</Card.Title>
              <Card.Text>{trips}</Card.Text>
            </Card.Body>
          </AnimatedCard>
        </Col>
        <Col>
          <AnimatedCard>
            <Card.Body>
              <Card.Title>Routes</Card.Title>
              <Card.Text>{routes}</Card.Text>
            </Card.Body>
          </AnimatedCard>
        </Col>
        <Col>
          <AnimatedCard>
            <Card.Body>
              <Card.Title>Drivers</Card.Title>
              <Card.Text>{drivers}</Card.Text>
            </Card.Body>
          </AnimatedCard>
        </Col>
        <Col>
          <AnimatedCard>
            <Card.Body>
              <Card.Title>Trucks</Card.Title>
              <Card.Text>{trucks}</Card.Text>
            </Card.Body>
          </AnimatedCard>
        </Col>
      </Row>
      <Row>
        <Col>
          <AnimatedCard>
            <Card.Body>
              <Card.Title>Trips in last 30 days</Card.Title>
              <LineChart width={500} height={300} data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="trips"
                  stroke="#8884d8"
                  activeDot={{ r: 8 }}
                />
              </LineChart>
            </Card.Body>
          </AnimatedCard>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
