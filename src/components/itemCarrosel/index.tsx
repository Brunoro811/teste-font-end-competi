import {
  ImageDiv,
  Img,
  SpanType,
  Info,
  SpanName,
  Item,
  DivRotate,
  SpanNumber,
} from "./style";

interface ItemCarroselData {
  id: number;
  image: string;
  alt: string;
  name: string;
  types: string;
}

function ItemCarrosel({ id, image, types, name, alt }: ItemCarroselData) {
  return (
    <Item>
      <Img src={image} alt={alt} />
      <Info>
        <DivRotate></DivRotate>
        <SpanNumber>{id}</SpanNumber>
        <SpanName>
          <p>{name}</p>
        </SpanName>
        <SpanType>{types}</SpanType>
      </Info>
    </Item>
  );
}
export default ItemCarrosel;
