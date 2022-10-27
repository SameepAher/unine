import React from 'react'

export default function Wrapper(props) {
  return <div className={'px-5 ' + props.className}>{props.children}</div>
}
