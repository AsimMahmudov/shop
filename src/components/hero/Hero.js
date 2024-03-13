import React from "react";
import "../../style/Hero.css";
import { useSelector } from "react-redux";

const Hero = () => {
  const { products } = useSelector((s) => s);

  return (
    <>
      <div id="hero">
        <div className="container">
          <div className="hero">
            <img
              src="https://s3-alpha-sig.figma.com/img/9907/f471/e098b3cca37451d978d09831db01b86d?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SspS-1fFPCZfq3vjOyH048gl7SjrTbzVIlydHTjduterPzBquCGz0k~pkvqsa-~kcN9-45rCJ~dlLRYvbcurDkX6rS-8KXSFAvvqVmNy~GkNECDU3uXAP0dlVi0By2-jxZXwgyU1kQYl7OAL2xh5nr8iZx-InRRrBDzchdRrIyH~oUTXB4amwjiOzvq8hXandrCtqhMXnzY-cnbp7SyB5OdIS1D2-yiFdfiil3rc-65XdBRaWU0OskWTwU7nN3J1vruA6P3gYxElmdvNlBIEN5bi4f08rs6SYHqKIAoNaJUZq0nqu3NlYXzAhqUAYySXmBIcvgOShhDJ6WwJVcmbtg__"
              alt=""
            />

            <div className="btn">
              <button>
                <ion-icon name="arrow-back-outline"></ion-icon>
              </button>
              <button>
                <ion-icon name="arrow-forward-outline"></ion-icon>
              </button>
            </div>
          </div>
        </div>
      </div>
      <section id="product">
        <div className="container">
          <div className="product">
            {products.map((el) => (
              <div className="asim">
                <img src={el.img} alt="" />
                <h4>{el.name}</h4>
                <h4>{el.price} </h4>
                <h4>{el.cat} </h4>
                <h4>{el.dis} </h4>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
