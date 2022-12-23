import React from 'react'

const Skill = ({iconeSrc, icoName, id}) => {
  return (
    <div id={id} className="text-deep-blue hover:text-white hover:animate-pulse ">
      <img className="m-auto" src={iconeSrc} alt={icoName} width='50px' height='50px' />
      <p className=' text-center text-sm'>{icoName}</p>
    </div>
  )
}

export default Skill