import React from 'react'
import { DUMMY_IMG } from '../images/index'

const Card = ({title,content}) => {
  return (
    <>
        <div className="card">
            <div className="max-w-[256px]">
                <div className='card-img'>
                    <img src={DUMMY_IMG} alt="" />
                </div>
                <div className='title title-black font-semiboldweight mt-4'>
                    <h3>{title}</h3>
                </div>
                <div className="content content-gray">
                    <p>{content}</p>
                </div>
                <div className='mt-5'>
                    <a href="#" className='btn btn-gray'>Button</a>
                </div>
            </div>
        </div>
    </>
  )
}

export default Card