import { JSX, Component } from 'solid-js';

type Props = Omit<JSX.InputHTMLAttributes<HTMLInputElement>, 'type'>;

const TextInput: Component<Props> = (props) => {
  return (
    <input
      type='text'
      class='block w-full appearance-none rounded-lg border border-gray-300 bg-gray-50 p-2 text-gray-900 focus:border-blue-500 focus:ring focus:ring-blue-500'
      {...props}
    />
  );
};

export default TextInput;
