import React, { useState, useEffect, useRef } from 'react';
import { useTheme } from '../theme';
import { useCart } from '../context/CartContext';
import './Menu.css';

const menuData = {
  appetizers: [
    { name: 'Jollof Rice', description: 'Spiced tomato-based rice cooked in one pot with onions, peppers, and served with chicken and beef.', price: 2500, image: 'https://images.unsplash.com/photo-1665332195309-9d75071138f0?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { name: 'Suya', description: 'Spicy grilled beef skewers.', price: 1500, image: 'https://cheflolaskitchen.com/wp-content/uploads/2023/01/nigerian-suya-32.jpg.webp' },
    { name: 'Moi Moi', description: 'Steamed bean pudding made with ground beans, peppers, and seasonings.', price: 2000, image: 'https://i.pinimg.com/originals/03/4f/10/034f10a7eb22dbf1aba111f1934e52a4.jpg' },
    { name: 'Akara', description: 'Fried bean cakes made from blended black-eyed peas, onions, and pepper.', price: 500, image: 'https://th.bing.com/th/id/R.f1d98f1a4142588617147246a76bdf1c?rik=OtnBFZEx2m36GA&riu=http%3a%2f%2fsisijemimah.com%2fwp-content%2fuploads%2f2015%2f11%2fAkara.jpg&ehk=pUwqfss%2bBkegbiq%2bT%2b8X1QXNX6q5R8zvrKvrBwnapuM%3d&risl=&pid=ImgRaw&r=0' },
    { name: 'Chin Chin', description: 'Crunchy deep-fried dough bites, mildly sweet and nutmeg-flavored.', price: 1000, image: 'https://tse2.mm.bing.net/th/id/OIP.Is3HFkvokEQl5rQwh2F0bgHaE9?rs=1&pid=ImgDetMain&o=7&rm=3' },
    { name: 'Mini Meat Pies', description: 'Small pastry pockets filled with minced meat, potato, and vegetables.', price: 1200, image: 'https://i.pinimg.com/originals/34/fe/44/34fe442a54c090ffb04a1637c86cf0a8.jpg' },
    { name: 'Boli & Groundnut', description: 'Roasted plantain served with peanuts.', price: 1100, image: 'https://www.willflyforfood.net/wp-content/uploads/2021/06/boli-groundnut.jpg.webp' },
    { name: 'Peppered Snail', description: 'Tender snails sautéed in a spicy pepper sauce, bursting with flavours.', price: 800, image: 'https://wfg22p.s3.amazonaws.com/media/dishes/pepper_snail_6000-reg.jpg'},
    { name: 'Puff', description: 'Soft, deep-fried sweet dough balls.', price: 450, image: 'https://usercontent.one/wp/www.tinuolasblog.com/wp-content/uploads/2018/11/chefteekay-1555523874900-500x500.jpg' },
  ],
  mainCourses: [
    { name: 'White Rice & Stew', description: 'Plain boiled rice served with spicy tomato-pepper stew.', price: 1800, image: 'https://rookzkitchen.com/wp-content/uploads/2023/03/Rice-Stew-Dodo-800.jpg' },
    { name: 'Pounded Yam & Egusi Soup', description: 'Smooth, stretchy yam dough served with thick, nutty soup made from melon seeds.', price: 1700, image: 'https://desirerecipes.com/wp-content/uploads/2022/02/image-24.jpg' },
    { name: 'Nkwobi', description: 'A spicy cow foot delicacy served in thick palm oil sauce.', price: 2000, image: 'https://i.pinimg.com/originals/11/91/06/1191064a0bf96745d49d503bd9b9ee0c.jpg' },
    { name: 'Yam Porridge (Asaro)', description: 'Mashed yam cooked with pepper, oil, onions, and fish or meat.', price: 2500, image: 'https://nigerianmeal.com/wp-content/uploads/2018/11/3-Yam-Porridge-Recipe-1024x683.jpg' },
    { name: 'Amala & Ewedu', description: 'A dark yam flour dough served with jute leaf soup (ewedu)', price: 1800, image: 'https://www.naijanews.com/wp-content/uploads/2024/03/Amala-e1709284227585.jpg' },
    { name: 'Semo & Afang Soup', description: 'Smooth wheat swallow served with rich Afang Soup made from leafy vegetables, meats, and seafood.', price: 2000, image: 'https://i.pinimg.com/originals/02/19/30/021930f4f4db44be03462b646f7cfefa.jpg' },
    { name: 'Tuwo Shinkafa & Miyan Kuka', description: 'Northern Nigerian soft rice mash served with baobab leaf soup thickened with locust beans.', price: 1400, image: 'https://www.royacshop.com/wp-content/uploads/2020/03/How-to-Prepare-Tuwo-Shinkafa-and-Miyan-Taushe.jpg' },
    { name: 'Ofada Rice & Ayamase Sauce', description: 'Indigenous rice with a distinct aroma, paired with pepper sauce and assorted meats.', price: 1700, image: 'https://cdn.yen.com.gh/images/720/3o3bpd7h66l9dc9k7.webp?v=1' },
    { name: 'Banga Soup & Starch', description: 'A palm fruit soup from the Niger Delta, served with starch, catfish, and meat.', price: 1300, image: 'https://th.bing.com/th/id/R.a8290d561e72592966d1370f9da8a6b4?rik=DZFWDE08rUh%2fqw&riu=http%3a%2f%2fmyactivekitchen.com%2fwp-content%2fuploads%2f2015%2f03%2fbanga-soup1aaa.jpg&ehk=aWAMrGo0EE9%2bss%2b4cdjKPC8rqIRPtfFf2A5bLIuknSE%3d&risl=&pid=ImgRaw&r=0' },
  ],
  desserts: [
    { name: 'Ice Cream', description: 'Silky, chilled treat in flavors like vanilla, chocolate, strawberry, and coconut.', price: 1500, image: 'https://www.redcowdairy.in/icecream/static/media/ice-cream.f6b436bc5454f318db7d.png' },
    { name: 'Doughnut', description: 'Soft, sweet fried pastry rings, glazed and filled with jam, chocolate, and cream.', price: 2000, image: 'https://static01.nyt.com/images/2014/12/14/magazine/14eat1/14mag-14eat.t_CA0-master1050.jpg' },
    { name: 'Cupcake', description: 'Mini sponge cake topped with fluffy and decorative frosting.', price: 2800, image: 'https://th.bing.com/th/id/R.388a295524209dce7d4bcc4d44e1ed97?rik=zR1t0wGUX%2bn6bg&riu=http%3a%2f%2fwww.missionmission.org%2fwp-content%2fuploads%2f2014%2f02%2fcupcake.jpg&ehk=k%2f0X6uOfQLTtf7S4tpZ6fXol6aTahwOpXXn2eCHnlyg%3d&risl=&pid=ImgRaw&r=0' },
    { name: 'Fruit Salad', description: 'A mix of fresh seasonal fruits.', price: 5000, image: 'https://www.meatloafandmelodrama.com/wp-content/uploads/2023/04/tropical-fruit-salad-square.jpeg' },
    { name: 'Cheesecake', description: 'Creamy dessert topped with strawberry glaze', price: 4500, image: 'https://stateofdinner.com/wp-content/uploads/2023/03/philadelphia-cheesecake-featured.jpg' },
    { name: 'Coconut Candle', description: 'Sweet, crunchy chunks of caramelized coconut cubes, golden and aromatic.', price: 4.49, image: 'https://www.poonamtaprial.com/wp-content/uploads/2018/03/coco.jpg' },
    { name: 'Apple Pie', description: 'Traditional apple pie with a flaky crust.', price: 3500, image: 'https://kristineskitchenblog.com/wp-content/uploads/2021/04/apple-pie-1200-square-592-2.jpg' },
    { name: 'Banana Split', description: 'Banana with scoops of ice cream, chocolate, and whipped cream.', price: 2000, image: 'https://th.bing.com/th/id/R.67e05c86096a1d2b0e802fe9c1856a81?rik=64B%2fltM7pfBWfg&riu=http%3a%2f%2fwww.thekitchenwhisperer.net%2fwp-content%2fuploads%2f2013%2f07%2fclassic-banana-split1.jpg&ehk=r7uzkqZdftncKn8EmA2p1AIL2RJDNVe6vBlxTj79JoM%3d&risl=&pid=ImgRaw&r=0' },
    { name: 'French Fries', description: 'Crispy, golden potato strips deep-fried to perfection.', price: 4700, image: 'https://goldenfingers.us/wp-content/uploads/2020/03/french_fry.jpg' },
  ],
  soups: [
    { name: 'Edikang Ikong', description: 'Rich vegetable soup made from fluted pumpkin (ugu) and waterleaf, loaded with assorted meats and pomo.', price: 4500, image: 'https://purplespicemk.com/wp-content/uploads/2021/07/Edikan-ikong-soup.jpg' },
    { name: 'Okra Soup', description: 'Savory okra soup with beef, fish, and traditional spices.', price: 3800, image: 'https://lowcarbafrica.com/wp-content/uploads/2023/07/Okro-Soup-IG-1-640x853.jpg' },
    { name: 'Abula', description: 'Trio flavoured soup combining Gbegiri (bean soup), Ewedu (jute soup) and Obe Ata (spicy red stew), served with Amala and assorted meats.', price: 4000, image: 'https://miro.medium.com/v2/resize:fit:716/1*eKZ6zBKL8hKA9evKNJhoHg.jpeg' },
    { name: 'Oha Soup', description: 'Traditional soup made with oha leaves, cocoyam, and assorted meats.', price: 3500, image: 'https://dailyfamily.ng/wp-content/uploads/2017/07/oha-soup-scaled.jpg' },
    { name: 'Ogbono Soup', description: 'Slimy, flavorful soup made from wild mango seeds, paired with meats and stockfish.', price: 1399, image: 'https://i.pinimg.com/originals/53/d9/0b/53d90b2eed1264d7139460e5e081a6c5.jpg' },
    { name: 'Efo Riro (Elemi Meje)', description: 'Spicy Yoruba-style spinach stew with palm oil, meats,pomo, and peppers.', price: 1199, image: 'https://www.royacshop.com/wp-content/uploads/2018/09/EFO-RIRO.jpg' },
    { name: 'Miyan Kuka', description: 'Northern soup made from baobab leaves and assorted meats.', price: 1299, image: 'https://tse1.mm.bing.net/th/id/OIP.dtToGedb-TCXjHKVoMRp_QHaFs?rs=1&pid=ImgDetMain&o=7&rm=3' },
    { name: 'Itsekiri Black Soup', description: 'Herbal soup made from blended bitter leaf, scent leaf, and uziza.', price: 1449, image: 'https://th.bing.com/th/id/R.96394346927fd7a65c84bfc7f2ba0b25?rik=Nm4GnIdCvzULcw&riu=http%3a%2f%2fallnigerianfoods.com%2fwp-content%2fuploads%2f2015%2f04%2fblack-soup.jpg&ehk=jxRoeC4fP5%2foK8MIo%2f8OlVV%2fj3Ejd2LFEO7xVdfAQpU%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1' },
    { name: 'Atama Soup', description: 'Traditional soup made with atama leaves and assorted meats.', price: 1349, image: 'https://www.royacshop.com/wp-content/uploads/2020/04/How-to-Make-Abak-Atama-Soup-Preparation.png' },
  ],
};

const useScrollAnimation = (itemCount: number) => {
  const refs = useRef<(HTMLDivElement | null)[]>([]);
  const [visible, setVisible] = useState<boolean[]>(Array(itemCount).fill(false));

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const idx = Number((entry.target as HTMLElement).getAttribute('data-index'));
            setVisible(prev => {
              const updated = [...prev];
              updated[idx] = true;
              return updated;
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );
    refs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });
    return () => observer.disconnect();
  }, [itemCount]);

  return { refs, visible };
};

