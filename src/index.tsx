import ReactDOM from 'react-dom/client';
import { useState } from 'react';

const App = () => {
  const [input, setInput] = useState<string>('');
  const [code, setCode] = useState<string>('');

  const onClick = () => {
    console.log(input);
  };

  return (
    <div>
      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
      ></textarea>
      <div>
        <button onClick={onClick}>Submit</button>
      </div>
      <pre>{code}</pre>
    </div>
  );
};

const el = document.getElementById('root');

const root = ReactDOM.createRoot(el!);

root.render(<App />);
