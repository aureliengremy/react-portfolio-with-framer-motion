import React from 'react'

const Skill = ({iconeSrc, iconeName, id}) => {
  return (
    <div id={id} className="">
      <img src={iconeSrc} alt={iconeName} width='50px' height='50px' />
    </div>
  )
}

export default Skill