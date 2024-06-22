import React from 'react'
import Navbar from './Navbar'

const FAQ = () => {
  return (
    <div>
      <Navbar/>
      <div className="container">
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

          <div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
       How soon can a passenger enter the terminal ?
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong></strong> On the date of travel, passenger can enter the terminal anytime.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        What are the arrangements at the terminal-1 ? 
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong></strong>For passenger convenience various arrangements have been made at Terminal -1. Details are mentioned below:

For the Entry into the Airport -

6 self-check-in kiosks are available at the Departure Forecourt for passengers to do Web check-in and 10 self-check-in kiosks are available at check-in hall.

At the Check-in -

To avoid close contact and crowding at the counters, passengers are encouraged to use the e-boarding scanners for entry to Security and frisking entry points.

At the Security check -

Alignment of queues to ensure social distance among CISF personnel and passengers
Deployment of queue managers, floor markings and allocation of alternate seats, installation of automatic hand sanitiser at various places
Tray disinfection SOP for passengers’ safety will be maintained
Auto dispensing sanitizer machines have been installed for passengers to use after security checks Contactless Retail and F&B Options
After security checks, passengers will move to SHA, where they can access food carts and retail shops. Social distance markings have been put in shops, lifts, seats etc.
Strict & stringent SOP would be maintained for Food and Beverage (F&B) shops and retail shops to ensure safety and hygiene.
At the Boarding Gate -

Passengers are requested not to use seats with yellow band to ensure social distance
Queue managers deployed at boarding gates will continuously monitor precautionary measures
DIAL will encourage all passengers to wear masks and maintain social distance at all times, to ensure their safety and well-being
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
       What are the measures taken for the passengers safety ?
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong></strong> Safety of our passengers and our team at Terminals is of paramount importance to us. There are multiple procedures adopted to ensure a seamless & safe travel experience for our passengers . Some of the actions taken towards this is mentioned below:

Sanitization of High Contact Surfaces -

Deep cleaning of the vast Terminal 1 is being carried out 24*7. A team of housekeeping personnel has been deployed to ensure a clean and sanitized terminal for passengers round the clock. The staff will be thermally screened and checked for symptoms before they get to their duties.
Regular sanitization of high contact surfaces, such as desks, chairs, elevators, railings, CUSS, trolleys, handles, trays, baggage belts, etc. inside the terminals would be carried out. Apart from these, washrooms will be closed after every hour to sanitize all its surfaces.
Apart from these, DIAL will also have facilities to isolate suspected COVID-19 passengers at the airport following a government direction


      </div>
    </div>
  </div>
</div>








          </div>
        </div>
      </div>
    </div>
  )
}

export default FAQ
