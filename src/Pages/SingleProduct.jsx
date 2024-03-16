import React from "react";

const SingleProduct = () => {
  return (
      <div class="container mx-auto mt-10">
        <div class="flex flex-wrap items-center justify-center">
          <div class="w-full px-2 my-2 sm:w-1/2 lg:w-1/4">
            <div class="shadow-md overflow-hidden rounded-lg bg-white hover:shadow-lg">
              <a href="#" class="block">
                <img
                  src="https://i.imgur.com/uzYifbO.jpg"
                  class="w-full object-cover block mx-auto"
                />
              </a>

              <a
                href="#"
                class="block text-left text-base font-normal mt-2 ml-4"
              >
                Samsung Z Fold 4 1TB Rose Gold
              </a>

              <div class="ml-4 my-2 text-yellow-500">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fal fa-star"></i>
                <i class="fal fa-star"></i>
              </div>

              <h3 class="font-bold text-left text-3xl mb-1 ml-4">$1,799.00 </h3>

              <span class="mb-4">
                <span class="bg-red-600 text-white text-sm font-medium mr-1 ml-4 mb-4 px-2.5 py-0.5 p-1">
                  Save $100
                </span>
                <span class="text-gray-600">Was $1,899.00</span>
              </span>

              <div class="mx-auto px-4 my-4">
                <button class="w-full py-2 border-2 border-blue-600 bg-blue-600 text-white rounded mr-2 uppercase hover:text-blue-700 hover:bg-transparent">
                  <i class="fad fa-shopping-cart mx-1"></i>{" "}
                  <span class="mr-2">Add to cart</span>
                </button>
              </div>
            </div>
          </div>

          <div class="w-full px-2 my-2 sm:w-1/2 lg:w-1/4">
            <div class="shadow-md overflow-hidden rounded-lg bg-white hover:shadow-lg">
              <a href="#" class="block">
                <img
                  src="https://i.imgur.com/YnGoLpP.jpg"
                  class="w-full object-cover block mx-auto"
                />
              </a>

              <a
                href="#"
                class="block text-left text-base font-normal mt-2 ml-4"
              >
                Huawei Mate 50 Pro 512GB Orange
              </a>

              <div class="ml-4 my-2 text-yellow-500">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
              </div>

              <h3 class="font-bold text-left text-3xl mb-1 ml-4">$1,199.00 </h3>

              <span class="mb-4">
                <span class="bg-red-600 text-white text-sm font-medium mr-1 ml-4 mb-4 px-2.5 py-0.5 p-1">
                  Save $200
                </span>
                <span class="text-gray-600">Was $1,399.00</span>
              </span>

              <div class="mx-auto px-4 my-4">
                <button class="w-full py-2 border-2 border-blue-600 bg-blue-600 text-white rounded mr-2 uppercase hover:text-blue-700 hover:bg-transparent">
                  <i class="fad fa-shopping-cart mx-1"></i>{" "}
                  <span class="mr-2">Add to cart</span>
                </button>
              </div>
            </div>
          </div>

          <div class="w-full px-2 my-2 sm:w-1/2 lg:w-1/4">
            <div class="shadow-md overflow-hidden rounded-lg bg-white hover:shadow-lg">
              <a href="#" class="block">
                <img
                  src="https://i.imgur.com/qx7UMAx.jpg"
                  class="w-full object-cover block mx-auto"
                />
              </a>

              <a
                href="#"
                class="block text-left text-base font-normal mt-2 ml-4"
              >
                IPhone 14 pro Max 256GB Rose Gold
              </a>

              <div class="ml-4 my-2 text-yellow-500">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fal fa-star"></i>
              </div>

              <h3 class="font-bold text-left text-3xl mb-1 ml-4">$1,199.00 </h3>

              <span class="mb-4">
                <span class="bg-red-600 text-white text-sm font-medium mr-1 ml-4 mb-4 px-2.5 py-0.5 p-1">
                  Save $50
                </span>
                <span class="text-gray-600">Was $1,249.00</span>
              </span>

              <div class="mx-auto px-4 my-4">
                <button class="w-full py-2 border-2 border-blue-600 bg-blue-600 text-white rounded mr-2 uppercase hover:text-blue-700 hover:bg-transparent">
                  <i class="fad fa-shopping-cart mx-1"></i>{" "}
                  <span class="mr-2">Add to cart</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default SingleProduct;
