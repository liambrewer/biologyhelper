import { JSX, ParentComponent } from 'solid-js';

type Props = JSX.ButtonHTMLAttributes<HTMLButtonElement>;

const Button: ParentComponent<Props> = (props) => {
  return (
    <button
      class='select-none rounded-md bg-green-500 px-3 py-2 text-white transition-colors focus:ring focus:ring-green-500 focus:ring-offset-1 enabled:hover:bg-green-400 disabled:bg-gray-200 disabled:text-gray-400 disabled:hover:cursor-not-allowed'
      {...props}
    />
  );
};

export default Button;
