import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { decreaseItemQuantity, increaseItemQuantity } from "./cartSlice";

function UpdateItemQuantity({ pizzaId, currentQuantity }) {
  const dispatch = useDispatch();

  function handleIncreaseItemQuantity() {
    dispatch(increaseItemQuantity(pizzaId));
  }

  function handleDecreaseItemQuantity() {
    dispatch(decreaseItemQuantity(pizzaId));
  }

  return (
    <div className="flex items-center gap-2 md:gap-3">
      <Button type="round" onClick={handleDecreaseItemQuantity}>
        -
      </Button>
      {currentQuantity}
      <Button type="round" onClick={handleIncreaseItemQuantity}>
        +
      </Button>
    </div>
  );
}

export default UpdateItemQuantity;
