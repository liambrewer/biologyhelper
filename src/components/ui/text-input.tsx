import { JSX, Component } from 'solid-js';

type Props = Omit<JSX.InputHTMLAttributes<HTMLInputElement>, 'type'>;

const TextInput: Component<Props> = (props) => {
  return (
    <input
      type='text'
      class='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2 text-gray-900 focus:border-green-500 focus:ring focus:ring-green-500 disabled:bg-gray-200 disabled:text-gray-400 disabled:hover:cursor-not-allowed'
      {...props}
    />
  );
};

export default TextInput;
