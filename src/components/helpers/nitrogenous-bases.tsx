import { Component, createEffect, createSignal } from 'solid-js';

interface ConversionObject {
  [key: string]: string;
}

const conversions: ConversionObject = {
  A: 'T',
  T: 'A',
  G: 'C',
  C: 'G',
};

const conversionsRegExp = new RegExp(
  `[^${Object.keys(conversions).join('')}]`,
  'gi'
);

type Props = {};

const NitrogenousBasesHelper: Component<Props> = (props) => {
  const [value, setValue] = createSignal('');
  const [result, setResult] = createSignal('');

  createEffect(() => {
    console.log(value());
  });

  createEffect(() => {
    setResult(() => {
      return value()
        .toUpperCase()
        .split('')
        .map((char) => conversions[char])
        .join('');
    });
  });

  const handleInput = (
    e: InputEvent & {
      currentTarget: HTMLInputElement;
      target: Element;
    }
  ) => {
    setValue(e.currentTarget.value.replace(conversionsRegExp, ''));
    e.currentTarget.value = value();
  };

  return (
    <>
      <input
        class='border-2'
        type='text'
        value={value()}
        oninput={(e) => handleInput(e)}
      />
      <p>{result()}</p>
    </>
  );
};

export default NitrogenousBasesHelper;
