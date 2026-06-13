import  { useState, useEffect } from 'react';

const TituloDinamico = () => {
  const [contador, setContador] = useState(0);

  useEffect(() => {
    document.title = `Você clicou ${contador} vezes`;
    
    return () => {
      document.title = "React App"; 
    };
  }, [contador]);

  const styleBox = { border: '1px solid #ddd', padding: '20px', borderRadius: '8px', marginBottom: '20px' };

  return (
    <div style={styleBox}>
      <h3>1. Efeito Simples (document.title)</h3>
      <p>Olhe para a aba do seu navegador!</p>
      <button onClick={() => setContador(contador + 1)} style={{ padding: '8px 16px', cursor: 'pointer' }}>
        Incrementar ({contador})
      </button>
    </div>
  );
};

export default TituloDinamico;