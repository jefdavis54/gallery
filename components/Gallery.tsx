import PhotoGallery from "react-photo-gallery";
import { works } from "../utils/works";

interface Photo {
  src: string;
  width: number;
  height: number;
}
type Direction = "column" | "row";

const photos: Photo[] = works.map((work) => {
  return {
    src: `images/thm/work/${work.easyId}.webp`,
    width: work.imageThmWidth,
    height: work.imageThmHeight,
  };
});

const direction: Direction = "row";

const Gallery = () => {
  return <PhotoGallery photos={photos} direction={direction} />;
};

export { Gallery };
