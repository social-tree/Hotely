import React from 'react'
import Image from 'next/image'
import { Button } from '@/components'
import Stars from '@/public/svgs/stars.svg'
import Amenity from '@/public/svgs/amenity.svg'
import Location from '@/public/svgs/location.svg'
import Heart from '@/public/svgs/heart.svg'

interface Props {
	id: string
	name: string
	location: string
	rating: number
	reviews: number
	price: number
	amenities: string[]
	thumbnail: string
}

function HotelCard({
	id,
	name,
	location,
	rating,
	reviews,
	price,
	thumbnail
}: Props) {
	return (
		<div className='border rounded-lg overflow-hidden shadow-md flex mb-6'>
			<Image
				src={thumbnail}
				alt={name}
				width={300}
				height={280}
				className='w-80 object-cover'
			/>

			<div className='p-6 w-2/3'>
				<div className='flex justify-between '>
					<div className='mb-6'>
						<h3 className='text-xl font-secondary  font-bold mb-4'>{name}</h3>
						<p className='text-gray-600 flex items-center gap-2 mb-3'>
							<Location />
							{location}
						</p>
						<div className='flex items-center gap-8 h-max mb-3'>
							<div className='flex items-center gap-2  text-sm'>
								<Stars />5 Star Hotel
							</div>
							<div className='flex items-center gap-1 '>
								<Amenity />
								<span className='font-bold'>20+</span>
								Aminities
							</div>
						</div>
						<div className='flex items-center gap-1 '>
							<div className='button-secondary h-8 w-10 '>{rating}</div>
							<span className='font-bold'>Very Good</span>
							{reviews} reviews
						</div>
					</div>
					<div>
						<p className=' opacity-75 text-[12px]'>starting from</p>
						<h3 className='text-slamon text-paragraph-l font-bold'>
							${price}
							<span className='text-sm'>/night</span>
						</h3>
						<p className=' opacity-75 text-[12px]'>excl. tax</p>
					</div>
				</div>

				<div className='w-full h-[1px] opacity-25 bg-blackish-green mb-6' />

				<div className='flex w-full gap-2 items-center'>
					<Button variant='secondary'>
						<Heart />
					</Button>
					<a
						href={`/hotels/${id}`}
						className='button-primary py-2 font-bold w-full'
					>
						View Details
					</a>
				</div>
			</div>
		</div>
	)
}

export default HotelCard
