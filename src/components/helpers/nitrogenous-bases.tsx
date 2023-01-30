import type { Component } from 'solid-js';
import CharConverterSharedHelper, {
  CharConversions,
} from './shared/char-converter';

const conversions: CharConversions = {
  A: 'T',
  T: 'A',
  G: 'C',
  C: 'G',
};

type Props = {};

const NitrogenousBasesHelper: Component<Props> = (props) => {
  return <CharConverterSharedHelper conversions={conversions} />;
};

export default NitrogenousBasesHelper;
