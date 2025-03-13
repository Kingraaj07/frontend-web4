document.addEventListener('DOMContentLoaded', function () {
  // Menu Data Structure
  const menuData = {
    vegetarian: [
      {
        name: 'Butter Paneer',
        description: 'Rich and creamy paneer cooked in a luscious tomato-based gravy with a hint of butter and aromatic spices.',
        price: '₹299',
        image: '../assets/menu/featured-dish/butter-paneer.webp',
        tags: ['bestseller', 'veg'],
        rating: 4.8
      },
      {
        name: 'French Fries',
        description: 'Golden, crispy, and perfectly seasoned potato fries, served hot and fresh for the ultimate snack experience.',
        price: '₹149',
        image: '../assets/menu/featured-dish/french-fries.webp',
        tags: ['bestseller', 'veg'],
        rating: 4.6
      },
      {
        name: 'Malai Kofta',
        description: 'Soft paneer and potato dumplings immersed in a velvety cashew-based gravy, offering a perfect balance of richness and flavor.',
        price: '₹329',
        image: '../assets/menu/featured-dish/malai-kofta.webp',
        tags: ['bestseller', 'veg'],
        rating: 4.7
      },
      {
        name: 'Matar Paneer',
        description: 'A homely delight of soft paneer cubes and green peas in a mildly spiced, flavorful tomato gravy.',
        price: '₹289',
        image: '../assets/menu/featured-dish/matar-paneer.webp',
        tags: ['bestseller', 'veg'],
        rating: 4.5
      },
      {
        name: 'Palak Paneer',
        description: 'Nutritious spinach puree blended with soft paneer cubes, infused with fragrant Indian spices for a healthy and delicious meal.',
        price: '₹299',
        image: '../assets/menu/featured-dish/palak-paneer.webp',
        tags: ['bestseller', 'veg'],
        rating: 4.6
      },
      {
        name: 'Paneer Lababdar',
        description: 'A rich and aromatic paneer curry, slow-cooked with tomatoes, cream, and a medley of spices for a royal experience.',
        price: '₹349',
        image: '../assets/menu/featured-dish/paneer-lababdar.webp',
        tags: ['bestseller', 'veg'],
        rating: 4.8
      },
      {
        name: 'Paneer Shaak',
        description: 'A flavorful Gujarati-style paneer curry, cooked with ground spices and a hint of sweetness for a unique taste.',
        price: '₹289',
        image: '../assets/menu/featured-dish/paneer-shaak.webp',
        tags: ['bestseller', 'veg'],
        rating: 4.6
      },
      {
        name: 'Veg Manchurian',
        description: 'Crispy vegetable balls tossed in a zesty soy-based sauce, offering a perfect Indo-Chinese fusion delight.',
        price: '₹269',
        image: '../assets/menu/featured-dish/veg-manchurian.webp',
        tags: ['bestseller', 'veg'],
        rating: 4.7
      }
    ],
    sweatmeats: [
      {
        name: 'Gulaab Jaamun',
        description: 'Soft, spongy dumplings soaked in fragrant rose-infused sugar syrup, offering a melt-in-the-mouth sweetness.',
        price: '₹99',
        image: '../assets/menu/sweets/gulaab-jamun.webp',
        tags: ['classic', 'sweet'],
        rating: 4.9
      },
      {
        name: 'Chhena',
        description: 'Delicate and fresh cottage cheese chunks, lightly sweetened for a soft, melt-in-the-mouth experience.',
        price: '₹129',
        image: '../assets/menu/sweets/chhena-two.jpg',
        tags: ['traditional', 'sweet'],
        rating: 4.6
      },
      {
        name: 'Nariyal Laddu',
        description: 'Coconut bliss in every bite! These laddus are packed with the natural sweetness of coconut and a hint of cardamom.',
        price: '₹149',
        image: '../assets/menu/sweets/nariyal-laddu.webp',
        tags: ['festive', 'sweet'],
        rating: 4.7
      },
      {
        name: 'Patisa Burfi',
        description: 'A flaky and crispy burfi made with gram flour and ghee, offering a delightful crunch in every bite.',
        price: '₹179',
        image: '../assets/menu/sweets/patisa-burfi.webp',
        tags: ['bestseller', 'sweet'],
        rating: 4.8
      },
      {
        name: 'Peda',
        description: 'Classic milk-based sweets with a creamy, velvety texture and a delicate hint of cardamom.',
        price: '₹139',
        image: '../assets/menu/sweets/peda.webp',
        tags: ['classic', 'sweet'],
        rating: 4.8
      },
      {
        name: 'Raajbhog',
        description: 'A royal treat! Soft paneer dumplings soaked in saffron-infused syrup, bursting with delicate flavors.',
        price: '₹159',
        image: '../assets/menu/sweets/rajbhog.jpg',
        tags: ['premium', 'sweet'],
        rating: 4.7
      },
      {
        name: 'Rasmalai',
        description: 'A heavenly dessert featuring soft, spongy paneer discs soaked in sweet, saffron-infused milk.',
        price: '₹199',
        image: '../assets/menu/sweets/rasmalai.jpg',
        tags: ['bestseller', 'sweet'],
        rating: 4.9
      },
      {
        name: 'Chhena Payas',
        description: 'A creamy, cardamom-infused Bengali dessert made with fresh chhena and milk, offering a rich and satisfying taste.',
        price: '₹179',
        image: '../assets/menu/sweets/chhena-payas.webp',
        tags: ['authentic', 'sweet'],
        rating: 4.7
      },
      {
        name: 'Boondi Laddu',
        description: 'Soft, golden laddus made from tiny, deep-fried gram flour pearls, bound together with sugar syrup for a classic taste.',
        price: '₹149',
        image: '../assets/menu/sweets/bada-boondi-laddu.webp',
        tags: ['traditional', 'sweet'],
        rating: 4.8
      },
      {
        name: 'Besan Gajak',
        description: 'A winter special crunchy sweet made with gram flour, jaggery, and ghee, packed with nutty goodness.',
        price: '₹159',
        image: '../assets/menu/sweets/besan-gajak.webp',
        tags: ['winter special', 'sweet'],
        rating: 4.6
      },
      {
        name: 'Besan Laddu',
        description: 'Rich and nutty gram flour laddus, slow-roasted to perfection and bound together with ghee and sugar.',
        price: '₹149',
        image: '../assets/menu/sweets/besan-laddu.webp',
        tags: ['traditional', 'sweet'],
        rating: 4.7
      },
      {
        name: 'Cream Chop',
        description: 'A luscious cream-filled pastry, lightly coated with sugar syrup and garnished with dry fruits for an indulgent experience.',
        price: '₹169',
        image: '../assets/menu/sweets/cream-chop.webp',
        tags: ['premium', 'sweet'],
        rating: 4.7
      },
      {
        name: 'Dodha Burfi',
        description: 'A rich and dense milk-based burfi with caramelized flavors and a slight chewiness, perfect for dessert lovers.',
        price: '₹189',
        image: '../assets/menu/sweets/dodha-burfi.webp',
        tags: ['bestseller', 'sweet'],
        rating: 4.8
      },
      {
        name: 'Gond Laddu',
        description: 'A healthy and energy-packed laddu made with edible gum, nuts, and jaggery, perfect for winter nourishment.',
        price: '₹179',
        image: '../assets/menu/sweets/gond-ki-laddo.webp',
        tags: ['healthy', 'sweet'],
        rating: 4.7
      },
      {
        name: 'Kaju Katli',
        description: 'A luxurious cashew fudge that’s smooth, rich, and melts in your mouth with every bite.',
        price: '₹299',
        image: '../assets/menu/sweets/kaju-katli.webp',
        tags: ['premium', 'sweet'],
        rating: 4.9
      },
      {
        name: 'Kalakand',
        description: 'A soft and moist milk-based sweet, infused with cardamom, delivering a delightful, grainy texture.',
        price: '₹199',
        image: '../assets/menu/sweets/kalakand.webp',
        tags: ['classic', 'sweet'],
        rating: 4.8
      },
      {
        name: 'Khajoor Burfi',
        description: 'A naturally sweet and healthy dessert made with dates, nuts, and a hint of ghee for a guilt-free indulgence.',
        price: '₹189',
        image: '../assets/menu/sweets/khajoor-burfi.webp',
        tags: ['healthy', 'sweet'],
        rating: 4.6
      },
      {
        name: 'Launglatti',
        description: 'A unique deep-fried sweet with a hint of clove flavor, coated in sugar syrup for an irresistible crunch.',
        price: '₹169',
        image: '../assets/menu/sweets/launglatti.webp',
        tags: ['regional', 'sweet'],
        rating: 4.5
      },
      {
        name: 'Milk Cake',
        description: 'A slow-cooked milk-based dessert with a caramelized outer layer and a soft, rich center.',
        price: '₹199',
        image: '../assets/menu/sweets/milk-cake.webp',
        tags: ['classic', 'sweet'],
        rating: 4.8
      },
      {
        name: 'Kaju Gajak',
        description: 'A winter special crunchy delight made from cashews, jaggery, and sesame seeds, offering a nutty sweetness.',
        price: '₹219',
        image: '../assets/menu/sweets/kaju-gajak.avif',
        tags: ['winter special', 'sweet'],
        rating: 4.7
      }
    ],
    cakes: [
      {
        name: 'Almond Cake',
        description: 'A moist and nutty delight, packed with the richness of almonds and a subtle hint of vanilla.',
        price: '₹499',
        image: '../assets/menu/cakes/almond-cake.webp',
        tags: ['nutty', 'dessert'],
        rating: 4.7
      },
      {
        name: 'Blueberry Muffins',
        description: 'Soft, fluffy muffins bursting with the goodness of real blueberries, perfect for a sweet indulgence.',
        price: '₹249',
        image: '../assets/menu/cakes/blueberry-muffins.webp',
        tags: ['fruity', 'dessert'],
        rating: 4.6
      },
      {
        name: 'ButterScotch Cake',
        description: 'A rich and creamy cake infused with caramelized butterscotch flavors, topped with crunchy praline.',
        price: '₹599',
        image: '../assets/menu/cakes/butterscotch-cake.webp',
        tags: ['bestseller', 'dessert'],
        rating: 4.8
      },
      {
        name: 'Chocolate Cake',
        description: 'A decadent, moist chocolate cake with rich cocoa flavors and a silky smooth ganache topping.',
        price: '₹699',
        image: '../assets/menu/cakes/chocolate-cake.webp',
        tags: ['bestseller', 'chocolate'],
        rating: 4.9
      },
      {
        name: 'Choco Love Cake',
        description: 'A chocolate lover’s dream! Soft layers of chocolate sponge filled with rich chocolate mousse and topped with choco shavings.',
        price: '₹699',
        image: '../assets/menu/cakes/choco-love-cake.webp',
        tags: ['premium', 'dessert'],
        rating: 4.8
      },
      {
        name: 'Choco Truffle Cake',
        description: 'An indulgent chocolate cake layered with rich truffle cream and topped with glossy chocolate glaze.',
        price: '₹749',
        image: '../assets/menu/cakes/choco-truffle-cake.webp',
        tags: ['bestseller', 'chocolate'],
        rating: 4.9
      },
      {
        name: 'Choco Vanilla Cake',
        description: 'A perfect balance of chocolate and vanilla, layered with creamy frosting for a delightful taste.',
        price: '₹649',
        image: '../assets/menu/cakes/choco-vanilla-cake.webp',
        tags: ['classic', 'dessert'],
        rating: 4.7
      },
      {
        name: 'Jungle Paradise Theme Cake',
        description: 'A fun-filled jungle-themed cake, perfect for kids’ parties with vibrant designs and delicious flavors.',
        price: '₹1299',
        image: '../assets/menu/cakes/jungle-paradise-theme-cake.webp',
        tags: ['kids special', 'dessert'],
        rating: 4.7
      },
      {
        name: 'Pineapple Cake',
        description: 'A light and fluffy cake infused with tropical pineapple flavors, topped with whipped cream and cherries.',
        price: '₹549',
        image: '../assets/menu/cakes/pineapple-cake.webp',
        tags: ['classic', 'fruity'],
        rating: 4.6
      },
      {
        name: 'Plum Cake',
        description: 'A rich and moist cake packed with dried fruits, nuts, and warm spices, perfect for festive celebrations.',
        price: '₹799',
        image: '../assets/menu/cakes/plum-cake.webp',
        tags: ['festive', 'dessert'],
        rating: 4.8
      },
      {
        name: 'Rasmalai Pista Cake',
        description: 'A fusion dessert combining the flavors of soft rasmalai with pistachios and fluffy cake layers.',
        price: '₹899',
        image: '../assets/menu/cakes/rasmalai-pista-cake.webp',
        tags: ['fusion', 'dessert'],
        rating: 4.9
      },
      {
        name: 'Red Velvet Cake',
        description: 'A luxurious, deep red cake with a soft crumb, layered with silky cream cheese frosting for a perfect balance of sweet and tangy.',
        price: '₹849',
        image: '../assets/menu/cakes/red-velvet-cake.webp',
        tags: ['classic', 'premium'],
        rating: 4.8
      },
      {
        name: 'Chocolate Love Cake',
        description: 'A chocolate overload cake with rich choco layers, creamy filling, and a dreamy choco glaze.',
        price: '₹749',
        image: '../assets/menu/cakes/chocolate-love-cake.webp',
        tags: ['chocolate', 'dessert'],
        rating: 4.8
      },
      {
        name: 'Frozen Poster Cake',
        description: 'A themed cake inspired by Frozen, designed with edible prints and delicious cake layers.',
        price: '₹1299',
        image: '../assets/menu/cakes/frozen-poster-cake.webp',
        tags: ['kids special', 'dessert'],
        rating: 4.7
      },
      {
        name: 'Vanilla Fruit Cake',
        description: 'A light and fluffy vanilla cake loaded with fresh fruits and topped with smooth whipped cream.',
        price: '₹599',
        image: '../assets/menu/cakes/vanilla-fruit-cake.webp',
        tags: ['fruity', 'dessert'],
        rating: 4.7
      },
      {
        name: 'Strawberry Chocolate Cup Cake',
        description: 'A delightful cupcake combining the flavors of fresh strawberries and rich chocolate, topped with creamy frosting.',
        price: '₹249',
        image: '../assets/menu/cakes/strawberry-chocolate-cup-cake.webp',
        tags: ['cupcake', 'dessert'],
        rating: 4.6
      },
      {
        name: 'Tasty Chocolate Truffle',
        description: 'A dense and fudgy chocolate cake packed with layers of silky truffle ganache, perfect for chocoholics.',
        price: '₹749',
        image: '../assets/menu/cakes/tasty-chocolate-truffle.webp',
        tags: ['bestseller', 'chocolate'],
        rating: 4.9
      }
    ],
    cookies: [
      {
        name: 'Chocolate Cookies',
        description: 'Crispy on the edges, chewy in the center, these chocolate-loaded cookies are a treat for cocoa lovers!',
        price: '₹249',
        image: '../assets/menu/cakes/chocolate-cookies.webp',
        tags: ['chocolate', 'snack'],
        rating: 4.7
      },
      {
        name: 'Chocolate Muffin',
        description: 'A rich and moist chocolate muffin packed with deep cocoa flavors, perfect for an indulgent snack.',
        price: '₹199',
        image: '../assets/menu/cakes/chocolate-muffin.webp',
        tags: ['chocolate', 'dessert'],
        rating: 4.6
      },
      {
        name: 'Choco Brownie',
        description: 'A fudgy and gooey chocolate brownie with a crackly top, perfect with a scoop of ice cream or on its own.',
        price: '₹299',
        image: '../assets/menu/cakes/choco-millionaire-brownie.webp',
        tags: ['bestseller', 'chocolate'],
        rating: 4.8
      },
      {
        name: 'Peanut Butter Cookies',
        description: 'Crunchy, nutty, and packed with peanut butter goodness—an irresistible treat for nut lovers.',
        price: '₹269',
        image: '../assets/menu/cakes/peanut-butter-cookies.webp',
        tags: ['nutty', 'snack'],
        rating: 4.7
      },
      {
        name: 'Thumbprint Cookies',
        description: 'Soft and buttery cookies filled with a dollop of fruit jam in the center, offering a perfect balance of sweetness and tartness.',
        price: '₹229',
        image: '../assets/menu/cakes/thumbprint-cookies.webp',
        tags: ['fruity', 'snack'],
        rating: 4.6
      },
      {
        name: 'Vanilla Muffin',
        description: 'A light and fluffy muffin with a classic vanilla flavor, perfect for a tea-time treat.',
        price: '₹199',
        image: '../assets/menu/cakes/vanilla-muffin.webp',
        tags: ['classic', 'dessert'],
        rating: 4.6
      }
    ]
  };

  // Initialize Menu
  function initializeMenu() {
    loadMenuItems();
    setupFilters();
  }

  // Load Menu Items
  function loadMenuItems(category = 'all', searchTerm = '') {
    const menuGrid = document.querySelector('.menu-grid');
    if (!menuGrid) return;

    menuGrid.innerHTML = '';
    let items = [];

    // Collect items based on category
    if (category === 'all') {
      Object.values(menuData).forEach(categoryItems => {
        items = [...items, ...categoryItems];
      });
    } else {
      items = menuData[category] || [];
    }


    // Render items
    items.forEach(item => {
      const menuItem = createMenuItem(item);
      menuGrid.appendChild(menuItem);
    });

    // Animate items
    animateMenuItems();
  }

  // Create Menu Item Element
  function createMenuItem(item) {
    const div = document.createElement('div');
    div.className = 'menu-grid';
    div.innerHTML = `
     <div class="menu-item">
        <img src="${item.image}" alt="${item.name}">
        <div class="menu-content">
          <h3>${item.name}</h3>
          <p class="price">${item.price}</p>
          <p class="description">${item.description}</p>
        </div>
      </div>
    `;
    return div;
  }

  // Setup Category Filters
  function setupFilters() {
    const categoryButtons = document.querySelectorAll('.category-btn');
    categoryButtons.forEach(button => {
      button.addEventListener('click', () => {
        categoryButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        const category = button.dataset.category;
        const searchTerm = document.querySelector('#menuSearch')?.value || '';
        loadMenuItems(category, searchTerm);
      });
    });
  }

  // Animate Menu Items
  function animateMenuItems() {
    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach((item, index) => {
      setTimeout(() => {
        item.classList.add('fade-in');
      }, index * 100);
    });
  }

  // Initialize Menu
  initializeMenu();

});