import BotaoAcao from './components/BotaoAcao';
import Produto from './components/Produto';
import Cartao from './components/Cartao';
import AlternarVisibilidade from './components/AlternarVisibilidade';
import Contador from './components/Contador';
import EspelhamentoInput from './components/EspelhamentoInput';
import TituloDinamico from './components/TituloDinamico';
import ListaUsuarios from './components/ListaUsuarios';
import BuscaPost from './components/BuscaPost';


import './App.css'

function App() {


  const alunos = [
    {id: 1, nome: 'Daniel' , nota: 8.6},
    {id: 2, nome: 'Maria' , nota: 9.2},
    {id: 3, nome: 'Carlos' , nota: 5.8},
    {id: 4, nome: 'Ana' , nota: 3.5},
    {id: 5, nome: 'Pedro' , nota: 8.1},
  ];

  const produtos = [
      {id: 1, nome: 'Notebook', preco: 3500.00},
      {id: 2, nome: 'SmartPhone', preco: 1500.00},
      {id: 3, nome: 'Monitor', preco: 450.00}
  ];

  const listaVazia = [];

  const alunosAprovados = alunos.filter((aluno) => aluno.nota >= 6);


  const produtosOrdenados = [...produtos].sort((a, b) => a.preco - b.preco);

  const listarComClique = () => {
    alert('Funcção executada com sucesso através de uma prop!');
  };

  return (
    <>
      <div>
        <h2>1. Props Básicas</h2>
        <Produto nome="Monitor 24 polegadas" preco={850.00} />

        <hr />

        <h2>2. Eventos via Props</h2>
        <BotaoAcao aoClicar={listarComClique} />
        </div><br /> <br /> <br />    

        <hr />

        <h2>3, 4 e 5. Rederização de Listas, Keys e Condicional Ternário</h2>

        <ul>
          {alunos.map((aluno) => (
            <li>
              <strong>{aluno.nome}</strong> - Nota: {aluno.nota} - Status: {' '}
              <span style={{
                backgroundColor: aluno.nota >= 5 ? 'green' : 'red',
                padding: '1px 8px',
                margin: '5px',
                borderRadius: '4px',
                color: 'white',
                fontWeight: 'bold',
              }}>
              {aluno.nota >= 5 ? 'Aprovado' : 'Reprovado'}
              </span>
            </li>
          ))}
        </ul>

        <hr />

        <h2>6. Componente com children</h2>
      <Cartao titulo="Aviso Importante">
        <p>Este texto e o botão abaixo são "children" passados para o componente Cartao.</p>
        <button>Confirmar</button>
      </Cartao>

      <hr />


      <h2>7. Filtrar alunos aprovados nota acimade 6</h2>
      <ul>
        <li>
          {alunosAprovados.map((aluno) => (
            <li key={aluno.id}>
              <strong>{aluno.nome}</strong> - Nota: {aluno.nota}
            </li>
          ))}
        </li>
      </ul>

      <hr />

      <h2>Ex 8: Props padrão para componente</h2>
      <Produto nome="Cadeira Gamer" preco={1200} />
      <Produto />

      <hr />

      <h2>9. Ordenar lista de produtos por preço</h2>
      <ul>
        {produtosOrdenados.map((prod) => (
          <li key={prod.id}>
            {prod.nome} - R$ {prod.preco.toFixed(2)}
          </li>
        ))}
      </ul>

      <hr />

      <h2>10. Mensagem de 'Vazio' caso a lista falte</h2>
      
      {listaVazia.length === 0 ? (
        <p style={{ color: 'red', fontStyle: 'italic' }}>Nenhum item encontrado na lista.</p>
      ) : (
        <ul>
          {listaVazia.map((item, index) => <li key={index}>{item}</li>)}
        </ul>
      )}

      <hr />
      <h2>Atividade State e Eventos</h2>
      <div style={{ padding: '40px', maxWidth: '600px', margin: '0 auto', fontFamily: 'Arial, sans-serif' }}>
        <h1 style={{textAlign:'center', color: '#333'}}>Atividade State e Eventos</h1>

        <Contador />
        <EspelhamentoInput />
        <AlternarVisibilidade />
      </div>

      <hr />

      <h2>Atividades: useEffect e APIs</h2>
      <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto', fontFamily: 'sans-serif' }}>
      <h2 style={{ borderBottom: '2px solid #333', paddingBottom: '10px' }}>
        Atividades: useEffect e APIs
      </h2>
      
      <TituloDinamico />
      <ListaUsuarios />
      <BuscaPost />
      
    </div>
    </>
  )
}

export default App
