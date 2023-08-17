const Button = (props) => {
  const { switching, setSwitch } = props;
  return (
    <div className="button">
      <button
        className={switching ? "active" : "inactive"}
        onClick={() => {
          setSwitch(true);
        }}
      >
        ON
      </button>
      <button
        className={!switching ? "active" : "inactive"}
        onClick={() => {
          setSwitch(false);
        }}
      >
        OFF
      </button>
    </div>
  );
};

export default Button;
