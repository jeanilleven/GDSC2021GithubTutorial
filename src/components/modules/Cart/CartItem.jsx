import { FaTrashAlt } from "react-icons/fa";
import { Image, PriceTag } from "../../common";
import { IconBtn } from "../../common/Buttons";

function CartItem({
  image,
  imageAlt,
  price,
  discount,
  quantity,
  name,
  onDelete,
  className = "",
  ...props
}) {
  const sellingPrice = price * (discount || 1);
  const totalPrice = quantity * sellingPrice;
  const styles = ["flex", className];

  return (
    <section {...props} className={styles.flat(Infinity).join(" ")}>
      <div className="overflow-hidden w-12 rounded-md">
        <Image alt={imageAlt} src={image} />
      </div>
      <div className="flex flex-col ml-4 font-display text-neutral-300">
        <h6>{name}</h6>
        <p>
          <PriceTag value={sellingPrice} /> x {quantity}{" "}
          <PriceTag value={totalPrice} className="font-bold text-neutral-400" />
        </p>
      </div>
      <IconBtn
        name="Delete"
        Icon={<FaTrashAlt size={16} />}
        onClick={onDelete}
        className="text-neutral-200 ml-auto md:ml-4 active:scale-110 transform"
      />
    </section>
  );
}

export default CartItem;
