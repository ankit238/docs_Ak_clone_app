

import React from 'react'
import server from "../images/server.png"
import server2 from "../images/server2.png"

export default function features() {
    return (
        <div>
             <section class="features-head bg-primary py-3">
        <div class="container grid">
            <div>
                <h1 class="xl">Features</h1>
                <p class="lead">
                    Check out the features of Loruki that separate us from the
						competition
                </p>
            </div>
            <img src={server} alt="" />
        </div>
    </section>

    <section class="features-sub-head bg-light py-3">
        <div class="container grid">
            <div>
                <h1 class="md">The AK Platform</h1>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor cupiditate dignissimos temporibus perspiciatis quae! Suscipit qui, consectetur ea consequatur, doloribus repellendus quasi, aut corporis nam alias culpa. Nostrum, inventore accusantium!
                </p>
            </div>
            <img src={server2} alt="" />
        </div>

        <section class="features-main my-2">
        <div class="container grid grid-3">
            <div class="card flex">
                <i class="fas fa-server fa-3x"></i>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas nemo saepe corrupti et dolorem voluptate at, nostrum rem voluptatem ab alias quia molestiae ea, libero nihil deserunt. Molestias, eum? Necessitatibus!</p>
            </div>
            <div class="card flex">
                <i class="fas fa-network-wired fa-3x"></i>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus
                    recusandae perferendis culpa, reiciendis a itaque debitis qui vel
                    dignissimos ipsum!
                </p>
            </div>
            <div class="card flex">
                <i class="fas fa-laptop-code fa-3x"></i>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis,
                    magnam.
                </p>
            </div>
            <div class="card flex">
                <i class="fas fa-database fa-3x"></i>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, a!
                </p>
            </div>
            <div class="card flex">
                <i class="fas fa-power-off fa-3x"></i>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis,
                    magnam.
                </p>
            </div>
            <div class="card flex">
                <i class="fas fa-upload fa-3x"></i>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis,
                    magnam.
                </p>
            </div>
        </div>
    </section>

    
    </section>


    <footer class="footer bg-dark py-5">
        <div class="container grid grid-3">
            <div>
                <h1>AK
                </h1>
                <p>Copyright &copy; 2020</p>
            </div>
            <nav>
                <ul>
                    <li><a href="index.html">Home</a></li>
                    <li><a href="features.html">Features</a></li>
                    <li><a href="docs.html">Docs</a></li>
                </ul>
            </nav>
            <div class="social">
                <i class="fab fa-github fa-2x"></i>
                <i class="fab fa-facebook fa-2x"></i>
                <i class="fab fa-instagram fa-2x"></i>
                <i class="fab fa-twitter fa-2x"></i>
            </div>
        </div>
    </footer>


        </div>
    )
    }