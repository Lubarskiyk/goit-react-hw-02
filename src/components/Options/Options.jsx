import OptionsButton from "./OptionsButtom.jsx";
import { BsEmojiFrown, BsEmojiNeutral, BsEmojiSmile } from "react-icons/bs";
import css from "./Options.module.css";

export default function Options({ handler, reset, total }) {
  return (
    <div className={css.options}>
      <OptionsButton handlers={handler} type="good">
        Good <BsEmojiSmile />
      </OptionsButton>
      <OptionsButton handlers={handler} type="neutral">
        Neutral <BsEmojiNeutral />{" "}
      </OptionsButton>
      <OptionsButton handlers={handler} type="bad">
        Bad <BsEmojiFrown />
      </OptionsButton>
      { total > 0 && <OptionsButton handlers={reset}>Reset</OptionsButton>  }
    </div>
  );
}
