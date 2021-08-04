import PhotoGallery from "react-photo-gallery";
import { useRouter } from "next/router";

interface ComponentProps {
  photos: Photo[];
  direction: Direction;
}

const Gallery = ({ photos, direction }: ComponentProps) => {
  const router = useRouter();

  const handleOnClick = (e: any) => {
    e.preventDefault();
    // The click should target an img tag on the photogallery
    // If it does, use the src to view the photo
    // zJED Right now this assumes it's an artist
    if (e?.target?.src) {
      const pathStrArr = e.target.src.split("/");
      const filename = pathStrArr.pop();
      const extensionCHK = filename.split(".");
      if (extensionCHK.length === 2) {
        const resourceCHK = extensionCHK[0].split("_");
        if (resourceCHK.length === 2) {
          router.push(`/artwork?id=${extensionCHK[0]}`);
          return;
        }
      }
      // If you get here, something went wrong. Do nothing but log problem.
      console.log(
        "Gallery.com::handleOnClick:: Something went wrong with e.target:",
        e.target
      );
    }
  };

  return (
    <PhotoGallery
      photos={photos}
      direction={direction}
      onClick={handleOnClick}
    />
  );
};

export { Gallery };
