import { Meta } from 'solid-start';
import MRNATranscriptionHelper from '~/components/helpers/mrna-transcription';
import HelperLayout from '~/components/layout/helper/layout';
import SiteTitle from '~/components/utils/site-title';

export default function MRNATranscription() {
  return (
    <HelperLayout title='mRNA Transcription'>
      <SiteTitle>mRNA Transcription</SiteTitle>
      <Meta name='description' content='Transcribe DNA to mRNA' />
      <MRNATranscriptionHelper />
    </HelperLayout>
  );
}
