const Cartao = ({ titulo, children }) => {
    return (
        <div style={{
            border: '2px solid #ccc', padding: '16px', borderRadius: '8px', marginBottom: '16px'
        }}>
            <h3 style={{ margin: '0 0 16px 0' }}>{titulo}</h3>
            {/* Aqui é onde o conteúdo passado dentro das tags <Cartao> será rederiado */}
            {children}
        </div>
    );
};

export default Cartao;