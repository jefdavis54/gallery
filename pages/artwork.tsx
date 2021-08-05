import Link from "next/link";
import { useRouter } from "next/router";
import { works as worksSource } from "../utils/works";
import { locations as locationsSource } from "../utils/locations";
import { artists as artistsSource } from "../utils/artists";
import { Sty_Img, Sty_ImgContainer } from "../styles/ArtworkPage.sty";

const ArtworkDetails = ({
  workName,
  dateCompleted,
  Accession,
  artworkLocationURL,
}: TSI_Work) => {
  return (
    <div>
      <p>Artwork&apos;s Name: {workName}</p>
      <p>Artwork&apos;s Date Completed: {dateCompleted}</p>
      <p>Artwork&apos;s Accession Number: {Accession}</p>
      <p>
        Artwork&apos;s website (if available):{" "}
        <Link href={artworkLocationURL}>
          <a>{artworkLocationURL}</a>
        </Link>
      </p>
    </div>
  );
};
const ArtistDetails = ({ name, nationality, wikiPage }: TSI_Artist) => {
  return (
    <>
      <p>Artist&apos;s Name: {name}</p>
      <p>Artist&apos;s Nationality: {nationality}</p>
      <p>
        Artist&apos;s Wikipedia Page:
        <Link href={wikiPage}>
          <a>{wikiPage}</a>
        </Link>
      </p>
    </>
  );
};
const LocationDetails = ({
  name,
  city,
  state,
  country,
  website,
}: TSI_Location) => {
  const fixedWebsite = "https://" + website;
  return (
    <>
      <p>Artwork&apos;s Location Name: {name}</p>
      <p>Artwork&apos;s Location City: {city}</p>
      <p>Artwork&apos;s Location State: {state}</p>
      <p>Artwork&apos;s Location Country: {country}</p>
      <p>
        Artwork&apos;s Location Website:{" "}
        <Link href={fixedWebsite}>{fixedWebsite}</Link>
      </p>
    </>
  );
};

const ArtworkPage = () => {
  const router = useRouter();
  const queryId = router.query.id;
  let artwork: undefined | TSI_Work = undefined;
  let location: undefined | TSI_Location = undefined;
  let artist: undefined | TSI_Artist = undefined;
  if (queryId) {
    const artworkIdx = worksSource.findIndex((work) => work.easyId === queryId);
    if (artworkIdx > -1) {
      artwork = worksSource[artworkIdx];
      location = locationsSource.find(
        (location) => location.easyId === artwork?.artworkLocation
      );
      const artistId = artwork.easyId.split("_")[0];
      artist = artistsSource.find((artist) => artist.easyId === artistId);
    }
  }
  const imgAlternateText =
    (artist ? artist.name : "") +
    (artist && artwork ? " - " : "") +
    (artwork ? artwork.workName : "");

  return (
    <div>
      <h1>artworkPage</h1>
      <Link href="/">
        <a>Go home</a>
      </Link>
      <Sty_ImgContainer>
        <Sty_Img
          src={"images/opt/work/" + artwork?.easyId + ".jpg"}
          alt={imgAlternateText}
        ></Sty_Img>
      </Sty_ImgContainer>
      <div>
        {artist && ArtistDetails(artist)}
        {artwork && ArtworkDetails(artwork)}
        {location && LocationDetails(location)}
      </div>
      <button type="button" onClick={() => router.back()}>
        Go back
      </button>
    </div>
  );
};

export { ArtworkPage as default };
