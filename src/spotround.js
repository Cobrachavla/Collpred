// App.js
import React from 'react';
import './global.css';
import './spotround.css';
import Header from './Header';
import Footer from './Footer';

function SpotRound() {
  return (
    <div className="spot-round-admission">
      <Header />
      
      <MainContent />
      <FAQ />
      <Footer />
    </div>
  );
}



const MainContent = () => (
  <>
    <div className="e80a46-3c96-4d6a-9eb7-e1eaae60-parent">
      <img className="frame-item" alt="" src="https://www.thoughtco.com/thmb/k4end_sk9Gi3XAp5Q4hBlPAjcPA=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/swarthmore-college-Eric-Behrens-flickr-5706ffe35f9b581408d48cb3.jpg" />
    </div>
    <div className="e-a-c-d-a-e-b-e-e-a-a-e-c-d-l">
      <div className="e-a-c-d-a-e-b-e-e-a-a-e-c-d-l-child"></div>
      <h1 className="spot-round-admission2">SPOT ROUND ADMISSION</h1>
    </div>
    <div className="content">
      <div className="rectangle-parent">
        <div className="frame-inner"></div>
        <h2 className="spot-round-admission3">Spot Round Admission</h2>
        <div className="overview-details">
          <h3 className="home-spot">Home &gt; Spot Round Admissions</h3>
        </div>
      </div>
    </div>
    <div className="universities">Universities</div>
    <div className="universities1">Universities</div>
    <div className="universities2">Universities</div>
    <div className="universities3">Universities</div>
    <PageHeader />
  </>
);

const PageHeader = () => (
  <main className="page-header">
    <section className="date-parent">
      <EventInformation />
      <EventDetails />
      <Courses />
    </section>
  </main>
);

const EventInformation = () => (
  <div className="date">
    <div className="date-child"></div>
    <img className="time-icon" loading="lazy" alt="" src="https://media.istockphoto.com/id/1457878227/photo/business-people-having-a-meeting-in-a-tech-company.jpg?s=612x612&w=0&k=20&c=G15Z82qB7v1BVzqZ9eu_wrnDQPrxUEatXyb_TGKdu_s=" />
    <div className="event-information">
      <div className="link-header-parent">
        <div className="link-header">
          <h2 className="overview">Overview</h2>
          <div className="f-a-q">
            <div className="what-is-spot-container">
              <p className="what-is-spot-round"><b>What is spot round</b></p>
              <p className="consectetur-adipiscing-elit">Sed sagittis blandit volutpat.</p>
              <p className="integer-lobortis-fermentum">Integer lobortis fermentum consectetur.</p>
            </div>
          </div>
        </div>
        <div className="question">
          <div className="colleges-courses">
            <b className="elegibility-criteria">Elegibility criteria</b>
            <div className="expansion">
              <div className="consectetur-adipiscing-elit-container">
                <p className="consectetur-adipiscing-elit1">Sed sagittis blandit volutpat.</p>
                <p className="integer-lobortis-fermentum1">Integer lobortis fermentum consectetur.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="footer">
          <div className="how-to-participate-parent">
            <b className="how-to-participate">How to participate</b>
            <div className="consectetur-adipiscing-elit-container1">
              <p className="consectetur-adipiscing-elit2">blandit volutpat.</p>
              <p className="integer-lobortis-fermentum2">Integer lobortis fermentum consectetur.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const EventDetails = () => (
  <div className="event-details-parent">
    <EventCard />
    <EventCard />
    <EventCard />
    <ScheduleCounseling />
  </div>
);

const EventCard = () => (
  <div className="event-details">
    <div className="event-image-parent">
      <div className="event-image">
        <img className="how-icon" loading="lazy" alt="" src="https://media.istockphoto.com/id/1278973849/photo/portrait-of-happy-high-school-girl-studying-in-class.jpg?s=612x612&w=0&k=20&c=BtVnU9KcQTegA4J3dkgNgjgLZDwIz9hXXOiM-pfVEAo=" />
        <div className="schedule"></div>
      </div>
      <div className="event-one-details">
        <div className="event-one-date">
          <div className="event-one-day">
            <div className="rectangle-group">
              <div className="rectangle-div"></div>
              <h3 className="xx-mon">
                <p className="xx">XX</p>
                <p className="mon">Mon</p>
              </h3>
            </div>
          </div>
          <div className="event-one-time">
            <div className="event-one-time-child"></div>
            <b className="xxxx-pm">XX:XX pm</b>
          </div>
        </div>
      </div>
      <div className="information-about-the">Information about the event</div>
    </div>
  </div>
);

const ScheduleCounseling = () => (
  <div className="event-two-inner">
    <div className="group-div">
      <div className="frame-child5"></div>
      <h3 className="schedule-spot-round">SCHEDULE SPOT ROUND COUNCLING</h3>
    </div>
  </div>
);

const Courses = () => (
  <div className="courses">
    <img className="courses-child" loading="lazy" alt="" src="./public/line-1.svg" />
    <FAQContent />
  </div>
);

const FAQContent = () => (
  <div className="f-a-q-content">
    <div className="f-a-q-title">
      <h1 className="general-faqs">General FAQ’S</h1>
      <div className="everything-you-need-to-know-ab-wrapper">
        <h1 className="everything-you-need">Everything you need to know about the product and how it works</h1>
      </div>
    </div>
    <FAQItems />
  </div>
);

const FAQItems = () => (
  <div className="f-a-q-item-one-wrapper">
    <div className="f-a-q-item-one">
      <div className="f-a-q-item-one-question-wrapper">
        <div className="f-a-q-item-one-question">
         
        </div>
      </div>
      <div className="f-a-q-item-expand">
        <img className="separator-icon" loading="lazy" alt="" src="./public/line-1.svg" />
        <div className="f-a-q-items">
          <FAQItem />
          <FAQItem />
          <FAQItem />
        </div>
      </div>
    </div>
  </div>
);

const FAQItem = () => (
  <div className="f-a-q-item-two-wrapper">
    <div className="f-a-q-item-two">
      <div className="f-a-q-item-two-question-wrapper">
        <div className="f-a-q-item-two-question">
          <h2 className="what-does-the">What does the product do?</h2>
          <div className="consectetur-adipiscing-elit4">
            consectetur adipiscing elit. Suspendisse congue quam cursus metus maximus, in commodo leo consectetur. Aliquam erat volutpat. Nullam enim mauris, tincidunt
          </div>
        </div>
      </div>
    </div>
  </div>
);

const FAQ = () => (
  <div className="footer">
    <div className="how-to-participate-parent">
      <b className="how-to-participate">How to participate</b>
      <div className="consectetur-adipiscing-elit-container1">
        <p className="consectetur-adipiscing-elit2">blandit volutpat.</p>
        <p className="integer-lobortis-fermentum2">Integer lobortis fermentum consectetur.</p>
      </div>
    </div>
  </div>
);



export default SpotRound;
