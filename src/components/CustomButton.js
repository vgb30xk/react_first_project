function CustomButton(props) {
  const { color, onClick, children } = props;
  if (color) {
    return (
      <button
        style={{
          backgroundColor: color,
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
  }
  return <button onClick={onClick}>{children}</button>;
}

export default CustomButton;
