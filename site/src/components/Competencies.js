import { useState } from "react";

export default function Competencies() {
    const [activeItem, setActiveItem] = useState(null);


    return (
        <section id="whatwedo" class="tm-section-pad-top">

            <div class="container">
                <h2 class="tm-text-primary mb-4 tm-section-title" style={{ textAlign: "center" }}>Професионални обучения</h2>
                <br />
                <div class="row tm-content-box">
                    <div class="col-lg-1">
                        <i class="fas fa-3x fa-briefcase tm-icon"></i>
                    </div>
                    <div class="col-lg-5">
                        <div class="tm-intro-text-container">
                            <div className="tm-intro-text-container">
                                <h2
                                    className="tm-text-primary mb-2"
                                    style={{ cursor: "pointer" }}
                                    onClick={() =>
                                        setActiveItem(activeItem === "business" ? null : "business")
                                    }
                                >
                                    Малък и среден бизнес
                                </h2>

                                {activeItem === "business" && (
                                    <div
                                        style={{
                                            marginTop: "10px",
                                            paddingLeft: "15px",
                                            borderLeft: "3px solid #007bff"
                                        }}
                                    >
                                        <p>
                                            <strong>Професионално направление:</strong> Управление и администрация
                                        </p>
                                        <ul>
                                            <li><strong>Код СППОО:</strong> 041302</li>
                                            <li><strong>Степен на обучение:</strong> втора</li>
                                            <li><strong>Часове:</strong> 660</li>
                                        </ul>
                                    </div>
                                )}

                            </div>
                        </div>
                    </div>

                    <div class="col-lg-1">
                        <i class="fas fa-3x fa-file-alt tm-icon"></i>

                    </div>
                    <div className="col-lg-5">
                        <div className="tm-intro-text-container">
                            <h2
                                className="tm-text-primary mb-2"
                                style={{ cursor: "pointer" }}
                                onClick={() =>
                                    setActiveItem(activeItem === "admin" ? null : "admin")
                                }
                            >
                                Административни и офис дейности
                            </h2>

                            {activeItem === "admin" && (
                                <div
                                    style={{
                                        marginTop: "10px",
                                        paddingLeft: "15px",
                                        borderLeft: "3px solid #007bff"
                                    }}
                                >
                                    <p>
                                        <strong>Професионално направление:</strong>{" "}
                                        Секретарски и административни офис дейности
                                    </p>
                                    <ul>
                                        <li><strong>Код СППОО:</strong> 041501</li>
                                        <li><strong>Степен на обучение:</strong> първа и втора</li>
                                        <li><strong>Часове:</strong> 300 и 660</li>
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>


                </div>

                <div class="row tm-content-box">
                    <div className="col-lg-1">
                        <i className="fas fa-3x fa-laptop-code tm-icon"></i>
                    </div>
                    <div className="col-lg-5">
                        <div className="tm-intro-text-container">
                            <h2
                                className="tm-text-primary mb-2"
                                style={{ cursor: "pointer" }}
                                onClick={() =>
                                    setActiveItem(activeItem === "informatics" ? null : "informatics")
                                }
                            >
                                Икономическа информатика
                            </h2>

                            {activeItem === "informatics" && (
                                <div className="ps-3 border-start border-primary">
                                    <p><strong>Професионално направление:</strong> Търговия на едро и дребно</p>
                                    <ul>
                                        <li><strong>Код СППОО:</strong> 041603</li>
                                        <li><strong>Степен на обучение:</strong> втора</li>
                                        <li><strong>Часове:</strong> 660</li>
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>


                    <div className="col-lg-1">
                        <i className="fas fa-3x fa-hammer tm-icon"></i>
                    </div>
                    <div className="col-lg-5">
                        <div className="tm-intro-text-container">
                            <h2
                                className="tm-text-primary mb-2"
                                style={{ cursor: "pointer" }}
                                onClick={() =>
                                    setActiveItem(activeItem === "wood" ? null : "wood")
                                }
                            >
                                Производство на строителни изделия от дървесина, врати и прозорци
                            </h2>

                            {activeItem === "wood" && (
                                <div className="ps-3 border-start border-primary">
                                    <p>
                                        <strong>Професионално направление:</strong>{" "}
                                        Производствени технологии - дървесина,
                                        хартия, пластмаси и стъкло.
                                    </p>
                                    <ul>
                                        <li><strong>Код СППОО:</strong> 072204</li>
                                        <li><strong>Степен на обучение:</strong> първа</li>
                                        <li><strong>Часове:</strong> 300</li>
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                <div class="row tm-content-box">

                    <div className="col-lg-1">
                        <i className="fas fa-3x fa-leaf tm-icon"></i>
                    </div>
                    <div className="col-lg-5">
                        <div className="tm-intro-text-container">
                            <h2
                                className="tm-text-primary mb-2"
                                style={{ cursor: "pointer" }}
                                onClick={() =>
                                    setActiveItem(activeItem === "fashion" ? null : "fashion")
                                }
                            >
                                Устойчива мода
                            </h2>

                            {activeItem === "fashion" && (
                                <div className="ps-3 border-start border-primary">
                                    <p><strong>Професионално направление:</strong> Производствени технологии - текстил, облекло,
                                        обувки и кожи</p>
                                    <ul>
                                        <li><strong>Код СППОО:</strong> 072301</li>
                                        <li><strong>Степен на обучение:</strong> първа и втора</li>
                                        <li><strong>Часове:</strong> 300 и 660</li>
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="col-lg-1">
                        <i className="fas fa-3x fa-tshirt tm-icon"></i>
                    </div>
                    <div className="col-lg-5">
                        <div className="tm-intro-text-container">
                            <h2
                                className="tm-text-primary mb-2"
                                style={{ cursor: "pointer" }}
                                onClick={() =>
                                    setActiveItem(activeItem === "textile" ? null : "textile")
                                }
                            >
                                Текстилни технологии
                            </h2>

                            {activeItem === "textile" && (
                                <div className="ps-3 border-start border-primary">
                                    <p><strong>Професионално направление:</strong> Производствени технологии - текстил, облекло, обувки
                                        и кожи</p>
                                    <ul>
                                        <li><strong>Код СППОО:</strong> 072302</li>
                                        <li><strong>Степен на обучение:</strong> първа</li>
                                        <li><strong>Часове:</strong> 300</li>
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                <div class="row tm-content-box">

                    <div class="col-lg-1">
                        <i class="fas fa-3x fa-shoe-prints tm-icon"></i>
                    </div>
                    <div className="col-lg-5">
                        <div className="tm-intro-text-container">
                            <h2
                                className="tm-text-primary mb-2"
                                style={{ cursor: "pointer" }}
                                onClick={() =>
                                    setActiveItem(activeItem === "shoes" ? null : "shoes")
                                }
                            >
                                Обувно производство
                            </h2>

                            {activeItem === "shoes" && (
                                <div className="ps-3 border-start border-primary">
                                    <p><strong>Професионално направление:</strong> Производствени технологии - текстил, облекло, обувки
                                        и кожи</p>
                                    <ul>
                                        <li><strong>Код СППОО:</strong> 072303</li>
                                        <li><strong>Степен на обучение:</strong> първа</li>
                                        <li><strong>Часове:</strong> 300</li>
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>


                    <div class="col-lg-1">
                        <i class="fas fa-3x fa-building tm-icon"></i>
                    </div>
                    <div className="col-lg-5">
                        <div className="tm-intro-text-container">
                            <h2
                                className="tm-text-primary mb-2"
                                style={{ cursor: "pointer" }}
                                onClick={() =>
                                    setActiveItem(activeItem === "builders" ? null : "builders")
                                }
                            >
                                Строителство и архитектура
                            </h2>

                            {activeItem === "builders" && (
                                <div className="ps-3 border-start border-primary">
                                    <p><strong>Професионално направление:</strong> Строителство</p>
                                    <ul>
                                        <li><strong>Код СППОО:</strong> 073201</li>
                                        <li><strong>Степен на обучение:</strong> първа</li>
                                        <li><strong>Часове:</strong> 300</li>
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>

                </div>

                <div class="row tm-content-box">
                    <div class="col-lg-1">
                        <i class="fas fa-3x fa-cut tm-icon"></i>
                    </div>
                    <div className="col-lg-5">
                        <div className="tm-intro-text-container">
                            <h2
                                className="tm-text-primary mb-2"
                                style={{ cursor: "pointer" }}
                                onClick={() =>
                                    setActiveItem(activeItem === "hairStyle" ? null : "hairStyle")
                                }
                            >
                                Фризьорство
                            </h2>

                            {activeItem === "hairStyle" && (
                                <div className="ps-3 border-start border-primary">
                                    <p><strong>Професионално направление:</strong> Фризьорски и козметични услуги</p>
                                    <ul>
                                        <li><strong>Код СППОО:</strong> 101201</li>
                                        <li><strong>Степен на обучение:</strong> втора</li>
                                        <li><strong>Часове:</strong> 660</li>
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>

                    <div class="col-lg-1">
                        <i class="fas fa-3x fa-spa tm-icon"></i>

                    </div>
                    <div className="col-lg-5">
                        <div className="tm-intro-text-container">
                            <h2
                                className="tm-text-primary mb-2"
                                style={{ cursor: "pointer" }}
                                onClick={() =>
                                    setActiveItem(activeItem === "cosmeticals" ? null : "cosmeticals")
                                }
                            >
                                Козметични услуги
                            </h2>

                            {activeItem === "cosmeticals" && (
                                <div className="ps-3 border-start border-primary">
                                    <p><strong>Професионално направление:</strong> Фризьорски и козметични услуги</p>
                                    <ul>
                                        <li><strong>Код СППОО:</strong> 101202</li>
                                        <li><strong>Степен на обучение:</strong> втора</li>
                                        <li><strong>Часове:</strong> 660</li>
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                <div class="row tm-content-box">
                    <div class="col-lg-1">
                        <i class="fas fa-3x fa-hand-paper tm-icon"></i>

                    </div>
                    <div className="col-lg-5">
                        <div className="tm-intro-text-container">
                            <h2
                                className="tm-text-primary mb-2"
                                style={{ cursor: "pointer" }}
                                onClick={() =>
                                    setActiveItem(activeItem === "nails" ? null : "nails")
                                }
                            >
                                Маникюр, педикюр, ноктопластика
                            </h2>

                            {activeItem === "nails" && (
                                <div className="ps-3 border-start border-primary">
                                    <p><strong>Професионално направление:</strong> Фризьорски и козметични услуги</p>
                                    <ul>
                                        <li><strong>Код СППОО:</strong> 101203</li>
                                        <li><strong>Степен на обучение:</strong> втора</li>
                                        <li><strong>Часове:</strong> 660</li>
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>

                    <div class="col-lg-1">
                        <i class="fas fa-3x fa-utensils tm-icon"></i>
                    </div>
                    <div className="col-lg-5">
                        <div className="tm-intro-text-container">
                            <h2
                                className="tm-text-primary mb-2"
                                style={{ cursor: "pointer" }}
                                onClick={() =>
                                    setActiveItem(activeItem === "cooking" ? null : "cooking")
                                }
                            >
                                Готварство
                            </h2>

                            {activeItem === "cooking" && (
                                <div className="ps-3 border-start border-primary">
                                    <p><strong>Професионално направление:</strong> Хотелиерство, ресторантьорство и кетъринг</p>
                                    <ul>
                                        <li><strong>Код СППОО:</strong> 101301</li>
                                        <li><strong>Степен на обучение:</strong> първа и втора</li>
                                        <li><strong>Часове:</strong> 300 и 660</li>
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                <div class="row tm-content-box">
                    <div class="col-lg-1">
                        <i class="fas fa-3x fa-hotel tm-icon"></i>
                    </div>
                    <div className="col-lg-5">
                        <div className="tm-intro-text-container">
                            <h2
                                className="tm-text-primary mb-2"
                                style={{ cursor: "pointer" }}
                                onClick={() =>
                                    setActiveItem(activeItem === "hotels" ? null : "hotels")
                                }
                            >
                                Хотелиерство
                            </h2>

                            {activeItem === "hotels" && (
                                <div className="ps-3 border-start border-primary">
                                    <p><strong>Професионално направление:</strong> Хотелиерство, ресторантьорство и кетъринг</p>
                                    <ul>
                                        <li><strong>Код СППОО:</strong> 101303</li>
                                        <li><strong>Степен на обучение:</strong> първа</li>
                                        <li><strong>Часове:</strong> 300</li>
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>


                </div>

            </div>
        </section >
    );
}