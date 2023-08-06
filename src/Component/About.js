import React from 'react'
import { NavLink } from 'react-router-dom'

function About() {
  return (
    <>
        <div className="container">
            <div className="row">
                <div className="col-md-6  my-4 d-flex justify-content-center align-content-center flex-column">
                    <h1 className=' p-4 text-primary fs-1 fw-bold mb-4'>About US</h1>
                    <p className=' fs-5 ps-4' style={{lineHeight:'40px'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, laudantium? Laudantium voluptatibus magni exercitationem ipsa quas nemo debitis vero quod earum hic tempore error repellat sequi, sunt assumenda dolorum architecto nam, qui eos natus dolores quasi nesciunt! Facilis quasi iure voluptate eveniet tempore, veritatis fuga et, reiciendis laudantium alias officiis aspernatur veniam vero, sint ex accusantium provident consequuntur eligendi! Nobis, quis. Reprehenderit, delectus nobis. Debitis reiciendis iure ipsam. Voluptatum, reprehenderit amet nobis aliquid veniam laudantium eum maxime beatae fuga, at, vel iusto nihil accusamus deleniti nesciunt animi!</p>

                    <NavLink to='/contact' className='btn btn-outline-primary my-4'>
                        Contact Us
                    </NavLink>

                </div>
                <div className="col-md-6 d-flex align-items-center">
                    <img src="https://img.freepik.com/free-vector/contact-us-concept-landing-page_52683-12860.jpg?w=2000" alt="About" width='100%' />
                </div>
            </div>
        </div>
    </>
  )
}

export default About