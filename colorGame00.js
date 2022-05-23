
const Square = ({id}) => {
  const [color,setColor] = React.useState('green');
  const palet = ['red', 'blue', 'green'];
  const getRandomColor = () => 
    palet[Math.floor(Math.random()*3)];
  React.useEffect(()=>{
    console.log(`render ${id}`);
    return () => console.log(`unmounting Square ${id}`);
  })
  return (
    <button onClick={(e) => {
      setColor(getRandomColor());
      e.target.style.background = getRandomColor();
    }}
    >
      <h1>{id}</h1>
    </button>
  )
}

const Board = () => {
  const [player, setPlayer] = React.useState(1);
  const [mounted, setMounted] = React.useState(true);
  const [random, setRandom] = React.useState(0);
  let status = `Player ${player}`;
  const toggle = () => setMounted(!mounted);
  const reRender = () => setRandom(Math.random());
  function renderSquare(i) {
    return <Square id={i} player={player}></Square>;
  }
  return (
    <div className="game-board">
      <div className="grid-row">
        {mounted && renderSquare(0)}{mounted && renderSquare(1)}{mounted && renderSquare(2)}
      </div>
      <div className="grid-row">
        {mounted && renderSquare(3)}{mounted && renderSquare(4)}{mounted && renderSquare(5)}
      </div>
      <div className="grid-row">
        {mounted && renderSquare(6)}{mounted && renderSquare(7)}{mounted && renderSquare(8)}
      </div>
      <div id="info">
        <button onClick={toggle}>Show/Hide Row</button>
        <button onClick={reRender}>Re-render</button>
        <h1>Turn of player {player}</h1>
      </div>
    </div>
  );
};

// ========================================

ReactDOM.render(<Board />, document.getElementById("root"));
