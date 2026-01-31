import Footer from "./Footer";

export default function Contacts() {
    return (
        <section id="contact" class="tm-section-pad-top tm-parallax-2">

            <div class="container tm-container-contact">

                <div class="row">

                    <div class="text-center col-12">
                        <h2 class="tm-section-title mb-4">Контакти</h2>
                        <p class="mb-5">
                            Можете да се свържете с нас, като попълните формата по-долу
                        </p><br />
                    </div>

                    <div class="col-sm-12 col-md-6">
                        <form action="" method="get">
                            <input id="name" name="name" type="text" placeholder="Вашите имена" class="tm-input" required />
                            <input id="email" name="email" type="email" placeholder="Вашият имейл" class="tm-input" required />
                            <textarea id="message" name="message" rows="8" placeholder="Съобщение" class="tm-input" required></textarea>
                            <button type="submit" class="btn tm-btn-submit">Изпрати</button>
                        </form>
                    </div>

                    <div class="col-sm-12 col-md-6">
                        <div class="contact-item">
                            <a rel="nofollow" href="mailto:mail@company.com" class="item-link">
                                <i class="far fa-2x fa-envelope mr-4"></i>
                                <span class="mb-0">mail@company.com</span>
                            </a>
                        </div>

                        <div class="contact-item">
                            <a rel="nofollow" href="https://www.google.com/maps/place/Tsentar,+ul.+%22Vitosha%22+13,+2900+Gotse+Delchev/@41.5778405,23.7235616,17z/data=!3m1!4b1!4m6!3m5!1s0x14abbf86154f6eb3:0x7397aa2f860690e!8m2!3d41.5778365!4d23.7261365!16s%2Fg%2F11k4x4bjj5?entry=ttu&g_ep=EgoyMDI2MDEyOC4wIKXMDSoASAFQAw%3D%3D" class="item-link">
                                <i class="fas fa-2x fa-map-marker-alt mr-4"></i>
                                <span class="mb-0">гр. Гоце Делчев, ул. "Витоша" 13</span>
                            </a>
                        </div>

                        <div class="contact-item">
                            <a rel="nofollow" href="tel:0100200340" class="item-link">
                                <i class="fas fa-2x fa-phone-square mr-4"></i>
                                <span class="mb-0">0888888888</span>
                            </a>
                        </div>

                        <div class="contact-item">&nbsp;</div>

                    </div>


                </div>

            </div>
            <Footer />
        </section>
    );
}