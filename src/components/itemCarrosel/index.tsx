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
function ItemCarrosel() {
  return (
    <Item>
      <Img
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
        alt="POkemon"
      />
      <Info>
        <DivRotate></DivRotate>
        <SpanNumber>25</SpanNumber>
        <SpanName>
          <p>Bulbasairo </p>
        </SpanName>
        <SpanType>Electric</SpanType>
      </Info>
    </Item>
  );
}
export default ItemCarrosel;
