import "./Gallery.css";
import { images } from "../../constants";
import { SubHeading } from "../../components";
import InstagramIcon from "@mui/icons-material/Instagram";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { useRef } from "react";

const Images = [
  images.gallery01,
  images.gallery02,
  images.gallery03,
  images.gallery04,
];
const Gallery = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const scroll = (direction: string) => {
    const { current } = scrollRef;

    if (direction === "left" && current) {
      current.scrollLeft -= 300;
    } else if (current) {
      current.scrollLeft += 300;
    }
  };
  return (
    <div className="app__gallery flex__center">
      <div className="app__gallery-content">
        <SubHeading title="Instagram" />
        <h1 className="headtext__cormorant">Photo Gallery</h1>
        <p className="p__opensans" style={{ color: "#AAA", marginTop: "2rem" }}>
          Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 7SG
        </p>
        <button type="button" className="custom__button">
          View More
        </button>
      </div>
      <div className="app__gallery-images">
        <div className="app__gallery-images_container" ref={scrollRef}>
          {Images.map((image, index) => (
            <div
              className="app__gallery-images_card flex__center"
              key={`gallery_image-${index + 1}`}
            >
              <img src={image} alt="img" />
              <InstagramIcon className="gallery__image-icon" />
            </div>
          ))}
        </div>
        <div className="app__gallery-images_arrows">
          <ArrowLeftIcon
            sx={{ fontSize: "4rem" }}
            className="gallery__arrow-icon"
            onClick={() => scroll("left")}
          />
          <ArrowRightIcon
            sx={{ fontSize: "4rem" }}
            className="gallery__arrow-icon"
            onClick={() => scroll("right")}
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
