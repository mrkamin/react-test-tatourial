type GreetProps = {
  name?: String
}

import React from "react"
const Greet = (pros: GreetProps) => {
  return (
    <div>
      Hello {pros.name}
    </div>
  )
}

export default Greet
