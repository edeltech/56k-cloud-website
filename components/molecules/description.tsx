import Icon from '../atoms/icon'

export default function Description ({ surtitle, text, services }) {
  return (
    <section className='px-8 pb-[72px] pt-6 xl:section-padding'>
      <div className='relative max-w-6xl mx-auto'>
        <div className='w-full mb-16 xl:w-3/5'>
          <span className='orange-surtitle'>{surtitle}</span>
          <p className='text-blue-dark text-[calc(20px+1vw)] title leading-tight'>{text}</p>
        </div>
        <div className='w-full mb-16 lg:w-1/2'>
          <ul className='flex flex-col'>
            {services.map((service, idx: number) => (
              <li key={idx} className='flex items-center gap-x-4 mb-7'>
                <Icon src='/images/check.svg' alt='Check icon' className='w-8 h-8 p-2 bg-white shadow-md' />
                <span className='xl:text-lg'>{service.description}</span>
              </li>
            )) }
          </ul>
        </div>
      </div>
    </section>
  )
}
