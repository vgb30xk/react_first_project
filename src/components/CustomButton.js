function CustomButton(props) {
  const { addcolor, color, onClick, children } = props;
  if (addcolor) {
    return (
      <button
        style={{
          backgroundColor: addcolor,
          color: "white",
          border: "none",
          borderRadius: "10px",
          fontWeight: "700",
          height: "40px",
          width: "140px",
        }}
        onClick={onClick}
      >
        {children}
      </button>
    );
  } else {
    return (
      <button
        style={{
          backgroundColor: "white",
          border: "2px",
          borderStyle: "solid",
          borderColor: color,
          cursor: "pointer",
          borderRadius: "8px",
          height: "40px",
          width: "50%",
        }}
        onClick={onClick}
      >
        {children}
      </button>
    );
  }
}

export default CustomButton;
