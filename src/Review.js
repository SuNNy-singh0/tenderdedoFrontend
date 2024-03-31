import React from 'react'
import Slider from 'react-slick'
function Review() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };
  function NextArrow(props) {
    const { className, onClick } = props;
    return (
      <div className={className} id='next' onClick={onClick}>
        Next
      </div>
    );
  }
  
  function PrevArrow(props) {
    const { className, onClick } = props;
    return (
      <div className={className} id='prev' onClick={onClick}>
        Prev
      </div>
    );
  }
  const data = [
    {name:'isha thapar',
    image:`/images/1.jpeg`,
     rd:' my work is done on time and i satisfied with work' 
  },
  {name:'Arjun kapoor',
  image:`/images/3.jpeg`,
  rd:'I got my Contractor in Just 3 days and Contractor is highly skilled' 
},
{name:'Divam gupta',
image:`/images/7.jpeg`,
rd:'This platform give best person for my maintainence in home' 
},
{name:'albert',
image:`/images/8.jpeg`,
rd:'this platform is skilled person for glass work in firm' 
}
  ]
  return (
    <>
    <Slider {...settings} className='slidebox2'>
     
    
                {data.map((data, index) => (
                    <div className="swiper-slide" key={index}>
                        <div className="image-content">
                            <span className="overlay"></span>
                            <div className="card-image">
                                <img src={data.image} alt="" className="card-img" />
                            </div>
                        </div>
                        <div className="card-content">
                            <h2 className="name">{data.name}</h2>
                            <p className="description">{data.rd}</p>
                            <button className="button">View More</button>
                        </div>
                    </div>
                ))}
   
    
    </Slider>
    </>
  )
}

export default Review