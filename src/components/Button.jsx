const Button = (props) => {
  const { switching, setSwitch } = props;
  return (
    <div className="button">
      {switching === false ? (
        <button
          onClick={() => {
            setSwitch(!switching);
          }}
        >
          ON
        </button>
      ) : (
        <button
          className="color"
          onClick={() => {
            setSwitch(switching);
          }}
        >
          ON
        </button>
      )}

      {switching === true ? (
        <button
          onClick={() => {
            setSwitch(!switching);
          }}
        >
          OFF
        </button>
      ) : (
        <button
          className="color"
          onClick={() => {
            setSwitch(switching);
          }}
        >
          OFF
        </button>
      )}
    </div>
  );
};

export default Button;
