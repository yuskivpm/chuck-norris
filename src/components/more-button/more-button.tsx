import { fetchNextJoke } from '../../store/joke-slice';

import { useAppDispatch } from '../../models/hooks';

import './more-button.css';

const MoreButton = () => {
  const dispatch = useAppDispatch();

  return (
    <input
      type="button"
      className="more-button"
      onClick={() => dispatch(fetchNextJoke())}
      value="MORE!!!"
    />
  );
};

export default MoreButton;
