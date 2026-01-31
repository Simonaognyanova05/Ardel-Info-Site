import Contacts from "./components/Contacts";


function App() {
  return (
    <>
      <section id="infinite" class="text-white tm-font-big tm-parallax">

        <nav class="navbar navbar-expand-md tm-navbar" id="tmNav">
          <div class="container">
            <div class="tm-next">
              <a href="#infinite" class="navbar-brand">Ардел Груп</a>
            </div>

            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <i class="fas fa-bars navbar-toggler-icon"></i>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                  <a class="nav-link tm-nav-link" href="#infinite">Начало</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link tm-nav-link" href="#whatwedo">За нас</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link tm-nav-link" href="#gallery">Лицензи</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link tm-nav-link" href="#contact">Контакти</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div class="text-center tm-hero-text-container">
          <div class="tm-hero-text-container-inner">
            <h2 class="tm-hero-title">Ардел Груп ЕООД</h2>
            <p class="tm-hero-subtitle">
              Център за
              <br />ПРОФЕСИОНАЛНО ОБУЧЕНИЕ
            </p>
          </div>
        </div>

        <div class="tm-next tm-intro-next">
          <a href="#whatwedo" class="text-center tm-down-arrow-link">
            <i class="fas fa-2x fa-arrow-down tm-down-arrow"></i>
          </a>
        </div>
      </section>

      <section id="whatwedo" class="tm-section-pad-top">

        <div class="container">

          <div class="row tm-content-box">
            <div class="col-lg-12 col-xl-12">
              <div class="tm-intro-text-container">
                <h2 class="tm-text-primary mb-4 tm-section-title">За нас</h2>
                <p class="mb-4 tm-intro-text">
                  Център за професионално обучение към „КАТЛЕЯ  22“ ЕООД е лицензиран обучителен център, създаден през 2020 година, притежаващ лицензия 2020121538/11.09.2020 г. ,която предлага професионално образование и обучение, дигитални и многоезикови компетентности, присъствено и дистанционно по професии с приоритетно значение за регионалния пазар на труда.</p>
              </div>
            </div>

          </div>

          <div class="row tm-content-box">
            <div class="col-lg-1">
              <i class="far fa-3x fa-chart-bar text-center tm-icon"></i>
            </div>
            <div class="col-lg-5">
              <div class="tm-intro-text-container">
                <h2 class="tm-text-primary mb-4">Козметик</h2>
                <p class="mb-4 tm-intro-text">
                  Описание на обучението.</p>
              </div>
            </div>

            <div class="col-lg-1">
              <i class="far fa-3x fa-comment-alt text-center tm-icon"></i>
            </div>
            <div class="col-lg-5">
              <div class="tm-intro-text-container">
                <h2 class="tm-text-primary mb-4">Сътрудник в бизнес-услуги</h2>
                <p class="mb-4 tm-intro-text">
                  Описание</p>
              </div>
            </div>

          </div>

          <div class="row tm-content-box">
            <div class="col-lg-1">
              <i class="fas fa-3x fa-fingerprint text-center tm-icon"></i>
            </div>
            <div class="col-lg-5">
              <div class="tm-intro-text-container">
                <h2 class="tm-text-primary mb-4">Работник в малък и среден бизнес</h2>
                <p class="mb-4 tm-intro-text">
                  Описание</p>

              </div>
            </div>

            <div class="col-lg-1">
              <i class="fas fa-3x fa-users text-center tm-icon"></i>
            </div>
            <div class="col-lg-5">
              <div class="tm-intro-text-container">
                <h2 class="tm-text-primary mb-4">Деловодител</h2>
                <p class="mb-4 tm-intro-text">
                  Описание </p>
              </div>
            </div>

          </div>

        </div>
        <div class="container">

          <div class="row tm-content-box">
            <div class="col-lg-12 col-xl-12">
              <div class="tm-intro-text-container">
                <h2 class="tm-text-primary mb-4 tm-section-title">Езикови компетентности</h2>
              </div>
            </div>

          </div>

          <div class="row tm-content-box">
            <div class="col-lg-1">
              <i class="far fa-3x fa-chart-bar text-center tm-icon"></i>
            </div>
            <div class="col-lg-5">
              <div class="tm-intro-text-container">
                <h2 class="tm-text-primary mb-4">Испански език</h2>
              </div>
            </div>

            <div class="col-lg-1">
              <i class="far fa-3x fa-comment-alt text-center tm-icon"></i>
            </div>
            <div class="col-lg-5">
              <div class="tm-intro-text-container">
                <h2 class="tm-text-primary mb-4">Английски език</h2>
              </div>
            </div>

          </div>

          <div class="row tm-content-box">
            <div class="col-lg-1">
              <i class="fas fa-3x fa-fingerprint text-center tm-icon"></i>
            </div>
            <div class="col-lg-5">
              <div class="tm-intro-text-container">
                <h2 class="tm-text-primary mb-4">Гръцки език</h2>

              </div>
            </div>

            <div class="col-lg-1">
              <i class="fas fa-3x fa-users text-center tm-icon"></i>
            </div>
            <div class="col-lg-5">
              <div class="tm-intro-text-container">
                <h2 class="tm-text-primary mb-4">Френски език</h2>
              </div>
            </div>

          </div>

        </div>
        <div class="container">

          <div class="row tm-content-box">
            <div class="col-lg-12 col-xl-12">
              <div class="tm-intro-text-container">
                <h2 class="tm-text-primary mb-4 tm-section-title">Ключови компетентности</h2>
              </div>
            </div>

          </div>

          <div class="row tm-content-box">
            <div class="col-lg-1">
              <i class="far fa-3x fa-chart-bar text-center tm-icon"></i>
            </div>
            <div class="col-lg-5">
              <div class="tm-intro-text-container">
                <h2 class="tm-text-primary mb-4">Цифрова компетентност - базово ниво</h2>
              </div>
            </div>

            <div class="col-lg-1">
              <i class="far fa-3x fa-comment-alt text-center tm-icon"></i>
            </div>
            <div class="col-lg-5">
              <div class="tm-intro-text-container">
                <h2 class="tm-text-primary mb-4">Цифрова компетентност - базово ниво</h2>
              </div>
            </div>

          </div>

          <div class="row tm-content-box">
            <div class="col-lg-1">
              <i class="fas fa-3x fa-fingerprint text-center tm-icon"></i>
            </div>
            <div class="col-lg-5">
              <div class="tm-intro-text-container">
                <h2 class="tm-text-primary mb-4">Цифрова компетентност - базово ниво</h2>

              </div>
            </div>

          </div>

        </div>

      </section>

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

      <Contacts />
    </>
  );
}

export default App;
