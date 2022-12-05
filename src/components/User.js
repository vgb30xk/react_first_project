import CustomButton from "./CustomButton";

function User(props) {
  return (
    <div className="square-style">
      <h2>{props.user.title}</h2> {props.user.contents}
      <CustomButton
        color="red"
        onClick={() => {
          props.handleDelete(props.user.id);
        }}
      >
        삭제하기
      </CustomButton>
      <CustomButton
        color="green"
        onClick={() => {
          props.handleDelete(props.user.id);
        }}
      >
        완료
      </CustomButton>
    </div>
  );
}

export default User;
