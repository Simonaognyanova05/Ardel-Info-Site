export default function Header() {
    return (
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
    );
}