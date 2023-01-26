import { JSX, ParentComponent } from 'solid-js';

type Props = JSX.ButtonHTMLAttributes<HTMLButtonElement>;

const Button: ParentComponent<Props> = (props) => {
  return (
    <button class='rounded-md bg-slate-200 p-2 hover:bg-slate-300' {...props} />
  );
};

export default Button;
