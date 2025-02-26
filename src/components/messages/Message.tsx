import React from 'react'
import ConfirmIcon from '../icons/Confirm.Icon';
import "../../_dist/Message.css"

interface MessageProps extends React.HTMLProps<HTMLParagraphElement> {
    id?: string;
    type:"success" | "warning" | "error"
  }

const Message = ({...props}: MessageProps) => {
  return (
    <p {...props} className={`message-alert ${props.className ?props.className:""} ${props.type}-message`}> {props.type === "success"? <ConfirmIcon/> :""} {props.children} </p>
  )
}

export default Message