const footer = document.querySelector(".footer");

footer.innerHTML = `
    <!-- Grid container -->
    <div class="container">
        <section id="contact" class="pt-5 def-col-font contact">
            <div class="row d-flex text-center">
                <h3>Contact</h3>
            </div>
        </section>
        <section class="social-icons">
            <!-- Grid row-->
            <div class="row text-center d-flex justify-content-center pt-5">
                <!-- Grid column -->
                <div class="col-md-3">
                    <div class="mail-tooltip">
                      <i class="bi bi-envelope fs-3 def-col"></i>
                      <span class="tooltiptext px-1">aydavidfjc@gmail.com</span>
                    </div>
                </div>

                <!-- Grid column -->
                <div class="col-md-3">
                    <a href="https://github.com/devayoola">
                        <i class="bi bi-github fs-3 def-col"></i>
                    </a>
                </div>

                <!-- Grid column -->
                <div class="col-md-3">
                    <a href="https://wa.me/2348084634310">
                        <i class="bi bi-whatsapp fs-3 def-col"></i>
                    </a>
                </div>
            </div>
        </section>

        <hr class="my-5" />

        <section class="mb-5">
            <div class="row d-flex text-center">
                <div class="col-lg-2"></div>
                <div class="col-lg-8 devay">
                    <h3 class="def-col-font">
                        DevAyoola
                    </h3>
                    <p class="def-col-font">
                        Hello! Am Ayoola. Am a frontend web developer and an aspiring
                        software engineer passionate about designing and developing to
                        make the world a better place.
                    </p>
                </div>
                <div class="col-lg-2"></div>
            </div>
        </section>
    </div>

    <!-- Copyright -->
    <div class="text-center def-font p-3" style="background-color: rgba(0, 0, 0, 0.2)">
        <span class="def-col">© 2023 Copyright,</span>
        <a href="https://devayoola.github.io/">DevAyoola</a>
    </div>
    `;
