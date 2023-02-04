import QRCode from "qrcode"
import {
  FC,
  useCallback,
  useEffect,
  useRef
}             from "react"

export type QrGeneratorProps = {
  boxWidthPx: number,
  url: string,
  visible: boolean,
}

export const QrGenerator: FC = ({ boxWidthPx, url, visible }: QrGeneratorProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  const previewCode = useCallback(async () => {
    if (!canvasRef.current || !visible) return

    QRCode.toCanvas(canvasRef.current, url, { width: boxWidthPx })
  }, [boxWidthPx, url, visible])

  useEffect(() => { previewCode().then() }, [previewCode])

  return <canvas style={{ display: visible ? "initial" : "none" }}
                 ref={canvasRef} />
}
