import { Sty_Toggle } from "./ToggleSwitch.sty";

interface OptionProp {
  easyId: string;
  checked: boolean;
  label: string;
  disabled: boolean;
}

interface ComponentProps {
  optionObj: OptionProp;
  componentId: string;
  handleChecked: Function;
}

const ToggleSwitch = ({
  optionObj,
  componentId,
  handleChecked,
}: ComponentProps) => {
  const { easyId, checked, label, disabled } = optionObj;
  const uniqueId = easyId + "_" + componentId;
  const uniqueLabelId = uniqueId + "_lbl";
  const uniqueInputId = uniqueId + "_inp";

  const handleClick = (e: any) => {
    // e.preventDefault();
    handleChecked({ easyId, checked: !checked });
  };
  return (
    <div>
      <Sty_Toggle id={uniqueLabelId} className="toggle" htmlFor={uniqueInputId}>
        <input
          type="checkbox"
          className="toggle__input"
          id={uniqueInputId}
          disabled={disabled}
          checked={checked}
          onChange={handleClick}
        />
        <span className="toggle-track">
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
        </span>
        {label}
      </Sty_Toggle>
    </div>
  );
};
export { ToggleSwitch };
