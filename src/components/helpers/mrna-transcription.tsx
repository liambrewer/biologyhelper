import { Component, createEffect, createSignal } from 'solid-js';

interface ConversionObject {
  [key: string]: string;
}

const conversions: ConversionObject = {
  A: 'U',
  T: 'A',
  G: 'C',
  C: 'G',
};

type Props = {};

const MRNATranscriptionHelper: Component<Props> = (props) => {
  const [value, setValue] = createSignal('');
  const [result, setResult] = createSignal('');

  createEffect(() => {
    setResult(() => {
      return value()
        .toUpperCase()
        .split('')
        .map((char) => conversions[char])
        .join('');
    });
  });

  return (
    <>
      <input
        class='border-2'
        type='text'
        value={value()}
        oninput={(e) => setValue((e.target as HTMLInputElement).value)}
      />
      <p>{result()}</p>
    </>
  );
};

export default MRNATranscriptionHelper;
