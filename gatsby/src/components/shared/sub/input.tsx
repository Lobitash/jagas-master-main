import React from 'react'
import styled from 'styled-components'
import { MOBILE_BREAKPOINT, TABLET_BREAKPOINT } from '@util/constants'


interface Props {
  inputType?: string;
  placeHolder?: string;
  isTextArea?: boolean;
  isCheckbox?: boolean;
  required?: boolean;
  onChange?: () => void;
  name?: string;
}

const InputBlock = styled.input`
border: 1px solid #D9D9D9;
padding: 10px 20px;
margin:  10px 0px;
width: 100%;
::placeholder {
  color: #666666;
}

&:focus {
  outline: none;
}

label {
  margin-left: 10px;
}

@media only screen and (max-width: ${MOBILE_BREAKPOINT}px){
margin: 5px 0px;
}
`

const CheckBox = styled.input`
border: 1px solid #D9D9D9;
padding: 10px 20px;
margin:  10px 0px;

::placeholder {
  color: #666666;
}

label {
  margin-left: 10px;
}

&:focus {
  outline: none;
}

@media only screen and (max-width: ${MOBILE_BREAKPOINT}px){
margin: 15px 0px 30px 0px;
}
`

const TextArea = styled.textarea`
border: 1px solid #D9D9D9;
padding: 10px 20px;
height: 120px;
width: 100%;
margin: 1% 0px;
@media only screen and (max-width: ${MOBILE_BREAKPOINT}px){
  width: 100%;
  margin: 5px 0px;
} 
::placeholder {
  color: #666666;
}

&:focus {
  outline: none;
}
`

const InputLabel = styled.label`
position: absolute;
width: 0%;
opacity: 0;
z-index: -9999;
`

function Input(props: Props) {

  const { inputType, placeHolder, isTextArea, isCheckbox, onChange, required, name } = props
  if ((!isTextArea) && (!isCheckbox)) {
    return (
      <>
        <InputLabel htmlFor={placeHolder}>{placeHolder}</InputLabel>
        <InputBlock name={name} required={required} type={inputType ? inputType : 'text'} onChange={onChange} placeholder={placeHolder ? placeHolder : ''} id={placeHolder} />
      </>

    )
  } else if (isTextArea) {
    return (
      <>
        <InputLabel htmlFor={placeHolder}>{placeHolder}</InputLabel>
        <TextArea name={name} placeholder={placeHolder} required={required} onChange={onChange} id={placeHolder} />
      </>

    )
  } else {
    return (
      <div>
        <CheckBox name={name} type='checkbox' id={placeHolder} onChange={onChange} required={required} />
        <label style={{ marginLeft: 10 }} htmlFor={placeHolder}>{placeHolder}</label>
      </div>
    )
  }
}

export default Input