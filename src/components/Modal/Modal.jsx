import css from "./Modal.module.css";

const Modal = () => {
  return (
    <div className={css.backdrop}>
      <div className={css.modal}>
        <button
          type="button"
          aria-label="Close modal button"
          className={css.closeModalBtn}
        >
          &times;
        </button>
        <h3 className={css.title}>Modal</h3>
        <p className={css.text}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis
          suscipit blanditiis delectus consequatur, sequi ipsam expedita eius
          omnis inventore repellendus.
        </p>
      </div>
    </div>
  );
};

export default Modal;
