import { Meta } from 'solid-start';
import MRNATranscriptionHelper from '~/components/helpers/mrna-transcription';
import SiteTitle from '~/components/utils/site-title';

export default function MRNATranscription() {
  return (
    <>
      <SiteTitle>mRNA Transcription</SiteTitle>
      <Meta name='description' content='Transcribe DNA to mRNA' />
      <MRNATranscriptionHelper />
    </>
  );
}
