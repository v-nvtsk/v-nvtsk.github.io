import QRCode from 'qrcode'
import { useEffect, useRef } from 'react'

interface Props {
  text?: string
  qrLevel?: 'L' | 'M' | 'Q' | 'H'
  scale?: number
}

export function QR({ text = '', qrLevel = 'L', scale = 3 }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (canvasRef.current) {
      QRCode.toCanvas(
        canvasRef.current,
        text,
        { errorCorrectionLevel: qrLevel, margin: 0, scale },
        error => error && console.error(error),
      )
    }
  }, [])

  return canvasRef && <canvas ref={canvasRef} />
}
