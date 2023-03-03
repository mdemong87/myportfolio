import SingleServise from "componnet/singleServise/SingleServise";
import styles from "./page.module.css";


export default function page() {
    return (
        <div className={styles.serviseWrp}>
            <SingleServise header="Web Design" discription="In Today's world,your website is the frist interaction consumers have with your bessiness.That's why almost 95% of user's frist impression relates to web design." />


            <SingleServise header="Web Development" discription="Web Development is the building and maintenace of website.It's the work that happens behind the screnes to make a website look great,work frist and perform well with a seamless user wxperience." />


            <SingleServise header="Responsive Design" discription="Responsive Web Desing is the approach that suggests that design and documentation should respond to the use's behavior and environment besed on screen size,platform and orientation.The practice consists of a mix of flexible grids and layouts,media queries." />


            <SingleServise header="Capture Code" discription="The code Capture tool allows you easily create screenshorts of you Labview code for use in Documentation,Website,Wikis,
            Emails for createing well GUI for esay capturing and use of code." />


            <SingleServise header="Bug fixing" discription="A bug fix is sa change to a system or product designed to hendle a programming bug/glitch.Many different types of programming bugs that create errors with system implementation may require specific byg fixs that are successfully resolved by a development or other IT team." />


            <SingleServise header="Web App Development" discription="Web Application Development is the creation of application programs that reside on remote servers and are delivered to the user's device over the internet.Client refers to a computer application such as a web browser.It's amazing." />


        </div>
    )
}
