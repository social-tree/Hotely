import DarkLogo from '@/public/svgs/logo-dark.svg'
import CallToAction from './CallToAction'
import { Icon } from '@iconify/react'

function Footer() {
	return (
		<footer className='bg-mint-green bottom-0 left-0 right-0 w-full pt-24 mt-60 relative'>
			<CallToAction />

			<div className='max-w-7xl p-8 text-blackish-green'>
				<div className='mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8'>
					<div className='flex flex-col gap-6'>
						<DarkLogo />
						<ul className='flex items-center gap-1'>
							<li>
								<Icon fontSize={30} icon='mingcute:facebook-fill' />
							</li>
							<li>
								<Icon fontSize={30} icon='mingcute:twitter-fill' />
							</li>
							<li>
								<Icon fontSize={30} icon='mingcute:youtube-fill' />
							</li>
							<li>
								<Icon fontSize={27} icon='ri:instagram-fill' />
							</li>
						</ul>
					</div>
					<div>
						<h3 className='font-bold mb-2'>Our Destinations</h3>
						<ul className='text-blackish-green text-opacity-70'>
							<li>Canada</li>
							<li>Alaska</li>
							<li>France</li>
							<li>Iceland</li>
						</ul>
					</div>
					<div>
						<h3 className='font-bold mb-2'>Our Activities</h3>
						<ul className='text-blackish-green text-opacity-70'>
							<li>Northern Lights</li>
							<li>Cruising & Sailing</li>
							<li>Multi-activities</li>
							<li>Kayaking</li>
						</ul>
					</div>
					<div>
						<h3 className='font-bold mb-2'>Travel Blogs</h3>
						<ul className='text-blackish-green text-opacity-70'>
							<li>Bali Travel Guide</li>
							<li>Sri Lanka Travel Guide</li>
							<li>Peru Travel Guide</li>
							<li>Bali Travel Guide</li>
						</ul>
					</div>
					<div>
						<h3 className='font-bold mb-2'>About Us</h3>
						<ul className='text-blackish-green text-opacity-70'>
							<li>Our Story</li>
							<li>Work with us</li>
						</ul>
					</div>
					<div>
						<h3 className='font-bold mb-2'>Contact Us</h3>
						<ul className='text-blackish-green text-opacity-70'>
							<li>Our Story</li>
							<li>Work with us</li>
						</ul>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer
