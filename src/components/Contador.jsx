import  { useState } from 'react';

const Contador = () => {
  const [count, setCount] = useState(0);

  const sectionStyle = { border: '1px solid #ddd', borderRadius: '10px', padding: '20px', margin: '20px 0', backgroundColor: '#f9f9f9' };
  const buttonStyle = { padding: '10px 20px', fontSize: '16px', marginRight: '10px', cursor: 'pointer', borderRadius: '5px', border: 'none', backgroundColor: '#4CAF50', color: 'white' };

  return (
    <div style={sectionStyle}>
      <h3>Ex 1: Contador de Cliques</h3>
      <p style={{ fontSize: '24px', fontWeight: 'bold' }}>Valor Atual: {count}</p>
      <button onClick={() => setCount(count + 1)} style={buttonStyle}>Adicionar +1</button>
      <button onClick={() => setCount(count - 1)} style={buttonStyle}>Subtrair -1</button>
      <button onClick={() => setCount(0)} style={{ ...buttonStyle, backgroundColor: '#ff4d4d' }}>Resetar</button>
    </div>
  );
};

export default Contador;