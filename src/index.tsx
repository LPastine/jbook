import * as esbuild from 'esbuild-wasm';
import ReactDOM from 'react-dom/client';
import { useState, useEffect } from 'react';

const App = () => {
  const [input, setInput] = useState<string>('');
  const [code, setCode] = useState<string>('');

  const startService = async (): Promise<void> => {
    const service: esbuild.Service = await esbuild.startService({
      worker: true,
      wasmURL: '/esbuild.wasm',
    });

    console.log(service);
  };

  useEffect(() => {
    startService();
  }, []);

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
