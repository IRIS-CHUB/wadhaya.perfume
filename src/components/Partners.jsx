import React from 'react';

const Partners = () => {
    const brands = [
        'Chanel',
        'Dior',
        'Gucci',
        'Versace',
        'Prada',
        'YSL',
    ];

    return (
        <div
            data-aos="zoom-out"
            className="py-8 mt-20 md:block bg-gray-200 dark:bg-primary"
        >
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 place-items-center opacity-70">
                    {brands.map((brand) => (
                        <div
                            key={brand}
                            className="text-lg md:text-xl font-serif font-bold text-gray-700 dark:text-white text-center"
                        >
                            {brand}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Partners;
