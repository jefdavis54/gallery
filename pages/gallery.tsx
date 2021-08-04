import Link from "next/link";
import { useState } from "react";
import { Gallery } from "../components/Gallery.com";
import { OptionsBox } from "../components/OptionsBox.com";
import { works as worksSource } from "../utils/works";
import { artists as artistsSource } from "../utils/artists";

interface ArtistDetails {
  easyId: string;
  checked: boolean;
  label: string;
  nationality: string;
}

interface UpdateCheckedProps {
  easyId: string;
  checked: boolean;
}

const initialGalleryPhotos: Photo[] = worksSource.map((work) => {
  return {
    src: `images/thm/work/${work.easyId.toUpperCase()}.webp`,
    width: work.imageThmWidth,
    height: work.imageThmHeight,
  };
});

const initialArtistDetails: ArtistDetails[] = artistsSource.map((artist) => {
  return {
    easyId: artist.easyId,
    checked: true,
    label: artist.name,
    nationality: artist.nationality,
  };
});

function ArtGallery() {
  const [artistDetails, setArtistDetails] = useState(initialArtistDetails);
  const [galleryPhotos, setGalleryPhotos] = useState(initialGalleryPhotos);

  const handleArtistCheckedChange = ({
    easyId,
    checked,
  }: UpdateCheckedProps) => {
    const updateArtistDetails = [...artistDetails];
    const foundIndex = updateArtistDetails.findIndex(
      (artist) => artist.easyId === easyId
    );
    if (foundIndex >= 0) {
      updateArtistDetails[foundIndex].checked = checked;
      setArtistDetails(updateArtistDetails);

      const includedArtists = updateArtistDetails.filter(
        (artist) => artist.checked
      );
      const includedArtistsSet = new Set(
        includedArtists.map((artist) => artist.easyId)
      );
      const filteredWorks = worksSource.filter((work) => {
        return includedArtistsSet.has(work.easyId.split("_")[0]);
      });
      const filteredPhotos = filteredWorks.map((work) => {
        return {
          src: `images/thm/work/${work.easyId.toUpperCase()}.webp`,
          width: work.imageThmWidth,
          height: work.imageThmHeight,
        };
      });
      setGalleryPhotos(filteredPhotos);
    }
  };

  return (
    <div>
      <Link href="/">
        <a>Go Home</a>
      </Link>
      <h3>I am the Gallery component</h3>
      <OptionsBox
        componentId={"artist01"}
        optionsArr={artistDetails}
        handleChecked={handleArtistCheckedChange}
      />
      <Gallery photos={galleryPhotos} direction={"row"} />
    </div>
  );
}

export { ArtGallery as default };
