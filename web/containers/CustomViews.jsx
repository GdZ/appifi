import React from 'react'

let labeledTextStyle = {
  display: 'flex',
  flexDirection: 'row',
  fontSize: 14,
  lineHeight: 1.5
}

const LabeledText = ({label, text, right, styleOverlay}) => 
  ( 
    <div style={styleOverlay ? Object.assign({}, labeledTextStyle, styleOverlay) : labeledTextStyle}>
      <div style={{flex:1, fontWeight:100, fontFamily:'monospace', opacity:'0.54'}}>{label}:</div>
      <div style={{flex:(right || 2), fontFamily:'monospace', opacity:'0.87'}}>{text}</div>
    </div>
  )

const Spacer = () => <div style={{height:32}} />

export { LabeledText, Spacer }
