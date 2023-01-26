import React from 'react'
import video_bg from '../assets/video-bg.mp4'
import poster from '../assets/video-bg-poster.png'

const Header = () => {
  return (
    <div className="header-fullscreen">
      <div className="video-wrapper">
        <video playsInline autoPlay muted loop poster={poster}>
          <source src={video_bg} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="relative text-white flex flex-col mt-auto px-4 pb-8">
          <h1 className="text-left">Ми</h1>
          <h1 className="text-center">допомагаємо</h1>
          <h1 className="text-right">бізнесам</h1>
          <p className="text-[19px] mt-4 md:text-xl lg:text-2xl font-bold px-6 max-w-4xl">
            будувати маркетингові стратегії{' '}
            <span className="font-light">та</span> реалізовувати тактичні плани{' '}
            <span className="font-light">для</span>{' '}
            збільшення прибутку <span className="font-light">та</span>{' '}
            довгострокового зростання бренду
          </p>
        </div>
      </div>
    </div>
  )
}

export default Header
