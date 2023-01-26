import { A, Outlet } from 'solid-start';

export default function HelpersLayout() {
  return (
    <>
      <nav class='mb-2'>
        <ul>
          <li>
            <A href='/' class='text-blue-500 hover:underline'>
              Return to homepage
            </A>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}
