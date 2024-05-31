import { CustomTextField } from '@/components/CustomInput';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

// TODO: move to another place
const API_URL =
  'https://pixabay.com/api/?key=11626018-46d117711944bd4a59019ddb6';

const App = () => {
  const { isPending, error, data } = useQuery({
    queryKey: ['pixabayData'],
    // TODO: make separate fn
    // TODO: make async/await fn
    queryFn: () => axios.get(API_URL),
  });

  if (isPending) return 'Loading...';

  if (error) return 'An error has occurred: ' + error.message;

  console.log('data :>> ', data);

  return (
    <div>
      <h1>Fuzzy-Giggle</h1>
      <CustomTextField variant="outlined" />
      <div>
        {data.data.hits.map((item) => (
          <div key={item.id}>
            <img alt={`image-${item.id}`} src={item.previewURL} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
