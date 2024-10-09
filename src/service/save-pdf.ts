import { jsPDF, jsPDFOptions } from 'jspdf'

export async function saveToPdf() {
  console.log('saveToPdf: ')
  const element = document.querySelector('#page') as HTMLElement
  if (element === null) return

  const rect = element.getBoundingClientRect()

  const portrait = rect.width < rect.height
  const jsPDFOptions: jsPDFOptions = {
    orientation: portrait ? 'p' : 'l',
    unit: 'px',
    format: [rect.height, rect.width],
    compress: true,
    hotfixes: ['px_scaling'],
  }

  const doc = new jsPDF(jsPDFOptions)
  doc.addFont('fonts/OpenSansCondensed-Light.ttf', 'Open Sans Condensed', 'normal')
  doc.setFont('Open Sans Condensed')

  await doc.html(element, {
    callback: function (doc) {
      doc.deletePage(1)
      doc.save('cv.pdf')
    },
    autoPaging: false,
    image: { type: 'jpeg', quality: 80 },
    margin: 0,
  })
}
