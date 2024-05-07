import img1 from "/src/assets/images/banner/1.jpg"
import img2 from "/src/assets/images/banner/2.jpg"
import img3 from "/src/assets/images/banner/3.jpg"
import img4 from "/src/assets/images/banner/4.jpg"


const Banner = () => {
  return (
    <div>
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src={img1}
            className="w-full max-h-screen object-cover rounded-lg"
          />
          <div className="absolute flex  transform justify-end right-14 gap-5 bottom-14 ">
            <a href="#slide4" className="btn btn-circle hover:bg-pcolor">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle hover:bg-pcolor">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src={img2}
            className="w-full max-h-screen object-cover rounded-lg"
          />
          <div className="absolute flex  transform justify-end right-14 gap-5 bottom-14 ">
            <a href="#slide1" className="btn btn-circle  hover:bg-pcolor">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle  hover:bg-pcolor">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full ">
          <img
            src={img3}
            className="w-full max-h-screen object-cover rounded-lg"
          />
          <div className="absolute flex  transform justify-end right-14 gap-5 bottom-14 ">
            <a href="#slide2" className="btn btn-circle  hover:bg-pcolor">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle  hover:bg-pcolor">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img
            src={img4}
            className="w-full max-h-screen object-cover rounded-lg"
          />
          <div className="absolute flex  transform justify-end right-14 gap-5 bottom-14 ">
            <a href="#slide3" className="btn btn-circle  hover:bg-pcolor">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle  hover:bg-pcolor">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
