import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCTS = [
  {
    id: "p1",
    price: 6,
    title: "First Book",
    description: "The first book i bought",
  },
  {
    id: "p2",
    price: 3,
    title: "Second Book",
    description: "The second book i bought",
  },
  {
    id: "p3",
    price: 8,
    title: "Third Book",
    description: "The third book i bought",
  },
  {
    id: "p4",
    price: 2,
    title: "Fourth Book",
    description: "The fourth book i bought",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((item) => (
          <ProductItem
            key={item.id}
            id={item.id}
            title={item.title}
            price={item.price}
            description={item.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
