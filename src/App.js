import { useState } from 'react';
import './App.css';
import Preview from './Preview';

import { ReactComponent as PreviousIcon } from './icons/controls-previous.svg';
import { ReactComponent as PlayIcon } from './icons/controls-play.svg';
import { ReactComponent as NextIcon } from './icons/controls-next.svg';

export default function App() {
  const [aspectRatio, setAspectRatio] = useState('16:9');

  return (
    <div className="app">
      <div className="grid">
        <header className="header">
          <button onClick={() => setAspectRatio('16:9')}>16:9</button>
          <button onClick={() => setAspectRatio('1:1')}>1:1</button>
          <button onClick={() => setAspectRatio('9:16')}>9:16</button>
        </header>
        <div className="sidebar"></div>
        <div className="stage">
          <div className="preview-container">
            <Preview aspectRatio={aspectRatio} />
          </div>
          <div className="controls">
            <PreviousIcon />
            <PlayIcon />
            <NextIcon />
          </div>
        </div>
        <div className="timeline"></div>
      </div>
    </div>
  );
}
