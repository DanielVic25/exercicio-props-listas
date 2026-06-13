const BotaoAcao = ({ aoClicar }) => {
  return (
    <button
      onClick={aoClicar}
      style={{
        padding: "8px 16px",
        cursor: "pointer",
        backgroundColor: "#007BFF",
        color: "white",
        border: "none",
        borderRadius: "20px",
      }}
    >
      Clicar
    </button>
  );
};

export default BotaoAcao;
