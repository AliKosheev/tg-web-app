const DotsGrid = () => {
    return (
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            'radial-gradient(#2A2A2A 1.13px, transparent 1.13px)',
          backgroundSize: '9px 9px',
          opacity: 0.4,
        }}
      />
    );
  };
  
  export default DotsGrid;