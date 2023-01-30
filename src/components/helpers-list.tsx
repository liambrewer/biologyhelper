import type { CollectionEntry } from 'astro:content';
import { Component, For } from 'solid-js';

type Props = {
  helpers: CollectionEntry<'helpers'>[];
};

const HelpersList: Component<Props> = (props) => {
  return (
    <div class='container mx-auto'>
      <div class='my-10 flex flex-col overflow-clip rounded-lg bg-green-500 text-white'>
        <div class='flex w-full items-center border-b-2 p-4'>
          <h2 class='text-2xl font-bold'>Helpers</h2>
        </div>
        <ul class='flex-grow divide-y'>
          <For each={props.helpers}>
            {(helper) => (
              <li class='group flex w-full items-stretch hover:bg-green-400'>
                <a
                  href={`/${helper.slug}`}
                  class='w-full py-2 px-4 text-lg group-hover:underline'
                >
                  {helper.data.title}
                </a>
              </li>
            )}
          </For>
        </ul>
      </div>
    </div>
  );
};

export default HelpersList;
