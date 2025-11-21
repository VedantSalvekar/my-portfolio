import Tilt from 'react-parallax-tilt';

function AnimatedBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
      <Tilt
        className="absolute top-1/4 right-1/4"
        tiltMaxAngleX={15}
        tiltMaxAngleY={15}
        transitionSpeed={1500}
        scale={1.1}
      >
        <div
          className="w-96 h-96 rounded-full opacity-20 blur-3xl"
          style={{
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          }}
        />
      </Tilt>
      
      <Tilt
        className="absolute bottom-1/4 left-1/4"
        tiltMaxAngleX={15}
        tiltMaxAngleY={15}
        transitionSpeed={1500}
        scale={1.1}
      >
        <div
          className="w-80 h-80 rounded-full opacity-15 blur-3xl"
          style={{
            background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
          }}
        />
      </Tilt>
    </div>
  );
}

export default AnimatedBackground;

