import { tw } from 'twind'
import { useState }from 'react'

export default function Home() {
  const [inputFields, setInputFields] = useState([
    {
      firstName: '', 
      lastName: '',
      isEditable: true
    },
  ])

  const handleChaneInput = (index, event) => {
    const values = [...inputFields]
    values[index][event.target.name] = event.target.value
    setInputFields(values)
  }

  const handleSubmit = e => {
    e.preventDefault()
  }
  
  const handleAddFields = () => {
    setInputFields([...inputFields, { firstName: '', lastName: '', isEditable: true}])
  }

  const handleRemoveFields = (index) => {
    const values = [...inputFields]
    values.splice(index, 1)
    setInputFields(values)
  }

  return (
    <>
      <div className={tw `container mx-auto`}>
        <h2>Form Mengsedih</h2>
        <form onSubmit={handleSubmit}>
          {inputFields.map((inputFields, index) => {
            if(index >= 0) {
              return (
                <div key={index} className={tw `flex`}>
                <div>
                  <input className={tw `border-2 mt-5 border-gray-700 mr-2 ${inputFields.isEditable ? "text-gray-800" : "text-gray-500"}`} onChange={event => handleChaneInput(index, event)} name="firstName" placeholder="First Name" value={inputFields.firstName} type="text"/>
                  <input className={tw `border-2 mt-5 border-gray-700 ml-2 ${inputFields.isEditable ? "text-gray-800" : "text-gray-500"}`} onChange={event => handleChaneInput(index, event)} name="lastName" placeholder="Last Name" value={inputFields.lastName} type="text"/>
                </div>
                <div>
                  { inputFields.isEditable ? (
                    <button className={tw `ml-4 mt-5 px-2 bg-gray-500`} onClick={() => handleAddFields(index)} >ADD</button>
                  ) : (
                    <>
                      <button className={tw `ml-4 mt-5 px-2 bg-gray-500`}>+</button>
                      <button className={tw `ml-4 mt-5 px-2 bg-gray-500`}>-</button>
                    </>
                  )}
                </div>
              </div>
              )
            }
          })}
          <button onClick={handleSubmit} className={tw `p-2 bg-gray-500`}>SEND</button>
        </form>
      </div>
    </>
  )
}