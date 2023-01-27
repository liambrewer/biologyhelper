import { Component } from 'solid-js';

const Footer: Component = (props) => {
  return (
    <footer class='h-24 w-full border-t bg-gray-50'>
      <div class='container mx-auto flex h-full w-full items-center justify-center'>
        <h6>
          <a
            href='https://github.com/stevharve/biologyhelper'
            target='_blank'
            rel='noreferrer noopener'
            class='text-blue-500 hover:underline'
          >
            Biology Helper
          </a>{' '}
          - A tool made by students for students - Created by{' '}
          <a
            href='https://liambrewer.me/'
            target='_blank'
            rel='noreferrer noopener'
            class='text-blue-500 hover:underline'
          >
            Liam Brewer
          </a>
        </h6>
      </div>
    </footer>
  );
};

export default Footer;
