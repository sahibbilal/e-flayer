import React from 'react'
import Fashion from "../Pages/fashion/Fashion"
import Electronic from '../Pages/Electronic/Electronic'
import Jewellery from '../Pages/jewellery/Jewellery'

function Home() {
    return (
        <React.Fragment>
            <Fashion />
            <Electronic />
            <Jewellery />
        </React.Fragment>
    )
}

export default Home