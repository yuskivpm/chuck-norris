import './joke-block.css';

interface JokeBlockProps {
  text: string;
}

const JokeBlock = ({ text }: JokeBlockProps) => (
  <div className="joke">{text}</div>
);

export default JokeBlock;
