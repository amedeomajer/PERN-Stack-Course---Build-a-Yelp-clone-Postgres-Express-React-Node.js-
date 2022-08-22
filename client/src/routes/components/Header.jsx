import React from 'react'

const Header = ({content}) => {
  return (
	<div>
		<h1 className="font-weight-light display-1 text-center">
			{content}
		</h1>
	</div>
  )
}

export default Header