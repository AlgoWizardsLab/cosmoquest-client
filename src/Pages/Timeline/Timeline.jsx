import { useEffect, useState } from 'react';
import { Container, Spinner } from 'react-bootstrap';

const Timeline = () => {
  const [timelineData, setTimelineData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/data.json')
      .then(res => res.json())
      .then(data => {
        setTimelineData(data);
        setLoading(false);
      });
  }, []);

  return (
    <Container className="py-5">
      <h2 className="text-center mb-4">🌌 Timeline of the Universe</h2>
      <p className="text-center mb-5">From the Big Bang to today, follow the story of our cosmos.</p>

      {loading ? (
        <div className="text-center">
          <Spinner animation="border" variant="primary" />
        </div>
      ) : (
        <div style={{ position: 'relative', marginLeft: '20px', paddingLeft: '20px', borderLeft: '3px solid #6c757d' }}>
          {timelineData.map((event) => (
            <div key={event.id} style={{ position: 'relative', marginBottom: '40px' }}>
              {/* Dot */}
              <div style={{
                position: 'absolute',
                left: '-11px',
                top: '50px',
                width: '20px',
                height: '20px',
                backgroundColor: '#0d6efd',
                borderRadius: '50%',
                border: '3px solid white',
                boxShadow: '0 0 0 2px #0d6efd'
              }}></div>

              {/* Content */}
              <div style={{
                background: '#f8f9fa',
                padding: '15px 20px',
                borderRadius: '10px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
              }}>
                <h5 style={{ marginBottom: '5px' }}>{event.title}</h5>
                <small className="text-muted">{event.year} years ago</small>
                <p style={{ marginTop: '10px' }}>{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </Container>
  );
};

export default Timeline;
