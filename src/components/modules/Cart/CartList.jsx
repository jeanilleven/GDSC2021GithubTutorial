import { ListItem } from "./../../common";
import CartItem from "./CartItem";

function CartList({ items, onItemDelete, ...props }) {
  return (
    <ListItem
      {...props}
      items={items}
      keyExtractor={(item) => item._id}
      ListComponent={({ images, discount, price, name, orderQuantity }) => (
        <CartItem
          className="mt-6"
          name={name}
          image={images[0].thumbnailUrl}
          imageAlt={images[0].name}
          quantity={orderQuantity}
          price={price}
          discount={discount}
          onDelete={onItemDelete}
        />
      )}
    />
  );
}

export default CartList;
