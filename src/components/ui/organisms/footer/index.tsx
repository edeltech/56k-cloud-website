import {FooterProps} from './footer.model'
import {LinkProps} from '@/models/link.model'
import {Linkedin, MapPin, Twitter} from 'lucide-react'
import {cn} from '@/utils/toolbox'
import Button from '@/components/ui/atoms/button'
import Image from 'next/image'
import Link from 'next/link'
import voila from '../../../../../public/images/logos/voila.webp'

export default function Footer({background='cover', logo, links, address, title, gMapAddress}: FooterProps) {  
  const internalLinks: Array<LinkProps> = links.map(link => ({
    href: link.href || '',
    children: link.title
  }))

  const externalLinks: Array<LinkProps> = [
    {
      href: gMapAddress,
      children: <MapPin className='w-4 h-4'/>,
      alt: 'altIconGMaps',
      className: 'block lg:hidden'
    },
    {
      href: 'https://twitter.com/56kcloud',
      children: <Twitter className='w-4 h-4'/>,
      alt: 'altIconTwitter'
    },
    {
      href: 'https://www.linkedin.com/company/56kcloud',
      children: <Linkedin className='w-4 h-4'/>,
      alt: 'altIconLinkedin'
    }
  ]

  return (
    <footer
      className={cn(background === 'cover' ? 'bg-footer bg-no-repeat bg-cover' : 'bg-primary-900',
        'p-10 lg:pb-0 lg:pr-0 lg:pt-32 lg:pl-12 flex justify-end lg:h-[900px]')}>
      <div className='flex flex-col w-full p-10 bg-white lg:w-10/12 md:p-16'>
        <div className='flex flex-1 lg:space-x-8'>
          <div className='lg:w-2/3 2xl:w-1/2'>
            <p className='title mb-10 w-full leading-[1.1] xs-responsive-title lg:mb-16'>
              {title}
            </p>
            <div className='flex flex-col justify-between lg:flex-row'>
              <ul className='grid grid-cols-2 sm:gap-x-20 lg:gap-x-40 gap-y-6'>
                {internalLinks.map((link, index) => (
                  <li
                    key={index}
                    className='w-1/2 mb-2'>
                    <Button
                      asChild
                      variant='link'
                      align='start'
                      className='capitalize w-max'
                    >
                      <Link href={link.href}>
                        {link.children}
                      </Link>
                    </Button>
                  </li>
                ))}
              </ul>
              <Link
                href={gMapAddress}
                rel='noopener noreferrer'
                target='_blank'
                className='hidden w-auto whitespace-pre-wrap lg:block text-grey-medium lg:w-1/3 hover:underline'
              >
                {address}
              </Link>
            </div>
          </div>
          <div className='hidden lg:block'>
            <Link
              href='/'
              aria-label='56k logo'
            >
              <Image
                {...logo}
                alt='altLogo56k'
                className='w-28'
              />
            </Link>
          </div>
        </div>
        <hr className='w-full h-px my-5 bg-slate-300'/>
        <div className='flex flex-col items-center space-y-4 lg:justify-between lg:flex-row'>
          <ul className='flex'>
            {externalLinks.map((link, idx) => (
              <li
                key={idx}
                className={cn(link.className, 'mr-4')}
              >
                <Button
                  asChild
                  variant='ghost'
                >
                  <Link
                    href={link.href} 
                    rel='noopener noreferrer'
                    aria-label={link.alt}
                    target='_blank'
                  >
                    {link.children}
                  </Link>
                </Button>
              </li>
            ))}
          </ul>
          <p className='text-sm text-center whitespace-pre text-grey-medium'>
            &copy; 56K.Cloud SA 2023<br/>
            All rights reserved
          </p>
          <p className='hidden lg:block'>
            <span className='flex items-center gap-x-3'>
              <span className='text-grey-medium'>Design by</span>
              <Link
                href='https://studiovoila.com/'
                target='_blank'
                rel='noopener noreferrer'
                className='w-16 -translate-y-[2px]'
                aria-label='Voila logo'
              >
                <Image
                  src={voila}
                  alt='altLogoVoila'/>
              </Link>
            </span>
          </p>
        </div>
      </div>
    </footer>
  )
}