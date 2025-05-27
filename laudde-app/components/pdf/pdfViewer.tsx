'use client'

import { PDFViewer as Viewer, Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer'

type Campo = {
  name: string
  description: string
}

type Props = {
  titulo: string
  dados: Record<string, Campo>
}

const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontSize: 12,
    fontFamily: 'Helvetica',
  },
  section: {
    marginBottom: 12,
  },
  title: {
    fontSize: 16,
    marginBottom: 16,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  field: {
    marginBottom: 10,
  },
  fieldName: {
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  fieldValue: {
    fontSize: 11,
  },
  viewer: {
    width: '100%',
    height: '500px',
    border: '1px solid #ccc',
  },
})

const MyDocument = ({ titulo, dados }: Props) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <Text style={styles.title}>{titulo || 'Modelo Personalizado'}</Text>
      {Object.entries(dados).map(([key, campo]) => (
        <View key={key} style={styles.field}>
          <Text style={styles.fieldName}>{campo.name}</Text>
          <Text style={styles.fieldValue}>{campo.description}</Text>
        </View>
      ))}
    </Page>
  </Document>
)

export default function PDFViewer({ titulo, dados }: Props) {
  if (Object.keys(dados).length === 0) return null

  return (
    <div style={styles.viewer as React.CSSProperties}>
      <Viewer>
        <MyDocument titulo={titulo} dados={dados} />
      </Viewer>
    </div>
  )
}
