import { Grid } from '@mui/material'
import './styles.scss'

const Featured = () => {
    return (
        <div className="featured-container">
            <Grid container spacing={2}>
                <Grid item xs={4}>
                    <div className='sub-featured' data-aos="fade-up">
                        <div className='sub-featured-image'>
                            <img src={'https://artia.vn/wp-content/uploads/2020/12/Baby-Solid-Knitted-Style-Long-sleeve-Romper.jpg'} width={'100%'} height={'100%'}></img>
                        </div>
                        <div className='sub-featured-content'>
                            Item 1
                        </div>
                    </div>
                </Grid>
                <Grid item xs={4}>
                    <div className='sub-featured' data-aos="fade-up">
                        <div className='sub-featured-image'>
                            <img src="https://artia.vn/wp-content/uploads/2020/12/Baby-Solid-Knitted-Style-Long-sleeve-Romper.jpg" width={'100%'} height={'100%'}></img>
                        </div>
                        <div className='sub-featured-content'>
                            Item 1
                        </div>
                    </div>
                </Grid>
                <Grid item xs={4}>
                    <div className='sub-featured' data-aos="fade-up">
                        <div className='sub-featured-image'>
                            <img src="https://artia.vn/wp-content/uploads/2020/12/Baby-Solid-Knitted-Style-Long-sleeve-Romper.jpg" width={'100%'} height={'100%'}></img>
                        </div>
                        <div className='sub-featured-content'>
                            Item 1
                        </div>
                    </div>
                </Grid>
            </Grid>
        </div >
    )
}

export default Featured