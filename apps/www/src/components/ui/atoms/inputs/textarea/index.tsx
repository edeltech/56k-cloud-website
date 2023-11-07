import {InputProps} from '../input'
import {cn} from '@/utils/toolbox'

export type TextAreaProps = InputProps

export function TextArea({register, name, options, label, className, error}: TextAreaProps) {
  return (
    <div className={className}>
      <label
        htmlFor={name}
        className='block text-sm font-semibold leading-6 text-white'>
        {label}
      </label>
      <div className='mt-2.5'>
        <textarea
          {...register(name, options)}
          rows={4}
          className={cn(
            'block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 \
            ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-primary-500 sm:text-sm sm:leading-6',
            className,
            error && 'text-red-900 ring-red-500 focus:ring-red-500'
          )}
        />
        {error 
          ? <p
            className='mt-2 text-sm text-red-600'
            id='email-error'>
            {error.message?.toString()}
          </p>
          : null
        }
      </div>
    </div>
  )
}