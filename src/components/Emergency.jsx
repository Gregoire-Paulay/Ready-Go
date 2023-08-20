const Emergency = ({ setSwitch1, setSwitch2, setSwitch3 }) => {
  return (
    <button
      onClick={() => {
        setSwitch1(false);
        setSwitch2(false);
        setSwitch3(false);
      }}
    >
      ⚠ Emergency
    </button>
  );
};

export default Emergency;
