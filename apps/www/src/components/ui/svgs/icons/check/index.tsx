import {IconProps} from '../../../../../models/icon.model'

export function Check(props: IconProps) {
  return (
    <svg 
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 25 25'
      {...props}
    >
      <path
        fillRule='evenodd'
        fill='rgb(247, 110, 88)'
        // eslint-disable-next-line max-len
        d='M0.500,11.300 C1.366,10.529 2.168,9.814 3.001,9.073 C4.907,10.795 6.798,12.503 8.701,14.224 C13.316,9.156 18.094,4.325 23.949,0.656 C24.006,0.798 24.048,0.894 24.082,0.993 C24.227,1.423 24.370,1.854 24.500,2.244 C21.305,4.716 18.821,7.787 16.464,10.965 C14.102,14.152 12.065,17.530 10.609,21.344 C7.218,17.975 3.866,14.645 0.500,11.300 Z'/>
    </svg>
  )
}