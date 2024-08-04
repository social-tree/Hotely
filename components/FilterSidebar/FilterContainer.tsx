'use client'

import { ReactNode, useState } from 'react'
import { Icon } from '@iconify/react'
import clsx from 'clsx'

interface Props {
	name: string
	last?: boolean
	children: ReactNode
}

function Filter({ name, last = false, children }: Props) {
	const [close, setClose] = useState(false)

	return (
		<div className='h-max w-full flex flex-col gap-4 mb-8'>
			<div className='w-full flex justify-between items-center'>
				<h3 className='font-bold text-paragraph-s'>{name}</h3>

				<button onClick={() => setClose((e) => !e)}>
					<Icon className={`transition-transform duration-300 ${close ? '-rotate-180' : ''}`} fontSize={24} icon='solar:alt-arrow-up-line-duotone'></Icon>
				</button>
			</div>

			{close ? null : children}


			{!last && <div className='h-px w-full bg-blackish-green bg-opacity-25' />}
		</div>
	)
}

export default Filter
