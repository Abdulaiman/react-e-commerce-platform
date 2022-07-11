import CategoryItem from "../category-item/categoty-item.component";
import "./category-directory.styles.scss";
const CategoriesDirectory = ({ categories }) => {
  return (
    <div className="directory-container">
      {categories.map(({ id, title, imageUrl }) => (
        <CategoryItem key={id} title={title} imageUrl={imageUrl} />
      ))}
    </div>
  );
};
export default CategoriesDirectory;
