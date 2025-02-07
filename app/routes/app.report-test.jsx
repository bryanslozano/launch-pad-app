import {
    Box,
    Card,
    Layout,
    Link,
    List,
    Page,
    Text,
    BlockStack,
  } from "@shopify/polaris";
  import { TitleBar } from "@shopify/app-bridge-react";
  
  export default function ReportTest() {
    return (
        <Page>
      <TitleBar title="Test page" />
      <iframe
        src="https://lookerstudio.google.com/embed/reporting/f908de8b-0215-4c85-8d8e-dada0efedaa2/page/p_ig7dmtugfd"
        width="100%"
        height="1000px"
        frameBorder="0"
        allowFullScreen
      ></iframe>
      </Page>
    );
}