import { createRoot } from 'react-dom/client';

import './styles/global.scss';
import { App } from './App';

const rootDOM = document.getElementById('root');
const root = createRoot(rootDOM!);

root.render(<App />);
