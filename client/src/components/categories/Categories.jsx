import { categories } from "../../data";
import CategoryItem from "../categoryitem/CategoryItem";
import './categories.css';


function Categories() {


    return (
        <div className="categories">
            {categories.map((category) => {
                return <CategoryItem categoryItem={category} />
            })}
        </div>


    );
}


export default Categories