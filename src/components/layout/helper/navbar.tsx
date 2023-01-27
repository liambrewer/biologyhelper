import { Icon } from 'solid-heroicons';
import { share } from 'solid-heroicons/solid';
import { Component, createSignal, Show } from 'solid-js';

type Props = {
  title: string;
};

const HelperNavbar: Component<Props> = (props) => {
  const [copied, setCopied] = createSignal(false);

  return (
    <nav class='h-10 w-screen border-b bg-gray-50'>
      <div class='container mx-auto flex h-full w-full flex-row items-center'>
        <h3 class='text-xl'>{props.title}</h3>
        <div class='flex-grow' />
        <button
          class='flex h-full flex-row items-center space-x-2 px-2 hover:cursor-pointer hover:bg-gray-200'
          onclick={() => setCopied(true)}
        >
          <Icon path={share} class='w-4' />
          <Show when={copied()} fallback={<span>Share</span>}>
            <span>Link copied to clipboard!</span>
          </Show>
        </button>
      </div>
    </nav>
  );
};

export default HelperNavbar;
