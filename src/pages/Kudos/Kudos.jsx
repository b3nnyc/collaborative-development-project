import './Kudos.scss';
import { Link } from 'react-router-dom';

export default function RouteKudos() {
  return (
    <section className='section'>
      <h2 className='section__heading'>Request Confirmation</h2>
      <div className='container__kudos'>
        <div className='text-box'>
          <p className='text-box__text'>Kudos Sophia!</p>

          <p className='text-box__text'>
            You have taken the next steps in your entrepreneurial journey! You
            have selected a mentor.
          </p>

          <p className='text-box__text'>
            Hang tight, they should get back to your shortly.
          </p>

          <Link className='text-box__link' to=''>
            Current Mentors
          </Link>
        </div>
      </div>
    </section>
  );
}