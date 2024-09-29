import QRCode from 'qrcode'
import { useEffect, useRef } from 'react'

export function QR({ text = '' }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    QRCode.toCanvas(
      canvasRef.current,
      text,
      { errorCorrectionLevel: 'L', margin: 0, scale: 3 },
      error => error && console.error(error),
    )
  }, [])

  return canvasRef && <canvas ref={canvasRef} />
}
