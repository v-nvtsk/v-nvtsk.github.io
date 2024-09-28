import QRCode from 'qrcode'
import { useEffect, useRef } from 'react'

export function QR({ text = '' }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    QRCode.toCanvas(
      canvasRef.current,
      text,
      error => error && console.error(error),
    )
  }, [])

  return canvasRef && <canvas ref={canvasRef} />
}
