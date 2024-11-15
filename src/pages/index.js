import React from 'react'
import Layout from '../Layout/Layout'
import Card from '../components/Card'

const IndexPage = () => {

  const cardData = [
    {
      id:1,
      title:"Heading 1",
      content:"Please add your content here. Keep it short and simple. And smile :)"
    },
    {
      id:2,
      title:"Heading 2",
      content:"Please add your content here. Keep it short and simple. And smile :)"
    },
    {
      id:3,
      title:"Heading 3",
      content:"Please add your content here. Keep it short and simple. And smile :)"
    },
    {
      id:4,
      title:"Heading 4",
      content:"Please add your content here. Keep it short and simple. And smile :)"
    },
  ]

  return (
    <Layout>
      <div className='container-fluid'>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center mt-20">
          {
            cardData.map((card)=>(
              <div key={card.id}>
                <Card
                  title={card.title}
                  content={card.content}
                /> 
              </div>
            ))
          }
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
