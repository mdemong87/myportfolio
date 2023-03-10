import SingleProject from "componnet/singleProject/SingleProject";
import ai from "../../../public/ai.png";
import checkout from "../../../public/checkout.png";
import coin from "../../../public/coin.png";
import imageganarator from "../../../public/imageganarator.png";
import inlingua from "../../../public/inlingua.png";
import notification from "../../../public/notification.png";
import otp from "../../../public/otp.jpg";
import portfolio from "../../../public/portfolio.png";
import school from "../../../public/school.png";
import shoplify from "../../../public/shoplify.png";
import tip from "../../../public/tip.png";
import styles from "./page.module.css";




export default function page() {
    return (
        <div className={styles.projectWrp}>

            <SingleProject img={checkout} name={"Checkout.com"} dis={"This is a checkout app"} code={"https://github.com/mdemong87/Checkout.com"} live={"https://checkout-com-five.vercel.app/"} />


            <SingleProject img={ai} name={"AI"} dis={"This ai app like chatGPT"} code={"https://github.com/mdemong87/AI"} live={"https://ai-zeta.vercel.app/"} />

            <SingleProject img={imageganarator} name={"Image Ganarator"} dis={"This is image ganarator app"} code={"https://github.com/mdemong87/Image-Ganarator"} live={"https://image-ganarator.vercel.app/"} />


            <SingleProject img={school} name={"School Website"} dis={"This is a educational website"} code={"https://github.com/mdemong87/habil-udding"} live={"https://next-js-blog-swhg.vercel.app/"} />

            <SingleProject img={coin} name={"Coin Toss Game"} dis={"This is a coins toss game website"} code={"https://github.com/mdemong87/Coins-Toss-game"} live={"https://mdemong87.github.io/Coins-Toss-game/"} />


            <SingleProject img={portfolio} name={"Portfolio"} dis={"This is my another portfolio"} code={"https://github.com/mdemong87/Md-Emon-hossen"} live={"https://codemon.netlify.app/#project"} />


            <SingleProject img={inlingua} name={"Inlingua"} dis={"This Inlingua Project"} code={"https://github.com/mdemong87/Inlingua-Project"} live={"https://mdemong87.github.io/Inlingua-Project/"} />


            <SingleProject img={otp} name={"OTP Ganarator"} dis={"This is OTP Ganarator Project"} code={"https://github.com/mdemong87/OTP-Ganarator/tree/master"} live={"https://mdemong87.github.io/Inlingua-Project/"} />

            <SingleProject img={notification} name={"Notification"} dis={"This project just only natification toster practise"} code={"https://github.com/mdemong87/notification"} live={"https://mdemong87.github.io/notification/"} />


            <SingleProject img={tip} name={"Tips Count App"} dis={"This app can count your tips"} code={"https://github.com/mdemong87/Tips-ckecker-app"} live={"https://mdemong87.github.io/Tips-ckecker-app/"} />


            <SingleProject img={shoplify} name={"Shoplify"} dis={"This is a e-commerce Webiste"} code={"https://github.com/mdemong87/Shoplify.com"} live={"https://shoplify-com.vercel.app/"} />






        </div>
    )
}
