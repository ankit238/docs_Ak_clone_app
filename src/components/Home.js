import React from 'react'
import "./Navbar.css";
import cli from "../images/cli.png"
import clojure from "../images/logos/clojure.png";
import csharp from "../images/logos/csharp.png";
import node from "../images/logos/node.png";
import php from "../images/logos/php.png";
import python from "../images/logos/python.png";
import ruby from "../images/logos/ruby.png";
import scala from "../images/logos/scala.png";





export default function Home() {
    return (
        <div>

<section className='showcase'>
    <div className="container grid">
        <div className="showcase-text">
            <h1>Easier Deployment</h1>

            <p>Deploy web apps of all kinds, from large scale enterprise APIs to static websites for individuals.
             Fill out the form to try a demo of our platform</p>
             <div className="btn btn-outline">
                  Read More
             </div> 
             </div>
 
 <div className="showcase-form card">
     <h2> Request a Demo</h2>


 <form>
                    <div class="form-control">
                        <input type="text" name="name" placeholder="Name" required />
                    </div>
                    <div class="form-control">
                        <input type="text" name="company" placeholder="Company Name" required />
                    </div>
                    <div class="form-control">
                        <input type="email" name="email" placeholder="Email" required />
                    </div>
                    <input type="submit" value="Send" class="btn btn-primary" />
                </form>

             </div>
    </div>
</section>

<section class="stats">
        <div class="container">
            <h3 class="stats-heading text-center my-1">
                Welcome to the best platform for building applications of all types with modern architecture and scaling
            </h3>

            <div class="grid grid-3 text-center my-4">
                <div>
                    <i class="fas fa-server fa-3x"></i>
                    <h3>10,349,405</h3>
                    <p class="text-secondary">Deployments</p>
                </div>
                <div>
                    <i class="fas fa-upload fa-3x"></i>
                    <h3>987 TB</h3>
                    <p class="text-secondary">Published</p>
                </div>
                <div>
                    <i class="fas fa-project-diagram fa-3x"></i>
                    <h3>2,343,265</h3>
                    <p class="text-secondary">Projects</p>
                </div>
            </div>
        </div>
    </section>

    <section class="cli">
        <div class="container grid">
            <img src={cli}  alt="phonto" />
            <div class="card">
                <h3>Easy to use, cross platform CLI</h3>
            </div>
            <div class="card">
                <h3>Deploy in seconds</h3>
            </div>
        </div>
    </section>



    <section class="languages">
        <h2 class="md text-center my-2">
            Supported Languages
        </h2>
        <div class="container flex">
            <div class="card">
                <h4>Node.js</h4>
                <img src={node} alt="" />
            </div>
            <div class="card">
                <h4>Python</h4>
                <img src={python} alt="" />
              </div>
              <div class="card">
                <h4>C#</h4>
                <img src={csharp}alt="" />
              </div>
              <div class="card">
                <h4>Ruby</h4>
                <img src={ruby} alt="" />
              </div>
              <div class="card">
                <h4>PHP</h4>
                <img src={php} alt="" />
              </div>
              <div class="card">
                <h4>Scala</h4>
                <img src={scala} alt="" />
              </div>
              <div class="card">
                <h4>Clojure</h4>
                <img src={clojure} alt="" />
              </div>
        </div>
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
