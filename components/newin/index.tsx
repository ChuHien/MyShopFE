import { Grid } from "@mui/material"
import './styles.scss'

const NewIn = () => {
    return (
        <div className="newin-container">
            <div className="title">
                <p>OUT NEW IN</p>
            </div>
            <div className="list-product">
                <Grid container spacing={4}>
                    <Grid item xs={6}>
                        <div className="newin-product" data-aos="zoom-in">
                            <div className="pr-image">
                                <img src={'https://vietartproductions.com/wp-content/uploads/2022/05/cach-chup-anh-san-pham-quan-ao-bang-dien-thoai-3-1.jpg'} width={'100%'} height={'100%'}></img>
                            </div>
                            <div className="pr-name">
                                <span>LT 01 Court Lite White</span>
                            </div>
                            <div className="pr-price">
                                <span>30$</span>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={6}>
                        <div className="newin-product" data-aos="zoom-in">
                            <div className="pr-image">
                                <img src={'https://vietartproductions.com/wp-content/uploads/2022/05/cach-chup-anh-san-pham-quan-ao-bang-dien-thoai-3-1.jpg'} width={'100%'} height={'100%'}></img>
                            </div>
                            <div className="pr-name">
                                <span>LT 01 Court Lite White</span>
                            </div>
                            <div className="pr-price">
                                <span>30$</span>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default NewIn