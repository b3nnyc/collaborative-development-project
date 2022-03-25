import "./Profile.scss"
import avatar from "../../assets/images/avatar.png"
import back from "../../assets/images/back.png"
import { Link } from 'react-router-dom';

export default function Profile() {
    return(
        <section>
            <div className="profile-header">
                <a href="/mentors"><img className="profile-header__arrow"  src={back} alt="back arrow" /></a>
                <h2 className="profile-header__title">Mentor Profiles</h2>
            </div>
            <div className="profile-container">
                <div className="profile-container__left">
                    <img className="profile-container__avatar" src={avatar} alt="avatar" />
                    <div>
                        <p className="profile-container__info-copy"><strong className="profile-container__info-bold">Language(s):</strong> Spanish, English</p>
                        <p className="profile-container__info-copy"><strong className="profile-container__info-bold">Age: 40</strong></p>
                        <p className="profile-container__info-copy"><strong className="profile-container__info-bold">Location:</strong> Vancouver, BC</p>
                    </div>
                </div>
                <div className="profile-container__right">
                    <p className="profile-container__copy"><strong className="profile-container__bold">Bio:</strong> Hernando has owned a clothing shop for 2 years, and started out using Shopify. He is a huge advocate of Shopify! </p>
                    <p className="profile-container__copy">His prior consulting experience has made him an entrepeneurial rockstar, he is able to communicate and direct effectively. </p>
                    <p className="profile-container__copy"><strong className="profile-container__bold">Strengths:</strong> knows the product inside out, understands fashion, communication</p>
                    <p className="profile-container__copy"><strong className="profile-container__bold">Experience:</strong> has mentored 15+ aspiring entrepeneurs </p>
                    <p className="profile-container__copy"><strong className="profile-container__bold">Personal Message:</strong> “Looking forward to helping you prosper, using the awesome sauce Shopify product!”</p>
                    <div className="profile-container__buttons">
                        <Link to="kudos"><button className="profile-container__button1">Request mentor</button></Link>
                        <button className="profile-container__button2">Start Conversation</button>
                    </div>
                </div>
            </div>
        </section>
    )
}