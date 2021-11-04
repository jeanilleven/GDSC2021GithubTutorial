import { ListItem, Text } from "../../common";
import { PrimaryBtn } from "../../common/Buttons";
import CartItem from "./CartItem";

function CartPopup({ items, onItemDelete, className, ...props }) {
  const styles = ["rounded-lg shadow-xl py-5 bg-white min-w-max", className];

  return (
    <section {...props} className={styles.flat(Infinity).join(" ")}>
      <h3 className="font-display font-bold text-neutral-400 ml-6">Cart</h3>
      <section className="border-t-2 border-neutral-100 w-full mt-5 px-6">
        {items.length === 0 ? (
          <Text className="text-center font-bold my-20 mx-20">Your cart is empty.</Text>
        ) : (
          <>
            <ListItem
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
            <PrimaryBtn name="Checkout" className="w-full mt-6 mb-2">
              Checkout
            </PrimaryBtn>
          </>
        )}
      </section>
    </section>
  );
}

export default CartPopup;
