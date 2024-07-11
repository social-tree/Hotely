import React from 'react'

function CallToActionForm() {
	return (
		<form className='flex flex-col sm:flex-row gap-4'>
			<input
				type='email'
				placeholder='Your email address'
				className='p-2 w-full sm:w-auto flex-grow rounded border'
			/>
			<button
				className='bg-blackish-green text-white px-4 py-2 rounded'
				type='submit'
			>
				Subscribe
			</button>
		</form>
	)
}

export default CallToActionForm