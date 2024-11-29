import Card from './card/Card.jsx'
import style from './Main.module.css'

//importo posts.js
import { posts } from '../../posts.js'

export default function Main() {

    return (
        <main>
            <section className={style.container}>
                <h1 className={style.title_blog}>Il mio blog</h1>
                <div className={style.container}>
                    <div className={style.raw}>
                        {posts.map(post => <div key={post.id} className={style.col_4}>
                            <Card post={post} />
                        </div>)}
                    </div>
                </div>
            </section>
        </main>
    )
}