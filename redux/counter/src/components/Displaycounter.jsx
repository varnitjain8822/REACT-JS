import { useSelector } from 'react-redux';

const Displaycounter = () => {
  const counter = useSelector((store) => store.count);

  return (
    <>
      <h2>Counter: {counter}</h2>
    </>
  );
};

export default Displaycounter;
