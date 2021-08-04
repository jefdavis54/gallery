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
