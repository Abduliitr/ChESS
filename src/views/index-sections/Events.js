import React from "react";

// reactstrap components
import {
  Container,
  Row,
  Col,
  Carousel,
  CarouselItem,
  CarouselIndicators
} from "reactstrap";

// core components

const items = [
  {
    src: require("assets/img/bg1.jpg"),
    altText: "Open Day, 20th March 2020",
    caption: "Open Day, 20th March 2020"
  },
  {
    src: require("assets/img/bg3.jpg"),
    altText: "Resume Buidling Session",
    caption: "Resume Building Session, 10 April 2020 "
  },
  {
    src: require("assets/img/bg4.jpg"),
    altText: "Placement Talk",
    caption: "Placement Talk, 14 Feb 2020"
  }
];

const items2 = [
    {
      src: require("assets/img/bg6.jpg"),
      altText: "Event1, 20th March 2020",
      caption: "Event1, 20th March 2020"
    },
    {
      src: require("assets/img/bg8.jpg"),
      altText: "Event2",
      caption: "Event2, 10 April 2020 "
    },
    {
      src: require("assets/img/bg7.jpg"),
      altText: "Event3",
      caption: "Event3, 14 Feb 2020"
    }
  ];
  

function CarouselSection() {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [animating, setAnimating] = React.useState(false);
  const onExiting = () => {
    setAnimating(true);
  };
  const onExited = () => {
    setAnimating(false);
  };
  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };
  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };
  const goToIndex = newIndex => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  // for items2
  
  return (
    <>
      <div className="section" id="carousel">
          <h2 style={{textAlign:"center"}}> Our Events </h2>
        <Container>
          {/* <div className="title">
            <h4 style={{textAlign:"center"}}>Conducted Events</h4>
          </div> */}
          <Row className="justify-content-center">
            <Col lg="6" md="6">
                <div className="title">
                    <h4 style={{textAlign:"center"}}>Conducted Events</h4>
                </div>
              <Carousel
                activeIndex={activeIndex}
                next={next}
                previous={previous}
              >
                <CarouselIndicators
                  items={items}
                  activeIndex={activeIndex}
                  onClickHandler={goToIndex}
                />
                {items.map(item => {
                  return (
                    <CarouselItem
                      onExiting={onExiting}
                      onExited={onExited}
                      key={item.src}
                    >
                      <img src={item.src} alt={item.altText} />
                      <div className="carousel-caption d-none d-md-block">
                        <h5 style={{backgroundColor:"#2fa7fb", borderRadius:"5%", opacity:"0.9"}}>{item.caption}</h5>
                      </div>
                    </CarouselItem>
                  );
                })}
                <a
                  className="carousel-control-prev"
                  data-slide="prev"
                  href="#pablo"
                  onClick={e => {
                    e.preventDefault();
                    previous();
                  }}
                  role="button"
                >
                  <i className="now-ui-icons arrows-1_minimal-left"></i>
                </a>
                <a
                  className="carousel-control-next"
                  data-slide="next"
                  href="#pablo"
                  onClick={e => {
                    e.preventDefault();
                    next();
                  }}
                  role="button"
                >
                  <i className="now-ui-icons arrows-1_minimal-right"></i>
                </a>
              </Carousel>
            </Col>

            <Col lg="6" md="6">
                <div className="title">
                    <h4 style={{textAlign:"center"}}>Upcoming Events</h4>
                </div>
              <Carousel
                activeIndex={activeIndex}
                next={next}
                previous={previous}
              >
                <CarouselIndicators
                  items={items2}
                  activeIndex={activeIndex}
                  onClickHandler={goToIndex}
                />
                {items2.map(item => {
                  return (
                    <CarouselItem
                      onExiting={onExiting}
                      onExited={onExited}
                      key={item.src}
                    >
                      <img src={item.src} alt={item.altText} />
                      <div className="carousel-caption d-none d-md-block">
                        <h5 style={{backgroundColor:"#2fa7fb", borderRadius:"5%", opacity:"0.9"}}>{item.caption}</h5>
                      </div>
                    </CarouselItem>
                  );
                })}
                <a
                  className="carousel-control-prev"
                  data-slide="prev"
                  href="#pablo"
                  onClick={e => {
                    e.preventDefault();
                    previous();
                  }}
                  role="button"
                >
                  <i className="now-ui-icons arrows-1_minimal-left"></i>
                </a>
                <a
                  className="carousel-control-next"
                  data-slide="next"
                  href="#pablo"
                  onClick={e => {
                    e.preventDefault();
                    next();
                  }}
                  role="button"
                >
                  <i className="now-ui-icons arrows-1_minimal-right"></i>
                </a>
              </Carousel>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default CarouselSection;
