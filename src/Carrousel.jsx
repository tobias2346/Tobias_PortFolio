import React from 'react'

export const Carrousel = ({ children: slides }) => {
  return (
    <main className='overflow-hidden relative'>
      <div className='flex'>{slides}</div>
    </main>
  )
}
