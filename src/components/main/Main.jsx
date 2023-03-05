import "./Main.css";

const Main = (props) => {
  const { img, title, desc } = props;
  return (
    <div>
      Main
      <img src={img} alt="" width={250} />
      <h4>{title}</h4>
      <div className="desc">
        <p>{desc}</p>
      </div>
      <button className="btn">More Detail</button>
    </div>
  );
};

export default Main;
