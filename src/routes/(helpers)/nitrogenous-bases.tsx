import { Meta } from 'solid-start';
import NitrogenousBasesHelper from '~/components/helpers/nitrogenous-bases';
import HelperLayout from '~/components/layout/helper/layout';
import SiteTitle from '~/components/utils/site-title';

export default function NitrogenousBases() {
  return (
    <HelperLayout title='Nitrogenous Bases'>
      <SiteTitle>Nitrogenous Bases</SiteTitle>
      <Meta name='description' content='Match Nigtrogenous Bases pairs' />
      <NitrogenousBasesHelper />
    </HelperLayout>
  );
}
