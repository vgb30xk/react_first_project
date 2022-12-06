import CustomButton from "./CustomButton";
import "../App.css";

function Done(props) {
  return (
    <div className="square-style">
      <h2>{props.done.title}</h2> {props.done.contents}
      <div class="button_set">
        <CustomButton
          color="red"
          onClick={() => {
            props.handleDelete(props.done.id);
          }}
        >
          삭제하기
        </CustomButton>
        <CustomButton
          color="green"
          onClick={() => {
            props.handleback(
              props.done.id,
              props.done.title,
              props.done.contents
            );
          }}
        >
          취소
        </CustomButton>
      </div>
    </div>
  );
}

export default Done;
