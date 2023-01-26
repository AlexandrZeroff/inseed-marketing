import React from 'react'
import Userform from './Userform'

const Feedback = () => {
  return (
    <section id="feedback" className="bg-smooth-red flex justify-center">
      <div className="container-thin py-12 w-full max-w-lg">
        <h4 className="text-white">Напишіть нам листа</h4>
        <p className="text-white md:text-xl mt-2">і ми зв`яжемось з вами найближчим часом</p>
        <Userform />
      </div>
    </section>
  )
}

export default Feedback
