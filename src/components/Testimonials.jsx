import React from 'react'

function Testimonials() {
  return (
    <div id='testimonials'>


      <h2>Testimonials</h2>
      <section>
        <TestimonialCard name={'Abhishek'} feedback={"Lorem ipsum dolor sit amet consectetur adipisicing elit."}/>
        <TestimonialCard name={'Razzi'} feedback={"Lorem ipsum dolor sit amet consectetur adipisicing elit."}/>
        <TestimonialCard name={'Gautam'} feedback={"Lorem ipsum dolor sit amet consectetur adipisicing elit."}/>
      </section>
    </div>
  )
}
const TestimonialCard = ({ name,feedback })=>(
  <article>
    <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="User" />
    <h4>{name}</h4>
    <p>{feedback}</p>
  </article>
)

export default Testimonials