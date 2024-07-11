import MailIcon from '@/public/svgs/mail.svg'
import CallToActionForm from './CallToActionForm'

function CallToAction() {
	return (
		<div className='bg-[#CDEAE1] h-[305px] p-6 rounded-lg shadow-md flex flex-col lg:flex-row items-center max-w-6xl justify-between mx-auto left-0 right-0 absolute -top-60'>
			<div className='w-full lg:w-1/2 mb-8 lg:mb-0'>
				<h2 className='text-[44px] leading-[54px] text-blackish-green font-bold mb-6'>
					Subscribe <br /> Newsletter
				</h2>
				<h3 className='text-blackish-green text-opacity-80 text-paragraph-m font-bold mb-2'>
					The Travel
				</h3>
				<p className='mb-4 text-blackish-green text-opacity-70'>
					Get inspired! Receive travel discounts, tips, and behind the scenes
					stories.
				</p>
				<CallToActionForm />
			</div>
			<MailIcon />
		</div>
	)
}

export default CallToAction
