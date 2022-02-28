import React from 'react';
import {
  TFrame, THead, TBody, TH, TR,
} from './Table.styles';

const Table: React.FC = () => (
  <TFrame>
    <THead>
      <TH>NR</TH>
      <TH>DATE</TH>
      <TH>PRODUCT NAME</TH>
    </THead>
    <TBody>
      <TR>
        <TH>353</TH>
        <TH>31.01.2022</TH>
        <TH>Black Sand Magic</TH>
        <TH>135,33 €</TH>
      </TR>
      <TR>
        <TH>353</TH>
        <TH>31.01.2022</TH>
        <TH>Black Sand Magic</TH>
        <TH>135,33 €</TH>
      </TR>
    </TBody>
  </TFrame>
);

export default Table;
