import React from 'react'
import Service from './snippets/Service'
import poster1 from '../assets/service-poster-1.jpg'
import poster2 from '../assets/service-poster-2.jpg'
import poster3 from '../assets/service-poster-3.jpg'
import poster4 from '../assets/service-poster-4.jpg'
import poster5 from '../assets/service-poster-5.jpg'
import poster6 from '../assets/service-poster-6.jpg'

const Services = () => {
  return (
    <section id="services">
      <div className="container-p pt-16 flex flex-col items-center">
        <h2 className="text-black text-center">Сервіси</h2>
        <div className="flex flex-wrap justify-center mt-8 mx-auto">
          <Service
            link="strategy"
            header="Стратегія"
            poster={poster1}
            tag="01."
            text="Бізнес-модель / Розробка ціннісної пропозиції (Value Proposition) /
            Бренд стратегія та позиціонування / Комунікаційна стратегія / Digital
            стратегія / Стратегічні сесії"
          />
          <Service
            link="creatives"
            header="Креатив та реклама"
            poster={poster2}
            tag="02."
            text="Розробка рекламного креативу"
          />
          <Service
            link="branding"
            header="Брендинг"
            poster={poster3}
            tag="03."
            text="Айдентика / Неймінг / Розробка Tone of Voice"
          />
          <Service
            link="media"
            header="Медіа"
            poster={poster4}
            tag="04."
            text="Медіапланування та управління медійними кампаніями / 
          Web-аналітика / SEO-оптимізація / Контекстна і таргетована реклама"
          />
          <Service
            link="smm"
            header="SMM та контент"
            poster={poster5}
            tag="05."
            text="Соціальні мережі"
          />
          <Service
            link="outsourcing"
            header="Маркетинг-аутсорс"
            poster={poster6}
            tag="06."
            text="Стратегія виходу на ринок / Розробка комунікаційної стратегії / 
          Лідогенерація та продажі онлайн / Інтеграція бренду в кіберспорт та 
          геймінг"
          />
        </div>
      </div>
    </section>
  )
}

export default Services
