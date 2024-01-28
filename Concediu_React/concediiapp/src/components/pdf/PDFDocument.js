import React, { useEffect, useState } from "react";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";
import { useParams } from "react-router-dom";
import axios from "axios";
import { PDFViewer } from "@react-pdf/renderer";
const styles = StyleSheet.create({
  view: {
    zoom: "100%",
  },
  page: {
    // flexDirection: "row",
    backgroundColor: "white",
    size: "A5",
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  title: { textAlign: "center", padding: "20" },
});
function PDFDocument() {
  const { id } = useParams();
  const [holiday, setHoliday] = useState();
  useEffect(() => {
    async function initializeHolidayData(holidayId) {
      const url =
        process.env.REACT_APP_API_ROUTE + "/HolidayDetails/GetHolidayById";
      console.log(id);
      await axios
        .get(url, {
          params: {
            holidayId: holidayId,
          },
        })
        .then((res) => {
          setHoliday(res.data);
        });
    }

    if (!holiday) initializeHolidayData(id);
  }, [holiday, id]);

  return (
    <PDFViewer width={"95%"} height={"90%"} style={styles.view}>
      <Document>
        <Page style={styles.page}>
          <View style={styles.title}>
            <Text>
              Cerere concediu{" "}
              {holiday
                ? new Date(holiday.dataInceput).toLocaleDateString("en-GB")
                : new Date().toLocaleDateString("en-GB")}{" "}
              -{" "}
              {holiday
                ? new Date(holiday.dataSfarsit).toLocaleDateString("en-GB")
                : new Date().toLocaleDateString("en-GB")}
            </Text>
          </View>
          <View style={styles.section}>
            <Text>
              Angajatul {holiday ? holiday?.angajat.nume : " "}, subordonat
              managerului {holiday ? holiday?.angajat.manager.nume : ""} a creat
              prin intermediul aplicatiei o cerere de concediu in perioada{" "}
              {holiday
                ? new Date(holiday.dataInceput).toLocaleDateString("en-GB")
                : new Date().toLocaleDateString("en-GB")}{" "}
              -{" "}
              {holiday
                ? new Date(holiday.dataSfarsit).toLocaleDateString("en-GB")
                : new Date().toLocaleDateString("en-GB")}{" "}
              de tip {holiday ? holiday.tipConcediu.nume : ""} avand starea{" "}
              {holiday?.stareConcediu.nume ? holiday.stareConcediu.nume : ""}.
            </Text>
          </View>
        </Page>
      </Document>
    </PDFViewer>
  );
}
export default PDFDocument;
