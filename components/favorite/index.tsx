import { Grid } from "@mui/material"
import './styles.scss'

const Favorite = () => {
    return (
        <div className="favorite-container">
            <div className="title">
                <p>OUT FAVORITE PRODUCT</p>
            </div>
            <div className="list-product">
                <Grid container spacing={4}>
                    <Grid item xs={4}>
                        <div className="favorite-product" data-aos="flip-left">
                            <div className="pr-image">
                                <img src={'https://xuongmaybichngoc.vn/wp-content/uploads/2021/03/vay-hoa-nhi-do-tay-bong-5-1536x1536.jpg'} width={'100%'} height={'100%'}></img>
                            </div>
                            <div className="pr-name">
                                <span>LT 01 Court Lite White</span>
                            </div>
                            <div className="pr-price">
                                <span>30$</span>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={4}>
                        <div className="favorite-product" data-aos="flip-left">
                            <div className="pr-image">
                                <img src={'https://xuongmaybichngoc.vn/wp-content/uploads/2021/03/vay-hoa-nhi-do-tay-bong-5-1536x1536.jpg'} width={'100%'} height={'100%'}></img>
                            </div>
                            <div className="pr-name">
                                <span>LT 01 Court Lite White</span>
                            </div>
                            <div className="pr-price">
                                <span>30$</span>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={4}>
                        <div className="favorite-product" data-aos="flip-left">
                            <div className="pr-image">
                                <img src={'https://xuongmaybichngoc.vn/wp-content/uploads/2021/03/vay-hoa-nhi-do-tay-bong-5-1536x1536.jpg'} width={'100%'} height={'100%'}></img>
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

export default Favorite