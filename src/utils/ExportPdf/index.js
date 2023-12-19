import React from 'react';
import { Page, Text, View, Document, StyleSheet, PDFDownloadLink, Line } from '@react-pdf/renderer';
import ReactDOM from 'react-dom';
import { PDFViewer } from '@react-pdf/renderer';
import { Button } from 'bootstrap';

import styles from './ExportPdf.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const pdfstyles = StyleSheet.create({
  page: {
    flex: 'grid',
    flexDirection: 'row',
    backgroundColor: '#FFF',
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
    fontSize: 9,
    display: 'flex',
  },
});

{
  /* <tr key={index}>
                  <th scope="row">{index}</th>
                  <td>{items.Name}</td>
                  <td>{items.Position}</td>
                  <td>{items.Office}</td>
                  <td>{items.Age}</td>
                  <td>{items.StartDate}</td>
                  <td>{items.Salary}</td>
                </tr> */
}

const MyDocument = ({ data }) => (
  <Document>
    <Page size="A4" style={pdfstyles.page}>
      {data.map((item, index) => {
        return (
          <div key={index}>
            <View style={pdfstyles.section}>
              <Text>{item.Name}</Text>
            </View>
            <View style={pdfstyles.section}>
              <Text>{item.Position}</Text>
            </View>
            <View style={pdfstyles.section}>
              <Text>{item.Office}</Text>
            </View>
            <View style={pdfstyles.section}>
              <Text>{item.Age}</Text>
            </View>
            <View style={pdfstyles.section}>
              <Text>{item.StartDate}</Text>
            </View>
            <View style={pdfstyles.section}>
              <Text>{item.Salary}</Text>
            </View>
            <Line color={'red'} size={2}></Line>
          </div>
        );
      })}
    </Page>
  </Document>
);

const ExportPdf = ({ v_data }) => {
  return (
    // className={cx('wrapper')}
    <div>
      <PDFViewer showToolbar={true} width={1040} height={600}>
        <MyDocument data={v_data} />
      </PDFViewer>
    </div>
  );
};

export default ExportPdf;
