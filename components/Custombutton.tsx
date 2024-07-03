"use client";


import React from 'react'
import Image from 'next/image'
import { CustombuttonProps } from '@/types';

const Custombutton = ( {title,containerstyle,handleclick}:CustombuttonProps) => {
  return (
    <button
    disabled={false}
    type={'button'}
    className={`custom-btn ${containerstyle}`}
    onClick={handleclick}
    >
        <span className={`flex-1`}>
            {title}
        </span>

    </button>

  )
}

export default Custombutton
