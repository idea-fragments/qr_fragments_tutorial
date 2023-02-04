import { ChangeEvent, FC, useCallback, useRef, useState } from "react"
import QRCode                                             from "qrcode"

export const QrController :FC = () => {
  const [url, setUrl] = useState("")
  const canvasRef = useRef<HTMLCanvasElement>(null)

  const previewCode = useCallback(async () => {
    try {
      QRCode.toCanvas(canvasRef.current, url)
    } catch (err) {
      console.error(err)
    }
  }, [url])

  const updateUrl = (e :ChangeEvent<HTMLInputElement>) => {
    setUrl(e.target.value)
  }

  return <div>
    <div>
    <input onChange={updateUrl}
           type={"text"}
           value={url}/>
    <button onClick={previewCode}>Preview</button>
    </div>
    <canvas ref={canvasRef} />
  </div>
}
