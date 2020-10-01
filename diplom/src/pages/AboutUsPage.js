import React from 'react'
import Footer from '../components/footer/Footer'

export default function AboutUsPage() {
    return (
        <>
        <div className="container about-us">
            <div className="card">
            <img src="/greenhouse.jpg" className="card-img-top" alt="greenhouse"/>
                <div className="card-body">
                    <h5 className="card-title">Пустая сборка</h5>
                    <p className="card-text">Никакой электроники.</p>
                </div>
            </div>
            <div className="card">
            <img src="/greenhouse.jpg" className="card-img-top" alt="greenhouse"/>
                <div className="card-body">
                    <h5 className="card-title">Неполная сборка</h5>
                    <p className="card-text">Несколько датчиков.</p>
                </div>
            </div><div className="card">
            <img src="/greenhouse.jpg" className="card-img-top" alt="greenhouse"/>
                <div className="card-body">
                    <h5 className="card-title">Полная сборка</h5>
                    <p className="card-text">Много датчиков.</p>
                </div>
            </div>
        </div>

        <div className="container text-center who-did">
            <h2> Руководитель </h2>
            <p> Сукачев A. И.</p>

            <h2> Выполнили </h2>
            <p> Татаринцев Е. С. </p>
            <p> Кондауров К. С. </p>
        </div>
        <Footer />
        </>
    )
}