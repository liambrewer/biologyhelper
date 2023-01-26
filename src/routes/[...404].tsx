import { A } from 'solid-start';

export default function NotFound() {
  return (
    <main class='flex h-screen w-screen flex-col items-center justify-center'>
      <h2 class='text-2xl font-bold'>404 Not Found</h2>
      <p>The requested resource does not exist on this server.</p>
      <A href='/' class='mt-4 text-lg text-blue-500 hover:underline'>
        Take me home
      </A>
    </main>
  );
}
