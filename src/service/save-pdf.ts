import html2pdf from 'html2pdf.js'

export async function saveToPdf() {
  const element = document.querySelector('#page')
  if (element === null) return

  const rect = element.getBoundingClientRect()

  // Определяем нужные параметры для сохранения
  const options = {
    margin: 1,
    pagebreak: { mode: ['avoid-all', 'css', 'legacy'] },
    enableLinks: true,
    filename: 'cv.pdf',
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: {
      scale: 3,
      useCORS: true,
    },
    jsPDF: {
      unit: 'px',
      format: [rect.width, rect.height],
      orientation: 'portrait',
      compress: true,
      putOnlyUsedFonts: true,
      hotfixes: ['px_scaling'],
    },
  }

  // Генерируем PDF
  await html2pdf()
    .from(element)
    .set(options)
    .save('cv.pdf')
}
