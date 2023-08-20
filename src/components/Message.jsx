const Message = ({ switch1, switch2, switch3 }) => {
  return (
    <section>
      {switch1 && switch2 && switch3 === true ? (
        <p className="go">Lets'Go</p>
      ) : (
        <p className="no">No way</p>
      )}
    </section>
  );
};

export default Message;
