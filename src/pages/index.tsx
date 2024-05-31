import { CustomTextField } from '@/components/CustomInput';
import { useEffect } from 'react';

const API_URL =
  'https://pixabay.com/api/?key=11626018-46d117711944bd4a59019ddb6';

const App = () => {
  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => console.log('data :>> ', data.hits));
  }, []);

  return (
    <div>
      <h1>Fuzzy-Giggle</h1>
      <CustomTextField variant="outlined" />
    </div>
  );
};

export default App;
