import React from 'react'
import { NavLink } from 'react-router-dom'



class Header extends React.Component {
    render() {
        return (
            <div className="header">

                {/* <h1 className="header-text">Flashcards</h1> */}


                {/* <img src="https://image.winudf.com/v2/image/Y29tLm1hZ2ljYm94LmVuZ2xpc2hmbGFzaGNhcmRhbmltYWxzX3NjcmVlbnNob3RzXzNfZmU3Nzg1MTA/screen-3.jpg?fakeurl=1&type=.jpg" alt="logo" />
                <img src="https://lifehacker.ru/wp-content/uploads/2020/01/960x0.jpg-2_1579592873.png" alt="logo" />
                <img src="http://sun9-68.userapi.com/impf/ogcVSoMzJ-DaMVAOtIpIdD6dhCVaiPS_vACBJA/Z88l1-K6ao4.jpg?size=604x327&quality=96&sign=30d7768987c182729436697cd6f4166b&type=album" alt="logo" />
                <img src="https://i.ytimg.com/vi/kshc2ZeYeMw/maxresdefault.jpg" alt="logo" /> */}


                <NavLink to="/design_1">Design_1</NavLink>
                <NavLink to="/design_2">Design_2</NavLink>


            </div>
        );
    }
}

export default Header;