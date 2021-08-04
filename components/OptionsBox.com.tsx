import { Sty_OptionsContainer } from "./OptionsBox.sty";
import { ToggleSwitch } from "./ToggleSwitch.com";

interface OptionsProp {
  easyId: string;
  checked: boolean;
  label: string;
}

interface ComponentProps {
  componentId: string;
  optionsArr: OptionsProp[];
  handleChecked: Function;
}
const OptionsBox = ({
  componentId,
  optionsArr,
  handleChecked,
}: ComponentProps) => {
  return (
    <Sty_OptionsContainer>
      {optionsArr.map(({ easyId, checked, label }, index) => {
        const uniqueID = easyId + "_" + componentId;
        return (
          <ToggleSwitch
            key={uniqueID + "_" + index}
            componentId={componentId}
            easyId={easyId}
            label={label}
            index={index}
            checked={checked}
            handleChecked={handleChecked}
          />
        );
      })}
    </Sty_OptionsContainer>
  );
};

export { OptionsBox };
