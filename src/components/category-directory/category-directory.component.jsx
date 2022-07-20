import DirectoryItem from "../directory-item/directory-item.component";
import "./category-directory.styles.scss";
const CategoriesDirectory = ({ categories }) => {
  return (
    <div className="directory-container">
      {categories.map(({ id, title, imageUrl }) => (
        <DirectoryItem key={id} title={title} imageUrl={imageUrl} />
      ))}
    </div>
  );
};
export default CategoriesDirectory;
