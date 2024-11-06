// import React from 'react';

const SectionTitle = ({subheading,heading}) => {
    return (
        <div className=" mx-auto text-center w-4/12 space-x-2">
            <p className="text-orange-300 ">{subheading}</p>
            <p className="text-3xl  border-y-4 mx-2">{heading}</p>
        </div>
    );
};

export default SectionTitle;