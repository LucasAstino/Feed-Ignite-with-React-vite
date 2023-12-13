import { ThumbsUp, Trash } from "phosphor-react";
import { Avatar } from "./Avatar";
import style from "./Comment.module.css";
import { useState } from "react";

export function Comment({ commentText }) {
  const [counterLike, setCounterLike] = useState(20);

  const like = () => {
    setCounterLike(counterLike + 1);
  };

  return (
    <div className={style.comment}>
      <Avatar
        hasBorder={false}
        src="https://avatars.githubusercontent.com/u/116657103?s=400&u=f28baa4bc816a5d8145441cffef7d0cd4d81bbb5&v=4"
        alt="avatar"
      />

      <div className={style.commentBox}>
        <div className={style.commentContent}>
          <header>
            <div className={style.authorAndTime}>
              <strong>Lucas Astino</strong>
              <time
                title="01 de março às 17:52"
                dateTime="2023-03-01  17:55:00"
              >
                Cerca de 2hrs atrás
              </time>
            </div>

            <button title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>

          <p>{commentText}</p>
        </div>

        <footer>
          <button onClick={like}>
            <ThumbsUp />
            Aplaudir <span>{counterLike}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
