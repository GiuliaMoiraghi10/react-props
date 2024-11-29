import image from '../../../assets/sailor.jpg'
import Button from '../card/Button'
import style from './Card.module.css'

export default function Card({ post = {} }) { //passo le props
    // creo variabile destrutturando array di posts
    const { id, title, image, content, tags, published } = post

    return (
        <div className={style.card}>
            <div className={style.card_image}>
                <img className="img" src={image || placeholder} alt="" />
            </div>
            <div className={style.card_body}>
                <h3 className={style.title_card}>{title}</h3>
                <ul className={style.tags}>
                    {tags.map((tag) => ( //con tag, stampo tutti i post, se voglio vedere solo quelli pubblicati devo filtrarli
                        <li className={style.tag_item} key={tag} > {tag} </li>
                    ))}
                </ul>
                <p className={style.description_card}>{content}</p>
                <Button />
            </div>
        </div>
    )
}