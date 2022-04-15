import React, {useEffect} from 'react'
import {useState} from 'react'

const SignUpEmailInput = ({title, sending, setSending, ...props}) => {
	const [color, setColor] = useState('')

	const onEmailInput = (e) => {
		if (e.target.value.match(/\S+@\S+\.\S+/i)) setColor('green')
		else setColor('red')
		if (e.target.value === '') setColor('')
	}

	useEffect(() => {
		if (color === 'red') setSending({...sending, email: false})
		else setSending({...sending, email: true})
	}, [color])

	return (
		<div>
			<label>
				{title}: <br/>
				<input className={"refactoredInput"} {...props} onChangeCapture={onEmailInput}/><br/>
			</label>
			<p style={{color:color}}>
				{color && (color === 'red' ? 'input correct email' : 'correct')}
			</p>
		</div>
	)
}

export default SignUpEmailInput
