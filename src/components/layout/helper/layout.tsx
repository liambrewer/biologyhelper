import { ParentComponent } from 'solid-js';
import HelperNavbar from './navbar';

type Props = {
  title: string;
};

const HelperLayout: ParentComponent<Props> = (props) => {
  return (
    <>
      <HelperNavbar title={props.title} />
      <main class='container mx-auto flex flex-col pt-2'>{props.children}</main>
    </>
  );
};

export default HelperLayout;
