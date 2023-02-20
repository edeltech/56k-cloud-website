export default function IntroPage ({ surtitle, title, text }) {
  return (
    <div className='z-50 -mt-24'>
      <span className='orange-surtitle'>{surtitle}</span>
      <h2 className='font-semibold mb-8 leading-[1.1] text-blue-medium title xl-responsive-title'>{title}</h2>
      <div className='w-2/5'>
        <p className='text-lg font-light font-graphik text-blue-medium'>{text}</p>
      </div>
    </div>
  )
}