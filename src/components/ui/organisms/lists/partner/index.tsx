import {Company} from '@/models/company.model'
import Image from 'next/image'

export default function PartnerList({title, partners}: {title:string, partners: Array<Company>}) {

  return (
    <section className='bg-primary-50 section-padding' >
      <h2 className='text-center title mb-14 xs-responsive-title'>{title}</h2>
      <ul className='flex flex-wrap justify-center'>
        {partners.map((partner) => (
          <li
            key={partner.name}
            className='flex items-center justify-center w-20 h-20 p-5 m-6 list-none bg-white rounded-full \
              lg:w-24 lg:h-24 relative group transition ease-in-out duration-500 hover:scale-110'>
            <Image
              width={partner.logo.width}
              height={partner.logo.height}
              src={partner.logo.src}
              alt={partner.name}
            />
            <a
              href={partner.url}
              target='_blank'
              className='absolute items-center justify-center w-full h-full capitalize backdrop-blur-sm bg-white-50/50 \
                font-medium hidden group-hover:flex overflow-hidden rounded-full backdrop-brightness-105'>
              <p className='text-sm duration-300 animate-in group-hover:zoom-in group-out-of-range:zoom-out'>
                {partner.name}
              </p>
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}
