import Head from 'next/head'
// import styles from '../styles/Home.module.css'

export default function Home() {
    return ( 
    <div className = "screen">
        <header>
            <section className="media-nav">
                <a href="#" className="active">
                    Games
                </a>
                <a href="#">Media</a>
            </section>
            <section className="settings">
                <span className="icon">
                    <i className="fa fa-search"></i>
                </span>
                <span className="icon">
                    <i className="fa fa-cog"></i>
                </span>
                <span className="icon">
                    <img 
                    className="user"
                    src="https://api.time.com/wp-content/uploads/2019/04/tyler-blevins-ninja-time-100-2019-002-1.jpg?quality=85&zoom=2"
                    />
                </span>
                <span className="time">3:45 PM</span>
            </section>
        </header>
        <div className="container">
            <section className="game-nav">
                <div className="game active">
                    <i className="fa fa-location-arrow"></i>
                </div>
                <div className="game">
                    <div
                    className="img"
                    style={{
                        background: "url('https://i.psnprofiles.com/games/775921/Ldaaa68.png')",
                        backgroundSize: "contain",
                        backgroundPosition: "center",
                        transform: "scale(1.5)",
                    }}
                    />
                </div>
                <div className="game">
                    <div
                    className="img"
                    style={{
                        background: "url('https://cdn2.unrealengine.com/scottpilgrim-store-portrait-1200x1600-1200x1600-952049598.jpg')",
                        backgroundSize: "contain",
                        backgroundPosition: "center",
                        transform: "scale(1.5)",
                    }}
                    />
                </div>
                <div className="game">
                    <div
                    className="img"
                    style={{
                        background: "url('https://upload.wikimedia.org/wikipedia/en/f/f0/Unravel_2_cover_art.jpg')",
                        backgroundSize: "contain",
                        backgroundPosition: "center",
                        transform: "scale(1.5)",
                    }}
                    />
                </div>
                <div className="game">
                    <div
                    className="img"
                    style={{
                        background: "url('https://i.redd.it/gix30ttllzv41.jpg')",
                        backgroundSize: "contain",
                        backgroundPosition: "center",
                        transform: "scale(1.5)",
                    }}
                    />
                </div>
                <div className="game">
                    <div
                    className="img"
                    style={{
                        background: "url('https://image-cdn.essentiallysports.com/wp-content/uploads/20200618070954/hfwposter.jpg')",
                        backgroundSize: "contain",
                        backgroundPosition: "center",
                        transform: "scale(1.5)",
                    }}
                    />
                </div>
                <div className="game">
                    <div
                    className="img"
                    style={{
                        background: "url('https://i.redd.it/8pvdi0pne8a51.png')",
                        backgroundSize: "contain",
                        backgroundPosition: "center",
                        transform: "scale(1.5)",
                    }}
                    />
                </div>
            </section>
            <section className="info">
                <span className="sub-title">
                    Official news from Playstation | 1/27/2021
                </span>
                <h1>Ready for a PS5 Adventure?</h1>
                <p>
                    ASTRO's PLAYROOM is pre-loaded and waiting for you! Explore the new
                    capabilities of the PS5 and feel the world.
                </p>
            </section>
            
        </div>
        <section id="video-trailers">
                <div className="trailer">
                    <img
                        className="image"
                        src="https://twinfinite.net/wp-content/uploads/2020/11/Marvels-Spider-Man-Miles-Morales.jpg"
                    />
                    <div className="video-info">
                        <div className="circle-player">
                            <i className="fa fa-play"></i>
                        </div>
                        <span className="title">Spiderman: Miles Morales</span>
                    </div>
                </div>
                <div className="trailer">
                    <img
                        className="image"
                        src="https://i2-prod.dailystar.co.uk/incoming/article21327152.ece/ALTERNATES/s1227b/0_GodFall-PS5-Trailer-Screenshot-4.jpg"
                    />
                    <div className="video-info">
                        <div className="circle-player">
                            <i className="fa fa-play"></i>
                        </div>
                        <span className="title">Godfall</span>
                    </div>
                </div>
                <div className="trailer">
                    <img
                        className="image"
                        src="https://images.pushsquare.com/64eeef8813b5d/astros-playroom-ps5-playstation-5-3.original.jpg"
                    />
                    <div className="video-info">
                        <div className="circle-player">
                            <i className="fa fa-play"></i>
                        </div>
                        <span className="title">ASTRO's PLAYROOM</span>
                    </div>
                </div>
                <div className="trailer">
                    <img
                        className="image"
                        src="https://gamespot1.cbsistatic.com/uploads/original/1406/14063904/3404065-unraveltwo-10.jpg"
                    />
                    <div className="video-info">
                        <div className="circle-player">
                            <i className="fa fa-play"></i>
                        </div>
                        <span className="title">Unravel Two</span>
                    </div>
                </div>
                <div className="trailer">
                    <img
                        className="image"
                        src="https://assets1.ignimgs.com/2020/09/16/screenshot-38-1600289117481.jpg"
                    />
                    <div className="video-info">
                        <div className="circle-player">
                            <i className="fa fa-play"></i>
                        </div>
                        <span className="title">Demon's Souls</span>
                    </div>
                </div>
            </section>
    </div>
    )
}