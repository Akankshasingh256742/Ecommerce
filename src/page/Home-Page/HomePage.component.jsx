import MenuItem from '../../component/MenuItem';
import './home-page.style.css';

function HomePage({ productCart }) {
   
  return (
    <div className="home-page">
      <h1>Welcome to my home page</h1>
      <div className="directory-menu">
      {productCart.map((product) => (
          <MenuItem key={product.id} product={product} />
        ))}
        
      </div>
    </div>
  );
}

export default HomePage;
