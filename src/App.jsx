import MoreButton from './components/more-button';
import JokeBlock from './components/joke-block';
import { selectJokes, selectError } from './store/joke-slice';
import { useAppSelector } from './models/hooks';

import './App.css';

function App() {
  const error = useAppSelector(selectError);
  const jokes = useAppSelector(selectJokes);

  if (error) {
    return (
      <div className="App error">
        <h2>Fetch failed:</h2>
        <p>{error.message}</p>
      </div>
    );
  }

  return (
    <div className="App">
      <MoreButton />
      {jokes.map(({ id, value }) => (
        <JokeBlock text={value} key={id} />
      ))}
    </div>
  );
}

export default App;
