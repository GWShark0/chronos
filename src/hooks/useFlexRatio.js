import useResizeObserver from 'use-resize-observer';

function calculateDimensions(srcWidth, srcHeight, destWidth, destHeight) {
  const vertScale = destWidth / srcWidth;
  const horizScale = destHeight / srcHeight;
  const scale = Math.min(vertScale, horizScale);
  return [srcWidth * scale, srcHeight * scale];
}

function parseAspectRatio(aspectRatio) {
  return aspectRatio.split(':').map((x) => parseInt(x));
}

export default function useFlexRatio(aspectRatio) {
  const {
    ref,
    width: containerWidth = 0,
    height: containerHeight = 0,
  } = useResizeObserver();

  const [aspectWidth, aspectHeight] = parseAspectRatio(aspectRatio);
  const [width, height] = calculateDimensions(
    aspectWidth,
    aspectHeight,
    containerWidth,
    containerHeight
  );

  return { ref, width, height };
}
