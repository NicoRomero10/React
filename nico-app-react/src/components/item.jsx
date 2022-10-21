const Item = ({precio, nombre, categoria, tag}) => {

    return (<div className='card'>
        <div className="card__top">
            <img src="#" alt="" />
            <span className='card__price'>{precio}</span>
        </div>
        <div className="card__content">
            <span className='card__name'>{nombre}</span>
            <span className='card__category'>{categoria}</span>

            <span className='card__tag'>{tag}</span>
        </div>
    
    <p className='card__description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe dolores soluta cupiditate dicta vero nihil! Vel doloribus, praesentium quas est nulla nostrum aliquam culpa itaque, eveniet, facere repellat totam provident?
    </p>
    
    
    
  </div>)
}

export default Item