import classes from "./CartButton.module.css";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../store/ui-slice";

const CartButton = (props) => {
  const dispatch = useDispatch();

  const totalItem = useSelector((state) => state.cart.totalQuantity);

  const toggleCartHanler = () => {
    dispatch(uiActions.toggle());
  };

  return (
    <button className={classes.button} onClick={toggleCartHanler}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalItem}</span>
    </button>
  );
};

export default CartButton;
