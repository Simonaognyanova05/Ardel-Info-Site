export default function Gallery() {
    return (
        <section id="gallery" class="tm-section-pad-top">
            <div class="container tm-container-gallery">
                <div class="row">
                    <div class="text-center col-12">
                        <h2 class="tm-text-primary tm-section-title mb-4">Лицензи</h2>
                        <p class="mx-auto tm-section-desc">
                            Това са нашите лицензи.
                        </p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12">
                        <div class="mx-auto tm-gallery-container">
                            <div class="grid tm-gallery">
                                <a href="img/license1.png">
                                    <figure class="effect-honey tm-gallery-item">
                                        <img src="img/license1.png" alt="Image 1" class="img-fluid" />
                                        <figcaption>
                                            <h2><i>За председател <span>инж. Мариянка Живкова</span></i></h2>
                                        </figcaption>
                                    </figure>
                                </a>
                                <a href="img/license2.png">
                                    <figure class="effect-honey tm-gallery-item">
                                        <img src="img/license2.png" alt="Image 2" class="img-fluid" />
                                        <figcaption>
                                            <h2><i>За председател <span>инж. Мариянка Живкова</span></i></h2>
                                        </figcaption>
                                    </figure>
                                </a>
                                <a href="img/license3.png">
                                    <figure class="effect-honey tm-gallery-item">
                                        <img src="img/license3.png" alt="Image 3" class="img-fluid" />
                                        <figcaption>
                                            <h2><i><span>Към</span> Ардел Груп ЕООД</i></h2>
                                        </figcaption>
                                    </figure>
                                </a>
                                <a href="img/license3.png">
                                    <figure class="effect-honey tm-gallery-item">
                                        <img src="img/license3.png" alt="Image 4" class="img-fluid" />
                                        <figcaption>
                                            <h2><i>Към <span>Ардел Груп ЕООД</span></i></h2>
                                        </figcaption>
                                    </figure>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}