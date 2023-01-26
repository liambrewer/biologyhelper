import { ParentComponent } from 'solid-js';
import { Title } from 'solid-start';

const SiteTitle: ParentComponent = (props) => {
  return <Title>{props.children} | Biology Helper</Title>;
};

export default SiteTitle;
