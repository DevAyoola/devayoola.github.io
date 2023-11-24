const afterHeader = document.querySelector(".after-header");

const headerHtml = `
    <header>
        <!--NAVIGATION BAR-->
        <nav class="navbar navbar-expand-lg fixed-top pt-2 pb-2">
            <div class="container-fluid pt-2 pb-2">
                <a class="navbar-brand" href="https://devayoola.github.io">
                    <span class="material-icons mi-36 mi-light">code</span>
                    <span class="brand-name">DevAyoola</span>
                </a>
                <button
                    class="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span class="material-icons mi-24 mi-light">menu</span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link" href="./index.html">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="./web-components.html"
                                >Web Components</a
                            >
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="./projects.html">Projects</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="./contact.html">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <br />
        <!--PROFILE-->
        <div class="profile-card hidden">
            <button class="close-profile">&times;</button>
            <div class="image">
                <img src="./assets/img/profile.jpg" alt="" class="profile-pic" />
            </div>
            <div class="data">
                <h4>Sowunmi Ayoola</h4>
                <p class="text-center">A Frontend Developer and A Graphics Designer</p>
            </div>
            <div class="row">
                <span
                    ><a href="https://github.com/devayoola">
                        <i class="bi bi-github fs-3 text-dark"></i> </a
                    >&nbsp;
                    <a href="https://wa.me/2348084634310">
                        <i class="bi bi-whatsapp fs-3 text-success"></i> </a
                ></span>
            </div>
        </div>
        <div class="overlay hidden"></div>
    </header>`;

afterHeader.insertAdjacentHTML("beforebegin", headerHtml);
