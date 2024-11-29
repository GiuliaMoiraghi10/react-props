import image from '../../../assets/sailor.jpg'
import Button from '../card/Button'
import style from './Card.module.css'

export default function Card() {

    return (
        <div className={style.card}>
            <div className={style.card_image}>
                <img className="img" src={image} alt="" />
            </div>
            <div className={style.card_body}>
                <h3 className={style.title_card}>Sailor Moon</h3>
                <p className={style.description_card}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto officiis possimus animi ipsa blanditiis. Eaque consequuntur culpa ratione debitis vel.</p>
                <Button />
            </div>
        </div>
    )
}