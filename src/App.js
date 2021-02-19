import React from 'react'
import Breadcrumbs, { BreadcrumbsLink, BreadcrumbsMapper } from './Breadcrumbs'

import './App.scss'

const crumbs = [
  { title: 'Каталог товаров и услуг', url: '/catalog' },
  { title: 'Каталог товаров и услуг', url: '/catalog' },
  { title: 'Бытовая техника', url: '/catalog/onlineproduct1' },
  { title: 'Каталог товаров и услуг', url: '/catalog' },
  { title: 'Бытовая техника', url: '/catalog/onlineproduct1' }
]

function App () {
  return (
    <>
      <Breadcrumbs hidden={crumbs.length < 2} labelNav='Навигационная цепочка'>
        {crumbs.map((item, index) => (
            <BreadcrumbsLink
              key={index}
              href={item.url}
            >
              {item.title}
            </BreadcrumbsLink>
        ))}
      </Breadcrumbs>
      <BreadcrumbsMapper hidden={crumbs.length < 2} labelNav='Навигационная цепочка' items={crumbs} />
    </>
  )
}

export default App
