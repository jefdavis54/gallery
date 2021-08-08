import { useState, useEffect } from "react";
import { Gallery } from "../components/Gallery.com";
import { HtmlHead } from "../components/HtmlHead.com";
import { Nav } from "../components/Nav.com";
import { OptionsBox } from "../components/OptionsBox.com";
import { works as worksSource } from "../utils/works";
import { artists as artistsSource } from "../utils/artists";
import { Sty_ContainerPageWithNav } from "../styles/ContainerPageWithNav.sty";
import {
  Sty_FilterHeading,
  Sty_OneRow,
  Sty_BtnAll,
  Sty_BtnNone,
  Sty_VisibleWorkCount,
  Sty_Pill,
  Sty_PillDark,
} from "../styles/Page_Gallery.sty";

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

const initialArtistDetails: ArtistFilterDetails[] = artistsSource.map(
  (artist) => {
    return {
      easyId: artist.easyId,
      nationality: artist.nationality,
      label: artist.name,
      checked: true,
      disabled: false,
      artWorkCount: worksSource.filter(
        (work) => work.easyId.split("_")[0] === artist.easyId
      ).length,
    };
  }
);
function useHasMounted() {
  const [hasMounted, setHasMounted] = useState(false);
  useEffect(() => {
    setHasMounted(true);
  }, []);
  return hasMounted;
}

function ArtGallery() {
  const worksCount = worksSource.length;
  let disableTillMounted = true;
  const [artistDetails, setArtistDetails] = useState(initialArtistDetails);
  const [galleryPhotos, setGalleryPhotos] = useState(initialGalleryPhotos);
  const hasMounted = useHasMounted();
  if (hasMounted) {
    disableTillMounted = false;
    // const localState = window?.localStorage.getItem("artistFilters");
    // if (localState) {
    //   console.log("JSON.parse(localState)", JSON.parse(localState));
    // }
  }
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
      if (hasMounted) {
        window.localStorage.setItem(
          "artistFilters",
          JSON.stringify(updateArtistDetails)
        );
      }

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
    // Update OptionsBox->ToggleSwitches
    const setShowWork = [...artistDetails];
    const updatedArtistDetails = setShowWork.map((work) => {
      return { ...work, checked };
    });
    setArtistDetails(updatedArtistDetails);
    if (hasMounted) {
      window.localStorage.setItem(
        "artistFilters",
        JSON.stringify(updatedArtistDetails)
      );
    }
    // Update Gallery
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
          <Sty_FilterHeading>Filter by artist:</Sty_FilterHeading>
          <Sty_BtnAll
            onClick={() => showAllWorks(true)}
            disabled={disableTillMounted}
          >
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
          <Sty_BtnNone
            onClick={() => showAllWorks(false)}
            disabled={disableTillMounted}
          >
            <span className="toggle-indicator"></span>
            Select None
          </Sty_BtnNone>
        </Sty_OneRow>
        <Sty_VisibleWorkCount>
          (showing <Sty_Pill>{galleryPhotos.length}</Sty_Pill> of{" "}
          <Sty_PillDark>{worksCount}</Sty_PillDark> works)
        </Sty_VisibleWorkCount>
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
