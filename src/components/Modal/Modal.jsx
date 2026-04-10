import { useEffect, useState } from "react";
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

  - функція, яка виконуєтсья, кожен раз, перед тим,як компонент буде повністю видалений з розмітки.

  Для чого використовується:
  1. Відхиляти мережеві запити за даними після монтування
  2. Для приберання глобальних слухачів водій window.removeEventListener
  3. Прибераються таймери та інтервали (clearInterval, clearTimeout)
  4. Виконуються якісь додаткові функції useEffect(вмикати скролу у користувача, перед повним закриттям модалка) 

3. Оновлення

  useEffect(() => {
    console.log("Counter value: ", { counter });
  }, [counter]);

  - функція, яка виконуєтсья, кожен раз, після зміни пропсів, або стейту компоненти

  Для чого використовується:
  1. Надсилати мережеві запити за даними після оновлення
  2. Синхронізація даних з localStorage, або з якимись сторонніми функціями.
*/

const Modal = ({ onCloseModal }) => {
  const [counter, setCounter] = useState(() => {
    return parseInt(localStorage.getItem("counterValue") ?? 0);
  });

  useEffect(() => {
    localStorage.setItem("counterValue", counter);
  }, [counter]);

  useEffect(() => {
    console.log("Modal mounted");

    const handleKeyDown = (event) => {
      if (event.code === "Escape") {
        onCloseModal();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onCloseModal]);

  const handleBackDropClick = (event) => {
    if (event.target === event.currentTarget) {
      onCloseModal();
    }
  };

  return (
    <div onClick={handleBackDropClick} className={css.backdrop}>
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
        <button
          type="button"
          onClick={() => setCounter((prevState) => prevState + 1)}
        >
          Click to increment counter {counter}
        </button>
      </div>
    </div>
  );
};

export default Modal;
