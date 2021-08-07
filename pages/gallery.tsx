import { useState } from "react";
import { Gallery } from "../components/Gallery.com";
import { HtmlHead } from "../components/HtmlHead.com";
import { Nav } from "../components/Nav.com";
import { OptionsBox } from "../components/OptionsBox.com";
import { works as worksSource } from "../utils/works";
import { artists as artistsSource } from "../utils/artists";
import { Sty_ContainerPageWithNav } from "../styles/ContainerPageWithNav.sty";
import {
  Sty_LabelFilterHeading,
  Sty_OneRow,
  Sty_BtnAll,
  Sty_BtnNone,
} from "../styles/Page_Gallery.sty";

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
    src: `images/thm/work/${work.easyId}.webp`,
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
  // useEffect(() => {
  //   window.localStorage.setItem("artistFilters", JSON.stringify(artistDetails));
  // }, [artistDetails]);
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
          src: `images/thm/work/${work.easyId}.webp`,
          width: work.imageThmWidth,
          height: work.imageThmHeight,
        };
      });
      setGalleryPhotos(filteredPhotos);
    }
  };
  const showAllWorks = (checked: boolean) => {
    const setShowWork = [...artistDetails];
    setArtistDetails(
      setShowWork.map((work) => {
        const showWorks = { ...work, checked };
        console.log(showWorks);
        return showWorks;
      })
    );
    if (checked) {
      setGalleryPhotos(initialGalleryPhotos);
    } else {
      setGalleryPhotos([]);
    }
  };
  return (
    <div>
      <HtmlHead></HtmlHead>
      <Nav></Nav>
      <Sty_ContainerPageWithNav>
        <Sty_OneRow>
          <Sty_LabelFilterHeading>Filter by artist:</Sty_LabelFilterHeading>
          <div>
            <Sty_BtnAll onClick={() => showAllWorks(true)}>
              <span className="toggle-indicator">
                <span className="checkMark">
                  <svg
                    viewBox="0 0 24 24"
                    id="ghq-svg-check"
                    role="presentation"
                    aria-hidden="true"
                  >
                    <path d="M9.86 18a1 1 0 01-.73-.32l-4.86-5.17a1.001 1.001 0 011.46-1.37l4.12 4.39 8.41-9.2a1 1 0 111.48 1.34l-9.14 10a1 1 0 01-.73.33h-.01z"></path>
                  </svg>
                </span>
              </span>
              Select All
            </Sty_BtnAll>
          </div>
          <div>
            <Sty_BtnNone onClick={() => showAllWorks(false)}>
              <span className="toggle-indicator"></span>
              Select None
            </Sty_BtnNone>
          </div>
        </Sty_OneRow>
        <OptionsBox
          componentId={"artist01"}
          optionsArr={artistDetails}
          handleChecked={handleArtistCheckedChange}
        />
        <Gallery photos={galleryPhotos} direction={"row"} />
      </Sty_ContainerPageWithNav>
    </div>
  );
}

export { ArtGallery as default };
