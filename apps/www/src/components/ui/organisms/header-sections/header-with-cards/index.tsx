import {CardWithIcon} from '@/models/card.model'
import {ImageProps} from '@/models/image.model'
import Icon from '@/components/ui/atoms/icon'

export type HeaderWithCardsProps = {
  title: string
  subtitle: string
  image: ImageProps
  cards: Array<CardWithIcon>
}

export default function HeaderWithCards(props: HeaderWithCardsProps) {  
  return (
    <div className='relative py-24 overflow-hidden isolate sm:py-32'>
      <div className='px-6 pt-32 mx-auto lg:pt-56 max-w-7xl lg:px-8'>
        <div className='flex flex-row justify-between gap-x-16'>
          <div className='w-2/5'>
            <h2
              className='text-5xl leading-[52px] font-normal text-transparent bg-clip-text bg-gradient-to-l \
          from-purple-300 via-sky-300 to-purple-300 from-10% to-90%'>{props.title}</h2>
          </div>
          <div className='w-3/5 pl-8 border-l border-slate-800'>
            <p className='text-[20px] leading-8 text-slate-400 font-light'>{props.subtitle}</p>
            <div
              className='flex flex-col mt-20 gap-y-6'>
              {props.cards.map((card) => (
                <div key={card.title}>
                  <div className='flex flex-row items-center gap-x-3'>
                    <Icon
                      {...card.icon}
                      className='flex-none text-sky-300 w-7 h-7'
                      aria-hidden='true'
                    />
                    <h3 className='font-medium text-[18px] leading-10 text-white'>{card.title}</h3>
                  </div>
                  <p className='text-base font-light leading-7 text-slate-400'>{card.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
