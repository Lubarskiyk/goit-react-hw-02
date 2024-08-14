import { optionsButton } from "./OptionsButton.module.css";

export default function OptionsButton({ handlers, children, type }) {
  return (
    <button className={optionsButton} onClick={() => handlers(type)}>
      {children}
    </button>
  );
}
