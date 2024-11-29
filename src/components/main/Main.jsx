import Card from './card/Card.jsx'
import style from './Main.module.css'

export default function Main() {

    return (
        <main>
            <section className={style.container}>
                <h1 className={style.title_blog}>Il mio blog</h1>
                <div className={style.container}>
                    <div className={style.raw}>
                        <div className={style.col_12}>
                            <Card />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}