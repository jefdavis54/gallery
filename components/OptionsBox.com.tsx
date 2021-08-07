import { Sty_OptionsContainer } from "./OptionsBox.sty";
import { ToggleSwitch } from "./ToggleSwitch.com";

interface OptionProp {
  easyId: string;
  checked: boolean;
  label: string;
  disabled: boolean;
}

interface ComponentProps {
  componentId: string;
  optionsArr: OptionProp[];
  handleChecked: Function;
}
const OptionsBox = ({
  componentId,
  optionsArr,
  handleChecked,
}: ComponentProps) => {
  return (
    <Sty_OptionsContainer>
      {optionsArr.map((option, index) => {
        const uniqueID = option.easyId + "_" + componentId + "_" + index;
        return (
          <ToggleSwitch
            key={uniqueID}
            componentId={componentId}
            optionObj={option}
            handleChecked={handleChecked}
          />
        );
      })}
    </Sty_OptionsContainer>
  );
};

export { OptionsBox };
