import { Document, Page, StyleSheet, Text } from '@react-pdf/renderer';
import React from 'react';

const styles = StyleSheet.create({
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
  },
  text: {
    margin: 12,
    fontSize: 14,
    textAlign: 'justify',
    fontFamily: 'Times-Roman',
  },
  header: {
    fontSize: 12,
    marginBottom: 20,
    textAlign: 'center',
    color: 'grey',
  },
  pageNumber: {
    position: 'absolute',
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: 'center',
    color: 'grey',
  },
});

const PDFFile = ({ check, user }) => {
  return (
    <Document>
      <Page style={styles.body}>
        <Text style={styles.header} fixed>
          Thank you very much for enroll to this course. Hope your journey will
          be a great journey with us.
        </Text>
        <Text style={styles.text}>You have enrolled to: {check.name}.</Text>
        <Text style={styles.text}>
          Course duration: {check.ratings}.30 hours.
        </Text>
        <Text style={styles.text}>Course ratings: {check.ratings} stars.</Text>
        <Text style={styles.text}>Course Price: {check.price} $</Text>
        <Text style={styles.text}>Student name: {user?.displayName}</Text>
        <Text style={styles.text}>Student email: {user.email}</Text>
        <Text style={styles.text}>Student ID: {user.uid}</Text>

        <Text
          style={styles.pageNumber}
          render={({ pageNumber, totalPages }) =>
            `${pageNumber} / ${totalPages}`
          }
        />
      </Page>
    </Document>
  );
};

export default PDFFile;
