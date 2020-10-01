import React from 'react'
import './Footer.css'

export default function Footer() {
    return (
        <footer>
            <div className="container text-center">
                <h3> Связаться с нами </h3>

                <ul className="mail-list"> 
                    <li> Сукачев А. И. : ...@mail.ru </li>
                    <li> Татаринцев Е. С. : ...@mail.ru </li>
                    <li> Кондауров К. С. : ...@mail.ru </li>
                </ul>

            </div>
        </footer>
    )
}