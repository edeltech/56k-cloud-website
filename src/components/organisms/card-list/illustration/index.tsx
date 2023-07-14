import {IllustrationCardPropsImpl} from '@/components/molecules/card/illustration/card.model'
import {cn} from '@/utils/toolbox'
import IllustrationCard from '@/components/molecules/card/illustration'
import VerticalTitle from '@/components/atoms/title/vertical'

export type IllustrationCardListProps = {
  theme?: 'dark' | 'light'
  title: string
  illustrationCards: Array<IllustrationCardPropsImpl>
}

export default function IllustrationCardList({theme='dark', title, illustrationCards}
  : IllustrationCardListProps) {
  return (
    <section className={cn(theme === 'dark' ? 'bg-primary-900' : 'bg-primary-50', 'section-padding relative')}>
      <VerticalTitle
        title={title}
        styleCard='illustrationCard'
        classNameText={cn(theme === 'dark' ? 'text-white' : 'text-blue-dark')}/>
      {illustrationCards.map((card) => 
        <IllustrationCard
          theme={theme}
          key={card.title}
          {...card}
        />
      )}
    </section>
  )
}