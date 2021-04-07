import { useState } from "react"
import { tw } from "twind"

export default function inputAnak() {
  const { childRM, childName, addItem, isEditable } = props
  const [RM, setRM] = useState(childRM)
  const [name, setName] = useState(childName)

  const childRMHandler = e => setRM(e.target.value)
  const childNameHandler = e => setRM(e.target.value)

  return (
    <>
      <div>
        <input type="text" className={tw `border-2 border-black`}/>
      </div>
    </>
  )
}