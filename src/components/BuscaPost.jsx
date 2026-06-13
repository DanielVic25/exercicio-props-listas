import { useState, useEffect } from 'react';

const BuscaPost = () => {
  const [postId, setPostId] = useState(1);
  const [post, setPost] = useState(null);
  const [carregando, setCarregando] = useState(true); 
  useEffect(() => {
    
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then((resposta) => resposta.json())
      .then((dados) => {
        setPost(dados);
        setCarregando(false);
      });
  }, [postId]);

  const lidarComMudanca = (e) => {
    setCarregando(true); // Estado de loading acionado pelo evento do usuário
    setPostId(e.target.value);
  };

  const styleBox = { border: '1px solid #ddd', padding: '20px', borderRadius: '8px', marginBottom: '20px' };
  const inputStyle = { padding: '8px', marginRight: '10px', width: '60px' };

  return (
    <div style={styleBox}>
      <h3>3. Fetch com Parâmetro Dinâmico</h3>
      <div>
        <label>Buscar Post por ID: </label>
        <input 
          type="number" 
          min="1" 
          max="100" 
          value={postId} 
          onChange={lidarComMudanca} 
          style={inputStyle}
        />
      </div>

      <div style={{ marginTop: '15px', padding: '15px', backgroundColor: '#f4f4f4', borderRadius: '4px' }}>
        {carregando ? (
          <p>Buscando post...</p>
        ) : (
          post && (
            <>
              <h4 style={{ margin: '0 0 10px 0' }}>{post.title}</h4>
              <p style={{ margin: 0 }}>{post.body}</p>
            </>
          )
        )}
      </div>
    </div>
  );
};

export default BuscaPost;