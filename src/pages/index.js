import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/Layout'
import SEO from '../components/Seo'
import Slideshow from '../components/Slideshow/Slideshow'
import Sidebar from '../components/Sidebar/Sidebar'
import Rooms from '../components/Rooms'


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Slideshow />
    <Sidebar />

    <div>
    <p>The Patriots' Boutique Motel is nestled in the beautiful coastal city of San Clemente; Orange County's southernmost city. The newly remodeled motel is one of the only accommodations&nbsp;located within walking distance to the beach, restaurants, shopping and entertainment of downtown&nbsp;San Clemente. Whether you are a surfer looking to catch a wave at nearby Trestles or T-Street, or an out of town guest&nbsp;looking for a convenient, comfortable and fun place to escape to for a few days, the Patriots' Boutique Motel is your spot in San Clemente.</p>
    <div>
      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13319.868259814852!2d-117.609401!3d33.424103!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dcf468bddc3913%3A0x8c93962deabf8f62!2s711+S+El+Camino+Real%2C+San+Clemente%2C+CA+92672!5e0!3m2!1sen!2sus!4v1547308961859" width="600" height="450" frameBorder="0" allowFullScreen></iframe>
    </div>
    <h2>Testimonials</h2>
    <p>“The room was very comfortable and clean, the staff was amazing, and it was wonderful to be able to keep our car parked all weekend and walk to all the great restaurants and shopping along Del Mar Ave.” – <br/>Jennifer P (US)</p>
    <p>“Our suite was very clean, and comfortable. We walked down town for a lovely dinner at one of the many restaurants.” <br/>- Cynthia P. Artesia (US)</p>
    <p>“The hotel host was so nice and the room was so cute and very clean and they turned on the heat for us before we got in, since we got in on a late cold night. It's the perfect little hotel.” <br/>- Shelby A. Carlsbad (US)</p>
    <p>“It was charming, and clean within walking distance to the beach and restaurants. The staff and owners were friendly and helpful. I will recommend to my friends and I will stay there next time I am in town.” <br/>- Susan R. Temecula (US)</p>
    <p>“Awesome staff! Rooms were cute, new and very clean!! Couldn't ask for better location. Walking distance to everything! Loved the bed!”<br />- Maggie W. Phoenix (US)</p>
  </div>
  </Layout>
)

export default IndexPage
