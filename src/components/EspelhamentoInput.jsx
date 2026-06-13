import { useState } from 'react';

const EspelhamentoInput = () => {
  const [texto, setTexto] = useState("");

  const lidarComMudanca = (event) => {
    setTexto(event.target.value);
  };

  const sectionStyle = { border: '1px solid #ddd', borderRadius: '10px', padding: '20px', margin: '20px 0', backgroundColor: '#f9f9f9' };
  const inputStyle = { padding: '10px', fontSize: '16px', width: '100%', borderRadius: '5px', border: '1px solid #ccc' };

  return (
    <div style={sectionStyle}>
      <h3>Ex 2: Espelhamento de Input</h3>
      <input 
        type="text" 
        placeholder="Digite algo aqui..." 
        value={texto} 
        onChange={lidarComMudanca} 
        style={inputStyle}
      />
      <p style={{ marginTop: '10px' }}>
        <strong>Você está digitando:</strong> {texto || "..."}
      </p>
    </div>
  );
};

export default EspelhamentoInput;