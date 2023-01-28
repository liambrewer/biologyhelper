import { Icon } from 'solid-heroicons';
import { arrowDown } from 'solid-heroicons/solid';
import { Component, createEffect, createSignal, For, Show } from 'solid-js';
import Button from '~/components/ui/button';
import TextInput from '~/components/ui/text-input';

export interface CharConversions {
  [key: string]: string;
}

interface CharConverted {
  from: string;
  to: string;
}

type Props = {
  conversions: CharConversions;
};

const CharConverterSharedHelper: Component<Props> = (props) => {
  const conversionKeys = Object.keys(props.conversions).join('');

  const conversionsRegExp = new RegExp(
    `[^${conversionKeys.toUpperCase()}]`,
    'gi'
  );

  const [value, setValue] = createSignal('');
  const [converted, setConverted] = createSignal<CharConverted[]>([]);
  const [copied, setCopied] = createSignal(false);

  createEffect(() => {
    setConverted([
      ...value()
        .toUpperCase()
        .split('')
        .map<CharConverted>((char) => ({
          from: char,
          to: props.conversions[char],
        })),
    ]);
  });

  const handleInput = (
    e: InputEvent & {
      currentTarget: HTMLInputElement;
      target: Element;
    }
  ) => {
    setValue(
      e.currentTarget.value.replace(conversionsRegExp, '').toUpperCase()
    );
    e.currentTarget.value = value();
  };

  const handleClear = () => {
    setValue('');
  };

  const handleCopy = () => {
    const text = converted()
      .map((conversion) => conversion.to)
      .join('');

    navigator.clipboard.writeText(text);

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 3000);
  };

  return (
    <div class='flex flex-col space-y-2'>
      <h4 class='text-lg font-semibold'>Input</h4>
      <div class='flex w-full flex-row space-x-1'>
        <TextInput
          value={value()}
          oninput={(e) => handleInput(e)}
          placeholder={conversionKeys.toUpperCase()}
          spellcheck={false}
        />
        <Button onclick={handleClear} disabled={value() === ''}>
          Clear
        </Button>
      </div>
      <div class='flex flex-row items-center space-x-2'>
        <h4 class='text-lg font-semibold'>Output</h4>
        <Show when={converted().length > 0}>
          <div class='text-sm'>
            <Show
              when={copied()}
              fallback={
                <p
                  class='text-gray-500 hover:cursor-pointer hover:underline'
                  onclick={handleCopy}
                  role='button'
                >
                  Copy result to clipboard
                </p>
              }
            >
              <p class='text-green-500'>Copied!</p>
            </Show>
          </div>
        </Show>
      </div>
      <div class='flex flex-row flex-wrap gap-y-2 divide-x'>
        <For each={converted()}>
          {(conversion) => (
            <div class='flex flex-col items-center bg-gray-100 px-2 py-0.5 text-center text-xl first:rounded-l-lg last:rounded-r-lg'>
              <span class='select-none'>{conversion.from}</span>
              <Icon path={arrowDown} class='w-4' />
              <span>{conversion.to}</span>
            </div>
          )}
        </For>
      </div>
    </div>
  );
};

export default CharConverterSharedHelper;
