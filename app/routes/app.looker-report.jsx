import React from 'react';
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


export default function LookerReport() {
  return (
    <div>
      <h1>Looker Studio Report</h1>
      <iframe
        src="https://lookerstudio.google.com/embed/reporting/f908de8b-0215-4c85-8d8e-dada0efedaa2/page/p_ig7dmtugfd"
        width="100%"
        height="100%"
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
  );
}