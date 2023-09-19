//----- IMPORTS -----//

//CSS
import '../assets/css/Home.css';

//Components
import Header from '../components/Header';
import Footer from '../components/Footer';

import Colors from '../components/Colors';
import Fonts from '../components/Fonts';
import Flexbox from '../components/Flexbox';
import Grid from '../components/Grid';

//----- EXPORTS -----//
export default function Dev() {

    //Return
    return (
        //---------- BODY ----------//
        <div className='app-body'>

            {/* Header */}
            <Header />

            {/* Cards */}
            <div className='cheatsheet-body'>
                <div className='css-container'>
                    <div className='colors'>
                        <Colors />
                    </div>
                    <div className='fonts'>
                        <Fonts />
                    </div>
                    <div className='flexbox'>
                        <Flexbox />
                    </div>
                    <div className='grid'>
                        <Grid />
                    </div>
                </div>
            </div>

            {/* Footer */}
            <Footer />
        </div>
    )
}