import css from './OptionsButton.module.css';

export default function OptionsButton({handlers,children,type}) {
  return(
    <button className={css.optionsButton} onClick={()=>handlers(type)}>{children}</button>
  )
}