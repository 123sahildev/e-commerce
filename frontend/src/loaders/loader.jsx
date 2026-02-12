import React from 'react'
import { useSelector } from 'react-redux'
import contents from '../reduxtool/slice.js'

export default function loader() {
    let checkLoadeing = useSelector(state => state.contents.loader)


  return (
        <>
        {checkLoadeing && <div className="flex z-30 items-center justify-self-center fixed top-30">
            <div className="h-8 w-8 animate-spin rounded-full border-4 border-solid border-blue-500 border-t-transparent"></div>
          </div>}
          </>
  )
}
