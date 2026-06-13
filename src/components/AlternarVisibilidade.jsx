import  { useState } from 'react';

const ToggleVisibilidade = () => {
  const [visivel, setVisivel] = useState(false);

  const sectionStyle = { border: '1px solid #ddd', borderRadius: '10px', padding: '20px', margin: '20px 0', backgroundColor: '#f9f9f9' };
  const buttonStyle = { padding: '10px 20px', fontSize: '16px', cursor: 'pointer', borderRadius: '5px', border: 'none', backgroundColor: '#4CAF50', color: 'white' };

  return (
    <div style={sectionStyle}>
      <h3>Ex 3: Toggle (Mostrar/Esconder)</h3>
      <button onClick={() => setVisivel(!visivel)} style={buttonStyle}>
        {visivel ? "Esconder Segredo" : "Mostrar Segredo"}
      </button>

      {visivel && (
        <div style={{ marginTop: '15px', padding: '10px', backgroundColor: '#e6ffe6', borderRadius: '5px' }}>
          <p> O react e bom por vcoê praticar!</p>
        </div>
      )}
    </div>
  );
};

export default ToggleVisibilidade;