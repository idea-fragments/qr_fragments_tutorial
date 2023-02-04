import {
  QrGenerator,
  QrGeneratorProps
} from "components/QrGenerator"
import React, {
  ChangeEvent,
  useState
} from "react"

export default {
  title:     "QrGenerator",
  component: QrGenerator,
  argTypes:  {},
}

const Story = (args: Partial<QrGeneratorProps>) => {
  const [url, setUrl]               = useState("")
  const [isVisible, setIsVisibleTo] = useState(false)

  const updateUrl = (e: ChangeEvent<HTMLInputElement>) => {
    setUrl(e.target.value)
  }

  const toggleVisibility = () => {
    setIsVisibleTo(!isVisible)
  }

  return <div>
    <input onChange={updateUrl} type={"text"} value={url} />
    <button onClick={toggleVisibility}>Show/Hide</button>
    <div style={{ height: "200px", width: "200px" }}>
      <QrGenerator boxWidthPx={200} url={url} visible={isVisible} />
    </div>
  </div>
}

export const Default = Story.bind({})

// @ts-ignore
Default.args = {
  activeAction: "Home",
}
