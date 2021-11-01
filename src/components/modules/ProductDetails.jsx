import Text from "../common/Text";
import { Header, SubHeader } from "./../common/Headers";

function ProductDetails({ name, company, description, ...props }) {
  return (
    <article {...props}>
      {company && <SubHeader className="mb-3 lg:mb-4">{company}</SubHeader>}
      {name && <Header className="mb-4 lg:mb-9">{name}</Header>}
      {description && <Text>{description}</Text>}
    </article>
  );
}

export default ProductDetails;
