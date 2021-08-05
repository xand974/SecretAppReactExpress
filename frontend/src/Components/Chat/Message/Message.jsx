import "./message.css";

export default function Message({ own }) {
  return (
    <div className={own ? "message own " : "message"}>
      <div className="message__top">
        <img
          src="https://static.remove.bg/remove-bg-web/3661dd45c31a4ff23941855a7e4cedbbf6973643/assets/start_remove-79a4598a05a77ca999df1dcb434160994b6fde2c3e9101984fb1be0f16d0a74e.png"
          alt=""
          className="message__image"
        />
        <p className="message__content">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore
          odio explicabo molestias atque quod a quos perferendis reiciendis,
          impedit voluptate!
        </p>
      </div>
      <div className="message__bottom">
        <p className="message__time">1 hour ago</p>
      </div>
    </div>
  );
}
