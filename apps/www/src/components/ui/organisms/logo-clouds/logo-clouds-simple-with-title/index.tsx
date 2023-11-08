import {Company} from '@/models/company.model'
import Image from 'next/image'

export type LogoCloudsSimpleWithTitleProps = {
  title: string
  companies: Array<Company>
}

export default function LogoCloudsSimpleWithTitle(props: LogoCloudsSimpleWithTitleProps) { 
  return (
    <div className='py-24 sm:py-[104px]'>
      <div className='px-6 mx-auto max-w-7xl lg:px-8'>
        <h2 className='text-lg font-semibold leading-8 text-center text-white'>
          {props.title}
        </h2>
        <div
          className='grid grid-cols-1 lg:grid-cols-4 mt-7 gap-x-6 gap-y-8'>
          {props.companies.map((company, index) => (
            <div
              key={index}
              className='flex items-center justify-center w-full p-11 h-36 bg-slate-800 rounded-xl'>
              <Image
                className='max-h-11'
                src={company.image.src}
                alt={company.name}
                width={company.image.width}
                height={company.image.height}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
