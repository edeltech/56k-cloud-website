import { Translate } from 'next-translate'
import { DetailsCardProps } from '../components/molecules/details-card'

export function getListDetailsServices (t: Translate) {
  const listDetails: Array<string> = [
    t('listDetail1'),
    t('listDetail2'),
    t('listDetail3'),
    t('listDetail4'),
    t('listDetail5')
  ]
  return listDetails
}

export function getDetailsCardsServices (t: Translate) {
  const detailsCards: Array<DetailsCardProps> = [
    {
      icon: '/images/cloud-white.svg',
      title: t('titleCard1'),
      items: [
        t('detail1Card1'),
        t('detail2Card1'),
        t('detail3Card1'),
        t('detail4Card1'),
        t('detail5Card1'),
        t('detail6Card1')
      ]
    },
    {
      icon: '/images/infinity.svg',
      title: t('titleCard2'),
      items: [
        t('detail1Card2'),
        t('detail2Card2'),
        t('detail3Card2'),
        t('detail4Card2'),
        t('detail5Card2'),
        t('detail6Card2')
      ]
    },
    {
      icon: '/images/cloud-white.svg',
      title: t('titleCard3'),
      items: [
        t('detail1Card3'),
        t('detail2Card3'),
        t('detail3Card3'),
        t('detail4Card3'),
        t('detail5Card3'),
        t('detail6Card3'),
        t('detail7Card3'),
        t('detail8Card3'),
        t('detail9Card3')
      ]
    },
    {
      icon: '/images/cloud-white.svg',
      title: t('titleCard4'),
      items: [
        t('detail1Card4'),
        t('detail2Card4'),
        t('detail3Card4'),
        t('detail4Card4'),
        t('detail5Card4'),
        t('detail6Card4')
      ]
    }
  ]
  return detailsCards
}
