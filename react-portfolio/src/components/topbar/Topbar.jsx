import "./topbar.scss"
// import PhoneIcon from '@mui/icons-material/Phone';
// import MailIcon from '@mui/icons-material/Mail';
export default function Topbar(){
    return (
        <div className="topbar">
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">Willian Melnechuky</a>
        
                    <div className="itemContainer">
                        {/* <Phone className ="icon"/> */}
                        <span>289 938 0506</span>
                    </div>
                    <div className="itemContainer">
                        {/* <Mail className ="icon"/> */}
                        <span>willianmeln@gmail.com</span>
                    </div>
                </div>
                <div className="right">
                    <h1>Right Side</h1>
                </div>
            </div>
        </div>

        //<script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js'></script>
        // <script src="./script.js"></script>
    )
}