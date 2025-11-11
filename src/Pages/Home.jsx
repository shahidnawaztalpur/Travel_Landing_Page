import React from "react";
import HeroSection from "../Components/HeroScetion";
import NextTrip from "../Components/NextTrip";
import Testimonials from "../Components/Testimonials";
import Services from "../Components/Services";
import Destinations from "../Components/Destinations";
import Contact from "../Components/Contact";
import Group48Image from "../assets/images/Group 48.png"
import Group49Image from "../assets/images/Group 49.png"
import Group50Image from "../assets/images/Group 50.png"
import planeImage from "../assets/images/plane.png"
import DestinationImage from "../assets/images/Destination.png"
import Destination1Image from "../assets/images/Destination (1).png"
import Destination2Image from "../assets/images/Destination (2).png"
import Group7Image from "../assets/images/Group 7.png"
import Group12Image from "../assets/images/Group 12.png"
import Group11Image from "../assets/images/Group 11.png"
import Rectangle17Image from "../assets/images/Rectangle 17.png"
import LEAFImage from "../assets/images/LEAF.png"
import mapIconImage from "../assets/images/map icon.png"
import sendImage from "../assets/images/send.png"
import image from "../assets/images/Image.png"
import LogosImage from "../assets/images/logos.png"


const Home = () => {
  const cardData = [
    {
      image: Group48Image,
      title: "Explore Hidden Destinations",
      description: "Discover breathtaking locations and hidden gems around the world with our expert travel guides.",
    },
    {
      image: planeImage,
      title: "Book Your Flight Easily",
      description: "Find and book affordable flights instantly with flexible date options and exclusive discounts.",
    },
    {
      image: Group49Image,
      title: "Luxury Hotels & Resorts",
      description: "Stay at top-rated hotels and resorts that combine comfort, luxury, and stunning views.",
    },
    {
      image: Group50Image,
      title: "Adventure Awaits You",
      description: "Plan your next adventure with our curated tours — from mountain trekking to island diving.",
    },
  ];
  
   
    const DestinationsCard = [
      {
        image: DestinationImage,
      },
      {
        image: Destination1Image,
      },
      {
        image: Destination2Image,
      },
    ];
  

    const leftCard = {
      title: "Explore Next Trip",
      items: [
        {
          image: Group7Image,
          title: "Mountain Adventure",
          description: "Enjoy scenic mountains and nature Enjoy scenic mountains and nature Enjoy scenic mountains and nature."
        },
        {
          image: Group12Image,
          title: "Beach Holiday",
          description: "Relax at beautiful sunny beaches Relax at beautiful sunny beaches Relax at beautiful sunny beaches."
        },
        {
          image: Group11Image,
          title: "City Tour",
          description: "Experience vibrant city life Experience vibrant city life Experience vibrant city life."
        }
      ]
    };
    
    const rightCard = {
      image: Rectangle17Image,
      title: "Trip To Grace",
      description: "24 june | Plan your next amazing journey.",
      LeafImage: LEAFImage,
      SendImage: mapIconImage,
      MapImage: sendImage,
      Rating: "24 People going  | ⭐⭐⭐⭐⭐"
    };
    
      
    const testimonialsCard = {
      title: 'Testimonials',
      Subtitle: 'What Our Travelers Say About Us',
    };
    
    const RatingCard = {
      image: image,
      description: '"Our trip was perfectly organized! From flights to hotel booking, everything was smooth. The team made our travel experience unforgettable."',
      NameTitle: 'John Wicks',
      location: 'Lahore, Pakistan',
      SecondName: 'Emily Carter',
      position: 'CEO, Wander World',
    };
    
    const contactData = {
      title: "Subscribe to get information, latest news and other interesting offers about Jadoo",
      EmailButton: "Email Us",
      SubscribeButton: "Subscribe Now"
    };
    
    return (
      <>

    <HeroSection />

    <Services heading="We Offer Best Services" cards={cardData} />
    <Destinations heading="Top Destinations" cards={DestinationsCard} />
    
    <NextTrip leftCard={leftCard} rightCard={rightCard} />
    <Testimonials testimonialsCard={testimonialsCard} RatingCard={RatingCard} />
    
    <div className="flex justify-center items-center">
  <img src={LogosImage} alt="Logos" className="w-1/1 h-auto" />
</div>

      
<Contact 
        title={contactData.title} 
        EmailButton={contactData.EmailButton} 
        SubscribeButton={contactData.SubscribeButton} 
      />


    </>
  );
};

export default Home;
