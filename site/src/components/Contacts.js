import { sendMessage } from "../services/sendMessage";
import Footer from "./Footer";
import { useNavigate } from 'react-router-dom';

export default function Contacts() {
    const navigate = useNavigate();

    const sendHandler = async (e) => {
        e.preventDefault();

        const { name, email, message } = Object.fromEntries(new FormData(e.currentTarget));


        try {
            const result = await sendMessage(name, email, message);

            if (result.status == 200) {
                alert("Успешно изпращане на съобщението!");
                e.target.reset();
                navigate('/');
            } else {
                alert("Възникна грешка, моля опитайте по-късно!");
            }
        } catch (e) {
            alert("Възникна грешка, моля опитайте по-късно!");
        }
    }
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
                        <form action="" method="get" onSubmit={sendHandler}>
                            <input id="name" name="name" type="text" placeholder="Вашите имена" class="tm-input" required />
                            <input id="email" name="email" type="email" placeholder="Вашият имейл" class="tm-input" required />
                            <textarea id="message" name="message" rows="8" placeholder="Съобщение" class="tm-input" required></textarea>
                            <button type="submit" class="btn tm-btn-submit">Изпрати</button>
                        </form>
                    </div>

                    <div class="col-sm-12 col-md-6">
                        <div class="contact-item">
                            <a rel="nofollow" href="mailto:ardel.group@abv.bg" class="item-link">
                                <i class="far fa-2x fa-envelope mr-4"></i>
                                <span class="mb-0">ardel.group@abv.bg</span>
                            </a>
                        </div>

                        <div class="contact-item">
                            <a rel="nofollow" href="https://www.google.com/maps/place/Tsentar,+ul.+%22Vitosha%22+13,+2900+Gotse+Delchev/@41.5778405,23.7235616,17z/data=!3m1!4b1!4m6!3m5!1s0x14abbf86154f6eb3:0x7397aa2f860690e!8m2!3d41.5778365!4d23.7261365!16s%2Fg%2F11k4x4bjj5?entry=ttu&g_ep=EgoyMDI2MDEyOC4wIKXMDSoASAFQAw%3D%3D" class="item-link">
                                <i class="fas fa-2x fa-map-marker-alt mr-4"></i>
                                <span class="mb-0">гр. Гоце Делчев, ул. "Витоша" 13</span>
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