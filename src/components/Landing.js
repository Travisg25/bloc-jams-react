import React from 'react';
import './../styles/landing.css'
// import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

const Landing = () => (
<section className='holding-container'>

  <div className="title">
    <h1 className="hero-title">Turn it to up!</h1>
    <img src="./public/assets/images/Death_to_Stock_Photography_DJ6.jpg" alt="holding disk" />
  </div>

  <section className='library container-fluid'>
    <h1 className="display-2">Turn the music up!</h1>
   <section className="selling-points">

   <section className= ''>
     <div className="point">
       <h2 className= 'display-4'>Choose your music</h2>
       <p className="point-description">The world is full of music; why should you have to listen to music that someone else chose?</p>
     </div>
     <div className="point">
       <h2 className="display-4">Unlimited, streaming, ad-free</h2>
       <p className="point-description">No arbitrary limits. No distractions.</p>
     </div>
     <div className="point">
       <h2 className="display-4">Mobile enabled</h2>
       <p className="point-description">Listen to your music on the go. This streaming service is available on all mobile platforms.</p>
     </div>
    </section>
   </section>
 </section>
</section>
);

export default Landing;
