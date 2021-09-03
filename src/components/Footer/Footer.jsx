import Footer_img from "../../Assets/images/footer.png";
import Style from './footer.module.scss';
export function Footer() {
    return(
        <section className={Style.Footer}>
        <img src={Footer_img} alt="logo" />
        </section>
    )
}