import React from 'react';
import poster2 from "../assets/profits-poster-2.jpg"
import poster3 from "../assets/profits-poster-3.jpg"

const Profits = () => {
  return (
    <section id="profits" className="bg-[#f5f5f5]">
      <div className="container-p pt-20">
        <h2 className="text-center">Для кого корисні</h2>
        <div className="flex flex-col items-center justify-center py-12 sm:flex-row sm:flex-wrap sm:items-start xl:grid xl:grid-cols-3">
          <article className="profit my-8 max-w-md sm:mx-4 flex flex-col">
            <h3>Медіа</h3>
            <div className="h-0 border-b-2 border-slate-200 my-4"></div>
            <p className="text-smooth-red text-2xl md:text-3xl lg:text-4xl font-bold mt-4">
              10 років практичного досвіду та сотні реалізованих проектів
            </p>
            <p className="font-medium mt-4">
              для локальних та міжнародних компаній допомагають знаходити
              найпростіші рішення та отримувати кращі результати для кожної
              задачі.
            </p>
          </article>
          <article className="profit my-8 max-w-md sm:mx-4 flex flex-col">
            <h3>Онлайн послуги</h3>
            <div className="h-0 border-b-2 border-slate-200 my-4"></div>
            <img className='mt-6' alt="Онлайн послуги" src={poster2}></img>
          </article>
          <article className="profit my-8 max-w-md sm:mx-4 flex flex-col">
            <h3>Офлайн продукти та послуги</h3>
            <img className='mt-4' alt="Офлайн продукти та послуги" src={poster3}></img>
          </article>
        </div>
      </div>
    </section>
  )
}

export default Profits
