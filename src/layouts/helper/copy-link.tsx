import type { Component } from 'solid-js';
import { createSignal, Show } from 'solid-js';
import { Icon } from 'solid-heroicons';
import { share, check } from 'solid-heroicons/solid';

interface Props {
  link: string;
}

const CopyLink: Component<Props> = (props) => {
  const [copied, setCopied] = createSignal(false);

  const handleCopy = () => {
    const text = props.link;

    navigator.clipboard.writeText(text);

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 3000);
  };

  return (
    <button
      class='flex h-full select-none flex-row items-center space-x-2 px-2 enabled:hover:cursor-pointer enabled:hover:bg-gray-200'
      onclick={handleCopy}
      disabled={copied()}
    >
      <Icon path={copied() ? check : share} class='w-4' />
      <Show when={copied()} fallback={<span>Share</span>}>
        <span>Link copied to clipboard!</span>
      </Show>
    </button>
  );
};

export default CopyLink;
