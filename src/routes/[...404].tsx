import { A } from 'solid-start';
import { HttpStatusCode } from 'solid-start/server';

export default function NotFound() {
  return (
    <>
      <HttpStatusCode code={404} />
      <main class='-mt-16 flex h-screen w-full flex-col items-center justify-center'>
        <h2 class='text-2xl font-bold'>404 Not Found</h2>
        <p>The requested resource does not exist on this server.</p>
        <A href='/' class='mt-4 text-lg text-blue-500 hover:underline'>
          Take me home
        </A>
      </main>
    </>
  );
}
