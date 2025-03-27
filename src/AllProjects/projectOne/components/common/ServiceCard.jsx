import React from 'react';

const ServiceCard = () => {
    return (
       <>
            <div className="flex items-start space-x-4 p-4 bg-gray-100 rounded-lg shadow-sm">
                <div className="text-3xl">{service.icon}</div>
                <div>
                    <h3 className="text-lg font-semibold">{service.title}</h3>
                    <p className="text-gray-600">{service.description}</p>
                    <a href="#" className="text-red-500 font-medium flex items-center mt-2">
                    View More <span className="ml-1">→</span>
                    </a>
                </div>
            </div>
       </>
    );
};

export default ServiceCard;