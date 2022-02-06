import { LinkButtonData } from "./linkButotndata.models";
import { Link } from "./style";

function LinkButton({ tolink = "/", value = "value" }: LinkButtonData) {
  return <Link to={tolink}>{value}</Link>;
}
export default LinkButton;
