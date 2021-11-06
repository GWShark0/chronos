import { useWindowSize } from 'react-use';
import './App.css';

function calculateDimensions(srcWidth, srcHeight, destWidth, destHeight) {
  console.log(...arguments);
  const vertScale = destWidth / srcWidth;
  const horizScale = destHeight / srcHeight;
  const scale = Math.min(vertScale, horizScale);
  return [srcWidth * scale, srcHeight * scale];
}

function parseAspectRatio(aspectRatio) {
  return aspectRatio.split(':').map((x) => parseInt(x));
}

const ASPECT_RATIO = '16:9';

export default function App() {
  const { width: windowWidth, height: windowHeight } = useWindowSize();
  const [width, height] = parseAspectRatio(ASPECT_RATIO);

  const [canvasWidth, canvasHeight] = calculateDimensions(
    width,
    height,
    windowWidth,
    windowHeight
  );
  const canvasStyle = { width: canvasWidth, height: canvasHeight };

  return (
    <div className="app">
      <canvas className="canvas" style={canvasStyle} />
    </div>
  );
}
