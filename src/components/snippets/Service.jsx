import React from 'react'
import { Link } from 'react-router-dom'

const Service = ({ link, header, poster, tag, text }) => {
  const scrollToTop = () => {
    window.scrollTo(0, 0)
  }
  return (
    <article className="max-w-sm sm:mx-4 cursor-pointer">
      <Link
        to={'/services/' + link}
        state={{ link: link }}
        onClick={scrollToTop}
      >
        <div className="flex flex-col my-8">
          <div className="service-poster">
            <img className="" alt={header} src={poster}></img>
            <div className="service-image-tag flex items-center justify-center">
              <p className="text-black font-normal">{tag}</p>
            </div>
          </div>
          <h3 className="text-black hover-red-h3 pt-4">{header}</h3>
          <p className="text-lg pt-2">{text}</p>
          <div className="h-0 border-b-2 border-slate-100 pt-4"></div>
        </div>
      </Link>
    </article>
  )
}

export default Service
