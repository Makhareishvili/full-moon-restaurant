import { images } from "../../constants";
interface Props {
  title: string;
}
const SubHeading = ({ title }: Props) => (
  <div style={{ marginBottom: "1rem" }}>
    <p className="p__cormorant">{title}</p>
    <img src={images.spoon} alt="spoon" className="spoon__img" />
  </div>
);

export default SubHeading;
