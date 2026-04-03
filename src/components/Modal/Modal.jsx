import { useEffect } from "react";
import css from "./Modal.module.css";

/* 
Методи життевого циклу

1. Монтування

useEffect(() => {
    console.log("Modal mounted");
  }, []);

  - функція, яка виконуєтсья, кожен раз, після рендеру компонента.
  
  Для чого використовується:
  1. Надсилаються мережеві запити за даними після монтування
  2. Для встановлення глобальних слухачів водій window.addEventListener
  3. Встановлюються таймери та інтервали (setInterval, setTimeout)
  4. Виконуються якісь додаткові функції useEffect(відключення скролу у користувача, коли відкрилась модалка) 


2. Розмонтування(демонтування)

  useEffect(() => {
    return () => {
      console.log("Modal unmounted");
    };
  }, []);

  - функція, яка виконуєтсья, кожен раз, перед тим,як компонент буде повністю видалений з розмітки

   Для чого використовується:
  1. Відхиляти мережеві запити за даними після монтування
  2. Для приберання глобальних слухачів водій window.removeEventListener
  3. Прибераються таймери та інтервали (clearInterval, clearTimeout)
  4. Виконуються якісь додаткові функції useEffect(вмикати скролу у користувача, перед повним закриттям модалка) 

*/

const Modal = ({ onCloseModal }) => {
  useEffect(() => {
    console.log("Modal mounted");

    const handleKeyDown = () => {
      console.log("key is pressed");
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className={css.backdrop}>
      <div className={css.modal}>
        <button
          type="button"
          aria-label="Close modal button"
          className={css.closeModalBtn}
          onClick={onCloseModal}
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
