import { Grid } from "@mui/material";
import './styles.scss';

const Footer = () => {
    return (
        <div className="footer-container">
            <Grid container spacing={2}>
                <Grid item xs={4}>
                    <div className="about">
                        <div className="title">
                            About
                        </div>
                        <div className="content">
                            We design wardrobe essentials with a strong silhouette, in tonal colorways. Our style never changes. It evolves. Continuously. Read more
                        </div>
                    </div>
                </Grid>
                <Grid item xs={2}>
                    <div className="address">
                        <div className="title">
                            Address
                        </div>
                        <div className="content">
                        Duinkerkenstraat 3A
                        9723 BN Groningen
                        The Netherlands
                        </div>
                    </div>
                </Grid>
                <Grid item xs={2}>
                    <div className="contact">
                        <div className="title">
                            Contact
                        </div>
                        <div className="content">
                        Email: chuhien4220na@gmail.com
                        </div>
                    </div>
                </Grid>
                <Grid item xs={2}>
                    <div className="info">
                        <div className="title">
                            Info
                        </div>
                        <div className="content">
                        Shipping
                        Returns
                        Wholesale
                        Product Care
                        Store Locator
                        Terms of Service
                        </div>
                    </div>
                </Grid>
                <Grid item xs={2}>
                    <div className="followus">
                        <div className="title">
                            Follow us
                        </div>
                        <div className="content">
                        Instagram
                        Facebook
                        Pinterest
                        Tiktok
                        </div>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

export default Footer;