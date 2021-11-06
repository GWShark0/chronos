import useFlexRatio from './useFlexRatio';

import wideBirb from './birbs/wide-birb.jpg';
import squareBirb from './birbs/square-birb.jpg';
import tallBirb from './birbs/tall-birb.jpg';

const BIRB_MAP = {
  '16:9': wideBirb,
  '1:1': squareBirb,
  '9:16': tallBirb,
};

export default function Stage(props) {
  const { aspectRatio = '16:9' } = props;
  const { ref, width, height } = useFlexRatio(aspectRatio);
  const canvasStyle = { width, height };

  const birb = BIRB_MAP[aspectRatio];

  return (
    <div className="preview" ref={ref}>
      <img style={canvasStyle} src={birb} />
    </div>
  );
}
