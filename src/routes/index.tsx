import { For } from 'solid-js';
import { A } from 'solid-start';

interface HelperLink {
  href: string;
  label: string;
}

const links: HelperLink[] = [
  {
    href: '/mrna-transcription',
    label: 'mRNA Transcription',
  },
  {
    href: '/nitrogenous-bases',
    label: 'Nitrogenous Bases',
  },
];

export default function Home() {
  return (
    <div class='container mx-auto'>
      <div class='my-10 flex flex-col overflow-clip rounded-lg bg-green-500 text-white'>
        <div class='flex w-full items-center border-b-2 p-4'>
          <h2 class='text-2xl font-bold'>Helpers</h2>
        </div>
        <ul class='flex-grow divide-y'>
          <For each={links}>
            {(link) => (
              <li class='group flex w-full items-stretch hover:bg-green-400'>
                <A
                  href={link.href}
                  class='w-full py-2 px-4 text-lg group-hover:underline'
                >
                  {link.label}
                </A>
              </li>
            )}
          </For>
        </ul>
      </div>
    </div>
  );
}