const Menu = () => {
  const { colors } = useTheme();
  const { addToCart } = useCart();
  const [category, setCategory] = useState('all');

  const styles = {
    main: {
      fontFamily: 'Arial, sans-serif',
    },
    header: {
      textAlign: 'center' as 'center',
      marginBottom: '2rem',
    },
    title: {
      color: colors.primary,
    },
    subtitle: {
      color: colors.text,
    },
    filterContainer: {
      textAlign: 'center' as 'center',
    },
    filterButton: {
      backgroundColor: colors.primary,
      color: '#fff',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
    },
    menuSection: {
      marginBottom: '2rem',
    },
    sectionTitle: {
      color: colors.primary,
      borderBottom: `2px solid ${colors.primary}`,
      paddingBottom: '0.5rem',
      marginBottom: '1.5rem',
    },
    menuItem: {
      border: `1px solid ${colors.primary}`,
      borderRadius: '8px',
      overflow: 'hidden',
      textAlign: 'center' as 'center',
      display: 'flex',
      flexDirection: 'column' as 'column',
    },
    itemImage: {
      width: '100%',
      height: '65%',
      objectFit: 'cover' as 'cover',
      flex: '0 0 65%',
    },
    itemContent: {
      height: '35%',
      flex: '1 1 35%',
      padding: '1rem',
      display: 'flex',
      flexDirection: 'column' as 'column',
      justifyContent: 'center',
      overflow: 'hidden',
    },
    itemName: {
      color: colors.primary,
      margin: '0.5rem 0',
    },
    itemDescription: {
      color: colors.text,
      marginBottom: '1rem',
      lineHeight: 1.4,
    },
    itemPrice: {
      fontWeight: 'bold' as 'bold',
      color: colors.primary,
    },
    addButton: {
      backgroundColor: colors.primary,
      color: '#fff',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      marginTop: '1rem',
      transition: 'all 0.3s ease',
    },
  };

  // Flatten all menu items for consistent refs and visibility
  const allMenuItems = [
    ...menuData.appetizers,
    ...menuData.mainCourses,
    ...menuData.soups,
    ...menuData.desserts,
  ];

  // Determine which items to show and their base index in allMenuItems
  let itemsToRender: any[] = [];
  let sectionMeta: { title: string, items: any[], startIdx: number }[] = [];
  if (category === 'all') {
    let idx = 0;
    for (const key of ['appetizers', 'mainCourses', 'soups', 'desserts']) {
      const items = menuData[key as keyof typeof menuData];
      sectionMeta.push({ title: key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1').trim(), items, startIdx: idx });
      idx += items.length;
    }
    itemsToRender = allMenuItems;
  } else {
    itemsToRender = menuData[category as keyof typeof menuData];
    const startIdx = allMenuItems.findIndex(item => item === itemsToRender[0]);
    sectionMeta.push({ title: category.charAt(0).toUpperCase() + category.slice(1).replace(/([A-Z])/g, ' $1').trim(), items: itemsToRender, startIdx });
  }

  // Use a single scroll animation hook for all visible items
  const { refs, visible } = useScrollAnimation(itemsToRender.length);

  const renderMenuItems = (items: any[], sectionTitle: string, startIdx: number) => (
    <section style={styles.menuSection}>
      <h2 className="section-title" style={styles.sectionTitle}>{sectionTitle}</h2>
      <div className="menu-grid">
        {items.map((item, idx) => (
          <div
            key={item.name}
            className={`menu-item menu-card${visible[startIdx + idx] ? ' visible' : ''}`}
            style={styles.menuItem}
            ref={(el) => { refs.current[startIdx + idx] = el; }}
            data-index={startIdx + idx}
          >
            <img
              src={item.image}
              alt={item.name}
              style={styles.itemImage}
              className="menu-image"
            />
            <div style={styles.itemContent}>
              <h3 className="item-name" style={styles.itemName}>{item.name}</h3>
              <p className="item-description" style={styles.itemDescription}>{item.description}</p>
              <p className="item-price" style={styles.itemPrice}>₦{item.price.toFixed(2)}</p>
              <button className="add-button" style={styles.addButton} onClick={() => addToCart(item)}>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );

  return (
    <main className="container responsive-padding" style={styles.main}>
      <header style={styles.header}>
        <h1 className="menu-title" style={styles.title}>Our Menu</h1>
        <p className="menu-subtitle" style={styles.subtitle}>Explore our wide range of delicious dishes, made with the freshest ingredients.</p>
      </header>

      <div className="filter-container" style={styles.filterContainer}>
        <button className="filter-button" style={styles.filterButton} onClick={() => setCategory('all')}>All</button>
        <button className="filter-button" style={styles.filterButton} onClick={() => setCategory('appetizers')}>Appetizers</button>
        <button className="filter-button" style={styles.filterButton} onClick={() => setCategory('mainCourses')}>Main Courses</button>
        <button className="filter-button" style={styles.filterButton} onClick={() => setCategory('soups')}>Soup</button>
        <button className="filter-button" style={styles.filterButton} onClick={() => setCategory('desserts')}>Desserts</button>
      </div>

      {sectionMeta.map(({ title, items, startIdx }) => renderMenuItems(items, title, startIdx))}
    </main>
  );
};

export default Menu;
