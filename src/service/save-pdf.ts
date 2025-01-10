import { jsPDF, jsPDFOptions } from 'jspdf'

export async function saveToPdf() {
  const element = document.querySelector('#page') as HTMLElement
  if (element == null) return

  const rect = element.getBoundingClientRect()
  const portrait = rect.width < rect.height

  const pdfOptions: jsPDFOptions = {
    unit: 'px',
    format: [rect.height, rect.width],
    orientation: portrait ? 'portrait' : 'landscape',
    compress: true,
    putOnlyUsedFonts: true,
    hotfixes: ['px_scaling'],

  }
  const doc = new jsPDF(pdfOptions)

  doc.addFont('fonts/PTSans-Regular.ttf', 'PT Sans', 'normal')
  doc.setFont('PT Sans')
  await doc.html(element, {
    callback: function (doc) {
      doc.deletePage(1)
      doc.save('cv.pdf')
    },
    autoPaging: false,
    image: { type: 'jpeg', quality: 1 },
    margin: 0,
  })
}
