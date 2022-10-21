const Banner = ({promocion}) => {
    return <div className='banner'>
    <div className='banner__content'>
      <h2 className='banner__title'>{promocion}</h2>
      <button className='banner__button'>REGISTRATE GRATIS {"->"}</button>
    </div>
  </div>
}

export default Banner;