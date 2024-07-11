import LightLogo from '@/public/svgs/logo-light.svg'
import { Button } from '@/components'

const Navbar = () => {
	return (
		<header className='py-7 px-20 flex flex-row justify-center shadow-lg'>
			<nav className='flex max-w-screen-xl justify-between w-full'>
				<LightLogo />
				<ul className='flex gap-8'>
					<li>
						<Button variant='tertiary' className='font-semibold'>
							Login
						</Button>
					</li>
					<li>
						<Button className='font-semibold'>Sign up</Button>
					</li>
				</ul>
			</nav>
		</header>
	)
}

export default Navbar