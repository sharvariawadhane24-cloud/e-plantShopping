
import React, { useState } from 'react';
import './ProductList.css';
import CartItem from './CartItem';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './CartSlice';

function ProductList({ onHomeClick }) {
  const [showCart, setShowCart] = useState(false);
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.items);

  const plantsArray = [
    {
      category: 'Air Purifying Plants',
      plants: [
        { name: 'Snake Plant', image: 'https://cdn.pixabay.com/photo/2021/01/22/06/04/snake-plant-5939187_1280.jpg', description: 'Produces oxygen at night, improving air quality.', cost: 15 },
        { name: 'Spider Plant', image: 'https://cdn.pixabay.com/photo/2018/07/11/06/47/chlorophytum-3530413_1280.jpg', description: 'Filters formaldehyde and xylene from the air.', cost: 12 },
        { name: 'Peace Lily', image: 'https://cdn.pixabay.com/photo/2019/06/12/14/14/peace-lilies-4269365_1280.jpg', description: 'A beautiful plant that helps improve indoor air quality.', cost: 18 },
        { name: 'Boston Fern', image: 'https://cdn.pixabay.com/photo/2020/04/30/19/52/boston-fern-5114414_1280.jpg', description: 'Adds humidity to the air and brings lush greenery indoors.', cost: 20 },
        { name: 'Rubber Plant', image: 'https://cdn.pixabay.com/photo/2020/02/15/11/49/flower-4850729_1280.jpg', description: 'An attractive indoor plant with glossy leaves.', cost: 17 },
        { name: 'Aloe Vera', image: 'https://cdn.pixabay.com/photo/2018/04/02/07/42/leaf-3283175_1280.jpg', description: 'A low-maintenance succulent with soothing gel.', cost: 14 }
      ]
    },
    {
      category: 'Aromatic Fragrant Plants',
      plants: [
        { name: 'Lavender', image: 'https://images.unsplash.com/photo-1611909023032-2d6b3134ecba?q=80&w=1074&auto=format&fit=crop', description: 'Known for its calming fragrance and aromatic flowers.', cost: 20 },
        { name: 'Jasmine', image: 'https://images.unsplash.com/photo-1592729645009-b96d1e63d14b?q=80&w=1170&auto=format&fit=crop', description: 'Sweet fragrance and delicate flowers.', cost: 18 },
        { name: 'Rosemary', image: 'https://cdn.pixabay.com/photo/2019/10/11/07/12/rosemary-4541241_1280.jpg', description: 'An aromatic herb commonly used in cooking.', cost: 15 },
        { name: 'Mint', image: 'https://cdn.pixabay.com/photo/2016/01/07/18/16/mint-1126282_1280.jpg', description: 'A refreshing herb for teas, drinks, and cooking.', cost: 12 },
        { name: 'Lemon Balm', image: 'https://cdn.pixabay.com/photo/2019/09/16/07/41/balm-4480134_1280.jpg', description: 'A fragrant herb with a fresh citrus scent.', cost: 14 },
        { name: 'Hyacinth', image: 'https://cdn.pixabay.com/photo/2019/04/07/20/20/hyacinth-4110726_1280.jpg', description: 'Colorful flowering plant with a lovely fragrance.', cost: 22 }
      ]
    },
    {
      category: 'Insect Repellent Plants',
      plants: [
        { name: 'Oregano', image: 'https://cdn.pixabay.com/photo/2015/05/30/21/20/oregano-790702_1280.jpg', description: 'An aromatic herb that may help deter certain insects.', cost: 10 },
        { name: 'Marigold', image: 'https://cdn.pixabay.com/photo/2022/02/22/05/45/marigold-7028063_1280.jpg', description: 'Bright flowers that add color to gardens.', cost: 8 },
        { name: 'Geraniums', image: 'https://cdn.pixabay.com/photo/2012/04/26/21/51/flowerpot-43270_1280.jpg', description: 'Decorative plants with pleasantly scented foliage.', cost: 20 },
        { name: 'Basil', image: 'https://cdn.pixabay.com/photo/2016/07/24/20/48/tulsi-1539181_1280.jpg', description: 'A useful culinary herb with an aromatic scent.', cost: 9 },
        { name: 'Lavender', image: 'https://images.unsplash.com/photo-1611909023032-2d6b3134ecba?q=80&w=1074&auto=format&fit=crop', description: 'Fragrant flowers that attract pollinators.', cost: 20 },
        { name: 'Catnip', image: 'https://cdn.pixabay.com/photo/2015/07/02/21/55/cat-829681_1280.jpg', description: 'An aromatic herb especially attractive to cats.', cost: 13 }
      ]
    },
    {
      category: 'Medicinal Plants',
      plants: [
        { name: 'Aloe Vera', image: 'https://cdn.pixabay.com/photo/2018/04/02/07/42/leaf-3283175_1280.jpg', description: 'A succulent known for its soothing gel.', cost: 14 },
        { name: 'Echinacea', image: 'https://cdn.pixabay.com/photo/2014/12/05/03/53/echinacea-557477_1280.jpg', description: 'A flowering plant commonly grown in gardens.', cost: 16 },
        { name: 'Peppermint', image: 'https://cdn.pixabay.com/photo/2017/07/12/12/23/peppermint-2496773_1280.jpg', description: 'A fragrant herb often used in teas.', cost: 13 },
        { name: 'Lemon Balm', image: 'https://cdn.pixabay.com/photo/2019/09/16/07/41/balm-4480134_1280.jpg', description: 'An aromatic herb with a lemon-like scent.', cost: 14 },
        { name: 'Chamomile', image: 'https://cdn.pixabay.com/photo/2016/08/19/19/48/flowers-1606041_1280.jpg', description: 'A flowering herb often used for herbal tea.', cost: 15 },
        { name: 'Calendula', image: 'https://cdn.pixabay.com/photo/2019/07/15/18/28/flowers-4340127_1280.jpg', description: 'A bright flowering plant suitable for gardens.', cost: 12 }
      ]
    },
    {
      category: 'Low Maintenance Plants',
      plants: [
        { name: 'ZZ Plant', image: 'https://images.unsplash.com/photo-1632207691143-643e2a9a9361?q=80&w=464&auto=format&fit=crop', description: 'Thrives in low light and needs infrequent watering.', cost: 25 },
        { name: 'Pothos', image: 'https://cdn.pixabay.com/photo/2018/11/15/10/32/plants-3816945_1280.jpg', description: 'A versatile trailing plant that is easy to care for.', cost: 10 },
        { name: 'Snake Plant', image: 'https://cdn.pixabay.com/photo/2021/01/22/06/04/snake-plant-5939187_1280.jpg', description: 'A resilient plant that requires little maintenance.', cost: 15 },
        { name: 'Cast Iron Plant', image: 'https://cdn.pixabay.com/photo/2017/02/16/18/04/cast-iron-plant-2072008_1280.jpg', description: 'A hardy indoor plant tolerant of low light.', cost: 20 },
        { name: 'Succulents', image: 'https://cdn.pixabay.com/photo/2016/11/21/16/05/cacti-1846147_1280.jpg', description: 'Decorative plants that need little watering.', cost: 18 },
        { name: 'Aglaonema', image: 'https://cdn.pixabay.com/photo/2014/10/10/04/27/aglaonema-482915_1280.jpg', description: 'A colorful foliage plant suitable for indoor spaces.', cost: 22 }
      ]
    }
  ];

  const handleHomeClick = (e) => {
    e.preventDefault();
    if (onHomeClick) {
      onHomeClick();
    }
  };

  const handleCartClick = (e) => {
    e.preventDefault();
    setShowCart(true);
  };

  const handlePlantsClick = (e) => {
    e.preventDefault();
    setShowCart(false);
  };

  const handleContinueShopping = (e) => {
    if (e) e.preventDefault();
    setShowCart(false);
  };

  const handleAddToCart = (plant) => {
    dispatch(
      addItem({
        name: plant.name,
        image: plant.image,
        description: plant.description,
        cost: plant.cost,
        category: plant.category
      })
    );
  };

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <div className="nursery-shop">
      <nav className="navbar">
        <div className="tag">
          <a href="/" className="brand" onClick={handleHomeClick}>
            <img
              src="https://cdn.pixabay.com/photo/2020/08/05/13/12/eco-5465432_1280.png"
              alt="Paradise Nursery logo"
            />
            <div>
              <h3>Paradise Nursery</h3>
              <i>Where Green Meets Serenity</i>
            </div>
          </a>
        </div>

        <div className="nav-links">
          <a href="#plants" onClick={handlePlantsClick}>
            Plants
          </a>
          <a href="#cart" onClick={handleCartClick} className="cart-link">
            🛒 Cart <span className="cart-count">{totalItems}</span>
          </a>
        </div>
      </nav>

      {showCart ? (
        <CartItem onContinueShopping={handleContinueShopping} />
      ) : (
        <main id="plants" className="product-page">
          <header className="product-header">
            <h1>Our Plants</h1>
            <p>Bring nature home with our beautiful collection of plants.</p>
          </header>

          {plantsArray.map((categoryGroup) => (
            <section
              className="plant-category"
              key={categoryGroup.category}
            >
              <h2>{categoryGroup.category}</h2>

              <div className="product-grid">
                {categoryGroup.plants.map((plant, index) => {
                  const cartItem = cartItems.find(
                    (item) => item.name === plant.name
                  );

                  return (
                    <article
                      className="product-card"
                      key={`${categoryGroup.category}-${plant.name}-${index}`}
                    >
                      <img
                        className="product-image"
                        src={plant.image}
                        alt={plant.name}
                        loading="lazy"
                      />

                      <div className="product-details">
                        <h3>{plant.name}</h3>
                        <p className="plant-description">
                          {plant.description}
                        </p>
                        <p className="plant-price">
                          ${plant.cost.toFixed(2)}
                        </p>

                        <button
                          type="button"
                          className="add-to-cart-button"
                          onClick={() => handleAddToCart(plant)}
                        >
                          {cartItem ? 'Add Another' : 'Add to Cart'}
                        </button>
                      </div>
                    </article>
                  );
                })}
              </div>
            </section>
          ))}
        </main>
      )}
    </div>
  );
}

export default ProductList;
