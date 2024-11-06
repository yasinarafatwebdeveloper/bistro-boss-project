import { Link } from "react-router-dom";
import MenuItem from "../../../../Shared/MenuItem/MenuItem";
import Cover from "../../Share/Cover/Cover";


const MenuCategory = ({items,img,desserd,title}) => {
    return (
        <div>
             <Cover img={img} title={title} items={desserd}></Cover>
          <div className="grid grid-cols-2 gap-5">
                {
                    items.map(item=><MenuItem key={item._id} item={item}></MenuItem>)
                }
                    {/* <Cover img={img} title={title} desserd={desserd}></Cover> */}
         </div>
         <Link to={`/order/${title}`}>
                
         <button className="btn btn-outline border-0 border-b-4">Order Now</button>

         </Link>        </div>
    );
};

export default MenuCategory;