const Produto = ({ nome = "Produto sem nome", preco = 0.00 }) => {
    
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "10px",
        marginBottom: "10px",
      }}
    >
      <h3>Nome: {nome}</h3>
      <p>Preço: R$ {preco.toFixed(2)}</p>
    </div>
  );
};

export default Produto;
