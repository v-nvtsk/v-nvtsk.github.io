import { jsPDF, jsPDFOptions } from 'jspdf'

export async function saveToPdf() {
  const element = document.querySelector('#page') as HTMLElement
  if (element == null) return

  await replaceSvgImagesWithPngs(element)

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
  doc.addFont('fonts/PTSans-Bold.ttf', 'PT Sans', 'bold')
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

function svgTextToBase64Url(svgText: string): string {
  const base64 = btoa(svgText)
  return `data:image/svg+xml;base64,${base64}`
}

async function replaceSvgImagesWithPngs(container: HTMLElement) {
  const svgImgs = container.querySelectorAll<HTMLImageElement>('img[src$=".svg"]')

  for (const img of svgImgs) {
    const response = await fetch(img.src)
    const svgText = await response.text()
    const svgUrl = svgTextToBase64Url(svgText)

    const image = new Image()
    image.src = svgUrl

    await new Promise((resolve) => {
      image.onload = resolve
    })

    const canvas = document.createElement('canvas')
    canvas.width = img.width || image.width
    canvas.height = img.height || image.height

    const ctx = canvas.getContext('2d')
    ctx?.drawImage(image, 0, 0)

    img.src = canvas.toDataURL('image/png')
  }
}
