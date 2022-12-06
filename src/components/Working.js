import CustomButton from "./CustomButton";
import "../App.css";

function Working(props) {
  return (
    <div className="square-style">
      <h2>{props.working.title}</h2> {props.working.contents}
      <div class="button_set">
        <CustomButton
          color="red"
          onClick={() => {
            props.handleDelete(props.working.id);
          }}
        >
          삭제하기
        </CustomButton>
        <CustomButton
          color="green"
          onClick={() => {
            props.handleDone(
              props.working.id,
              props.working.title,
              props.working.contents
            );
          }}
        >
          완료
        </CustomButton>
      </div>
    </div>
  );
}

export default Working;
