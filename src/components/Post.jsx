import { Avatar } from './Avatar'
import { Comment } from './Comment'
import style from './Post.module.css'

import {format , formatDistanceToNow} from 'date-fns'
import ptBr from 'date-fns/locale/pt-BR'




export function Post({ author, publishedAt }){

     const dateFormattedTitle = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'",{locale:ptBr,}
     )

     const dateFormattedRelativetonow = formatDistanceToNow(publishedAt,{locale:ptBr,addSuffix:true})
     
    
    return(
        <article className={style.post}>
            <header>
        <div className={style.author}>
            <Avatar src={author.avatarUrl} alt="avatar" />
            <div className={style.authorInfo}>
                <strong>{author.name}</strong>
                <span>{author.role}</span>
            </div>
        </div>


            <time title={dateFormattedTitle} dateTime="2023-03-01  17:55:00" >
            {dateFormattedRelativetonow}
             </time>
            </header>

            <div className={style.content}>
            <p>Fala galeraa 👋</p>
            <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
            <p>👉 <a href='#'>jane.design/doctorcare</a></p>
            <p> <a href='#'>#novoprojeto #nlw #rocketseat</a></p>
            </div>

            <form className={style.commentForm}>
                <strong>Deixe seu feedback</strong>


                <textarea
                placeholder='Deixe um comentário'
                />

                <footer>
                <button type='submit' >Publicar</button>
                </footer>
            </form>

            <div className={style.commentList}>
                <Comment/>
                <Comment/>
                <Comment/>
            </div>

        </article>
    )
}