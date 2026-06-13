import { useState, useEffect } from 'react';

const ListaUsuarios = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((resposta) => resposta.json())
      .then((dados) => {
        setUsuarios(dados);
        setCarregando(false);
      })
      .catch((erro) => {
        console.error("Erro ao buscar API:", erro);
        setCarregando(false);
      });
  }, []);

  const styleBox = { border: '1px solid #ddd', padding: '20px', borderRadius: '8px', marginBottom: '20px' };

  return (
    <div style={styleBox}>
      <h3>2. Fetch API (Execução Única)</h3>
      {carregando ? (
        <p>Carregando dados do servidor...</p>
      ) : (
        <ul style={{ maxHeight: '150px', overflowY: 'auto' }}>
          {usuarios.map((user) => (
            <li key={user.id}>
              <strong>{user.name}</strong> - {user.email}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ListaUsuarios;