import { Component } from 'solid-js';
import CharConverterSharedHelper, {
  CharConversions,
} from './shared/char-converter';

const conversions: CharConversions = {
  A: 'U',
  T: 'A',
  G: 'C',
  C: 'G',
};

type Props = {};

const MRNATranscriptionHelper: Component<Props> = (props) => {
  return <CharConverterSharedHelper conversions={conversions} />;
};

export default MRNATranscriptionHelper;
