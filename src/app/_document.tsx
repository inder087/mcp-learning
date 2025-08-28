import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* New Relic Browser Monitoring */}
        <script type="text/javascript" dangerouslySetInnerHTML={{ __html: `
;window.NREUM||(NREUM={});NREUM.init={session_replay:{enabled:true,block_selector:'',mask_text_selector:'*',sampling_rate:10.0,error_sampling_rate:100.0,mask_all_inputs:true,collect_fonts:true,inline_images:false,inline_stylesheet:true,fix_stylesheets:true,preload:false,mask_input_options:{}},distributed_tracing:{enabled:true},privacy:{cookies_enabled:true},ajax:{deny_list:["bam.nr-data.net"]}};
;NREUM.loader_config={accountID:"5860057",trustKey:"5860057",agentID:"601579558",licenseKey:"NRJS-de99fd20304e9ea2824",applicationID:"601579558"};
;NREUM.info={beacon:"bam.nr-data.net",errorBeacon:"bam.nr-data.net",licenseKey:"NRJS-de99fd20304e9ea2824",applicationID:"601579558",sa:1};
// ...rest of the New Relic loader script here...
        `}} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
