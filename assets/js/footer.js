const beforeFooter = document.querySelector(".before-footer");

const footerHtml = `
    <footer class="text-center">
        <!-- Grid container -->
        <div class="container">
            <section>
                <!-- Grid row-->
                <div class="row text-center d-flex justify-content-center pt-5">
                    <!-- Grid column -->
                    <div class="col-md-2">
                        <h6 class="text-uppercase font-weight-bold mt-2">
                            <a href="./projects.html" class="def hov">Projects</a>
                        </h6>
                    </div>

                    <!-- Grid column -->
                    <div class="col-md-2">
                        <a href="https://github.com/devayoola">
                            <i class="bi bi-github fs-3 def"></i>
                        </a>
                    </div>

                    <!-- Grid column -->
                    <div class="col-md-2">
                        <a href="https://wa.me/2348084634310">
                            <i class="bi bi-whatsapp fs-3 def"></i>
                        </a>
                    </div>
                </div>
            </section>

            <hr class="my-5" />

            <section class="mb-5">
                <div class="row d-flex justify-content-center">
                    <div class="col-lg-8">
                        <h3 class="def">
                            <b>DevAyoola</b>
                        </h3>
                        <p class="def">
                            Hello! Am Ayoola. Am a frontend web developer and an aspiring
                            software engineer passionate about designing and developing to
                            make the world a better place.
                        </p>
                    </div>
                </div>
            </section>
        </div>

        <!-- Copyright -->
        <div class="def p-3" style="background-color: rgba(0, 0, 0, 0.2)">
            © 2023 Copyright,
            <a href="https://devayoola.github.io/">DevAyoola</a>
        </div>
    </footer>`;

beforeFooter.insertAdjacentHTML("afterend", footerHtml);
