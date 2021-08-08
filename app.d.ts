interface Photo {
  src: string;
  width: number;
  height: number;
}
type Direction = "column" | "row";

// easyId at start with a component ID separated by '_' will set the unique id for the toggle
interface ToggleSwitchProps {
  componentId: string;
  easyId: string; // assumed to be in onChange object
  label: string;
  checked: boolean;
  onChange: Function;
}
interface ArtistFilterDetails {
  easyId: string;
  checked: boolean;
  disabled: boolean;
  artWorkCount: number;
  label: string;
  nationality: string;
}
interface TSI_Work {
  easyId: string;
  imageMaxWidth: number;
  imageMaxHeight: number;
  imageOptWidth: number;
  imageOptHeight: number;
  imageThmWidth: number;
  imageThmHeight: number;
  artist: string;
  artworkLocation: string;
  workName: string;
  dateCompleted: string;
  Accession: string;
  actualWidth_mm: number;
  actualHeight_mm: number;
  artworkLocationURL: string;
}
interface TSI_Location {
  easyId: string;
  imageMaxWidth: number;
  imageMaxHeight: number;
  imageOptWidth: number;
  imageOptHeight: number;
  imageThmWidth: number;
  imageThmHeight: number;
  name: string;
  nickname: string;
  dateFirstOpened: string;
  streetAddress: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
  coorN: number;
  coorE: number;
  website: string;
  wikiPage: string;
}
interface TSI_Artist {
  easyId: string;
  imageMaxWidth: number;
  imageMaxHeight: number;
  imageOptWidth: number;
  imageOptHeight: number;
  imageThmWidth: number;
  imageThmHeight: number;
  name: string;
  nationality: string;
  wikiPage: string;
}
