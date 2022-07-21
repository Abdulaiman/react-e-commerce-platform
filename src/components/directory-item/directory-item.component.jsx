import {
  DirectoryItemContainer,
  BackgroundImage,
  Body,
} from "./directory-item.styles";
import { useNavigate } from "react-router-dom";
const DirectoryItem = ({ category }) => {
  const { title, route, imageUrl } = category;
  const navigate = useNavigate();
  const onNavigateHandler = () => navigate(route);
  return (
    <DirectoryItemContainer onClick={onNavigateHandler}>
      <BackgroundImage imageUrl={imageUrl} />
      <Body>
        <h2>{title.toUpperCase()}</h2>
        <p>shop now</p>
      </Body>
    </DirectoryItemContainer>
  );
};
export default DirectoryItem;
