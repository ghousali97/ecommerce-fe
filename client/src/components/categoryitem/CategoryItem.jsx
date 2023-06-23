import './categoryitem.css'

function CategoryItem({ category }) {

    return (<div className='categoryitem'>
        <img src={category.img} alt="" />
        <div className='infoContainer'>
            <h1>{category.title}</h1>
            <button>SHOP NOW</button>
        </div>
    </div>);
}

export default CategoryItem;