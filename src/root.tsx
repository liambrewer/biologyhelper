// @refresh reload
import { Suspense } from 'solid-js';
import {
  Body,
  ErrorBoundary,
  FileRoutes,
  Head,
  Html,
  Link,
  Meta,
  Routes,
  Scripts,
  Title,
} from 'solid-start';
import Footer from './components/layout/footer';
import Navbar from './components/layout/navbar';
import './root.css';

export default function Root() {
  return (
    <Html lang='en' class='font-inter'>
      <Head>
        <Title>Biology Helper</Title>
        <Meta charset='utf-8' />
        <Meta name='viewport' content='width=device-width, initial-scale=1' />

        <Link rel='preconnect' href='https://fonts.googleapis.com' />
        <Link
          rel='preconnect'
          href='https://fonts.gstatic.com'
          crossorigin='anonymous'
        />
        <Link
          href='https://fonts.googleapis.com/css2?family=Inter&display=swap'
          rel='stylesheet'
        ></Link>
      </Head>
      <Body>
        <div class='min-h-screen'>
          <Navbar />
          <Suspense>
            <ErrorBoundary>
              <Routes>
                <FileRoutes />
              </Routes>
            </ErrorBoundary>
          </Suspense>
        </div>
        <Scripts />
        <Footer />
      </Body>
    </Html>
  );
}
