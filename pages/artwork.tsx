import { useRouter } from "next/router";
import { works as worksSource } from "../utils/works";
import { locations as locationsSource } from "../utils/locations";
import { artists as artistsSource } from "../utils/artists";
import { HtmlHead } from "../components/HtmlHead.com";
import { Nav } from "../components/Nav.com";
import { Sty_Img, Sty_Title } from "../styles/Page_Artwork.sty";
import { Sty_ContainerPageWithNav } from "../styles/ContainerPageWithNav.sty";
import { Sty_ContainerBordered } from "../styles/ContainerBordered.sty";
import { Sty_ContainerImg } from "../styles/ContainerImg.sty";
import { Table } from "../components/Table.com";

interface TableRow {
  label: string;
  value: string;
  type?: string;
}

const ArtworkPage = () => {
  const router = useRouter();
  const queryId = router.query.id;
  let tableRows: TableRow[] = [];
  const tableHeader = ["", "Artwork Details"];
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
  if (artist) {
    tableRows.push({ label: "Artist's Name", value: artist.name });
    tableRows.push({
      label: "Artist's Nationality",
      value: artist.nationality,
    });
    tableRows.push({
      label: "Artist's Wikipedia",
      value: artist.wikiPage,
      type: "url",
    });
  }
  if (artwork) {
    tableRows.push({ label: "Title", value: artwork.workName });
    tableRows.push({ label: "Date Completed", value: artwork.dateCompleted });
    tableRows.push({ label: "Accession Number", value: artwork.Accession });
    tableRows.push({
      label: "Artwork Website",
      value: artwork.artworkLocationURL,
      type: "url",
    });
  }
  if (location) {
    tableRows.push({ label: "Location", value: location.name });
    tableRows.push({ label: "City", value: location.city });
    tableRows.push({ label: "State", value: location.state });
    tableRows.push({ label: "Country", value: location.country });
    tableRows.push({
      label: "Location Website",
      value: location.website,
      type: "url",
    });
  }
  const imgAlternateText =
    (artist ? artist.name : "") +
    (artist && artwork ? " - " : "") +
    (artwork ? artwork.workName : "");

  return (
    <div>
      <HtmlHead></HtmlHead>
      <Nav></Nav>
      <Sty_ContainerPageWithNav>
        <Sty_ContainerBordered>
          <Sty_Title>{imgAlternateText}</Sty_Title>
        </Sty_ContainerBordered>
        <Sty_ContainerImg>
          <Sty_Img
            src={"images/opt/work/" + artwork?.easyId + ".jpg"}
            alt={imgAlternateText}
          ></Sty_Img>
        </Sty_ContainerImg>
        <Sty_ContainerBordered>
          <Table header={tableHeader} rows={tableRows}></Table>
        </Sty_ContainerBordered>
      </Sty_ContainerPageWithNav>
    </div>
  );
};

export { ArtworkPage as default };
