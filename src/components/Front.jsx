import style from '../style/front.module.css'

export default function Front() {
  return (
    <div className={style.frontContainer}>
        <div className={style.frontTextContainer}>
            <div className = {style.frontTitleContainer}>
                <h1> Navega de forma Diferente<span className={style.name}></span></h1>
            </div>
            <div className={style.frontTextDescriptionContainer}>
            <p>Explora la web con un navegador experimental que permite buscar, acceder a tus sitios favoritos y más, todo en una interfaz adaptable y sin extensiones. Perfecto para aprender y experimentar con nuevas formas de navegar.</p>
            
            </div>{/*
            <div className={style.frontBtnsContainer}>
                <button id="uno">uno</button>
                <button id="dos">dos</button>
            </div>*/}
        </div>
        <div className={style.frontImageContainer}>
            <button>
            <a className={style.iconLink} href="http://" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-linux"></i>
                </a>
                <a href="http://" target="_blank" rel="noopener noreferrer">
                Linux
                </a>
                <a className={style.iconLink} href="http://" target="_blank" rel="noopener noreferrer">
                <i className="fa-solid fa-arrow-down"></i>
                </a>
            </button>
            <button>
            <a className={style.iconLink} href="http://" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-windows"></i>
                </a>
            <a href="http://" target="_blank" rel="noopener noreferrer">
                Windows
                </a>
                <a className={style.iconLink} href="http://" target="_blank" rel="noopener noreferrer">
                <i className="fa-solid fa-arrow-down"></i>
                </a>
            </button>
        </div>
    </div>
  )
}
