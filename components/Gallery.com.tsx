import PhotoGallery from "react-photo-gallery";

interface ComponentProps {
  photos: Photo[];
  direction: Direction;
}

const Gallery = ({ photos, direction }: ComponentProps) => {
  return <PhotoGallery photos={photos} direction={direction} />;
};

export { Gallery };
