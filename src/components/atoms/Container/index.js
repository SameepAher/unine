import React from 'react'

export default function Container(props) {
  return <div className={'max-w-[1104px] mx-auto ' + props.className}>{props.children}</div>
}
