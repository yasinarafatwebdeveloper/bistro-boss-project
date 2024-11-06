// import React from 'react';

const MenuItem = ({item}) => {
    const{name,image,price,recipe}=item
    return (
        <div className="flex gap-5">
            <img style={{borderRadius:"0px 200px 200px 200px"}} className="w-[200px]" src={image} alt="" />
            <div>
              <p>{name}</p>
              <p>{recipe}</p>
            </div>
            <p className="text-yellow-600">{price}</p>
        </div>
    );
};

export default MenuItem;