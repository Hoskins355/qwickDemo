import { component$, Slot } from '@builder.io/qwik';
import Header from '../components/header/header';
import Menu from '../components/menu/menu';

export default component$(() => {
  return (
    <>
      <main>
        <Header />
        <Menu />
        <section>
          <Slot />
        </section>
      </main>
      <footer>
        <a href="https://www.builder.io/" target="_blank">
          Made with ♡ by Builder.io
        </a>
      </footer>
    </>
  );
});
