import Text from "../common/Text";
import { Header, SubHeader } from "./../common/Headers";

function ProductDetails({ title, subtitle, description, ...props }) {
  return (
    <article {...props}>
      {subtitle && <SubHeader className="mb-3 lg:mb-4">{subtitle}</SubHeader>}
      {title && <Header className="mb-4 lg:mb-9">{title}</Header>}
      {description && <Text>{description}</Text>}
    </article>
  );
}

export default ProductDetails;
