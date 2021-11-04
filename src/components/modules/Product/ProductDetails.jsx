import { Text } from "../../common";
import { Header, SubHeader } from "../../common/Headers";
import Price from "../Price";

function ProductDetails({ name, company, description, price, discount, ...props }) {
  return (
    <article {...props}>
      {company && <SubHeader>{company}</SubHeader>}
      {name && <Header className="mt-3 lg:mt-4">{name}</Header>}
      {description && <Text className="mt-4 lg:mt-9">{description}</Text>}
      {price && <Price className="mt-8" value={price} discount={discount} />}
    </article>
  );
}

export default ProductDetails;
