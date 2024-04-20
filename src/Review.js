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
    {name:'kanika sharma',
    image:`/images/16.jpg`,
     rd:' my work is done on time and i satisfied with work' 
  },
  {name:'Arjun malik',
  image:`/images/15.jpg`,
  rd:'I got my Contractor in Just 3 days and Contractor is highly skilled' 
},
{name:'Divam saini',
image:`/images/12.jpg`,
rd:'This platform give best person for my maintainence in home' 
},
{name:'Sahil Singla',
image:`/images/13.jpg`,
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