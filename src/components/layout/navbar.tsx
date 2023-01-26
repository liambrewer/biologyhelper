import { Component, For } from 'solid-js';
import { A } from 'solid-start';

type NavLink = {
  label: string;
  href: string;
  end?: boolean;
};

const links: NavLink[] = [
  {
    label: 'Home',
    href: '/',
    end: true,
  },
  {
    label: 'About',
    href: '/about',
    end: true,
  },
];

const Navbar: Component = (props) => {
  return (
    <nav class='h-16 w-screen bg-green-500 text-white'>
      <div class='container mx-auto flex h-full flex-row items-center'>
        <h3 class='select-none text-3xl font-bold'>Biology Helpers</h3>
        <div class='ml-4 flex flex-row'>
          <For each={links}>
            {(link) => (
              <A
                href={link.href}
                end={link.end}
                class='rounded-md py-2 px-3 hover:bg-green-600'
              >
                {link.label}
              </A>
            )}
          </For>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
