import React from 'react'
import styled from 'styled-components'
import Section from './Section'

function Home() {
    return (
        <Container>
            <Section
                title = "Model S"
                desc = "Order Online for Tuchless Delivery"
                bgImage = "model-s.jpg"
                leftBtn = "Custom Order"
                rightBtn = "Existing Inventory"
            />
            <Section
                title = "Model Y"
                desc = "Order Online for Tuchless Delivery"
                bgImage = "model-y.jpg"
                leftBtn = "Custom Order"
                rightBtn = "Existing Inventory"
            />
            <Section
                title = "Model 3"
                desc = "Order Online for Tuchless Delivery"
                bgImage = "model-3.jpg"
                leftBtn = "Custom Order"
                rightBtn = "Existing Inventory"
            />
            <Section
                title = "Model X"
                desc = "Order Online for Tuchless Delivery"
                bgImage = "model-x.jpg"
                leftBtn = "Custom Order"
                rightBtn = "Existing Inventory"
            />
            <Section
                title = "Lowest Cost Solar Panels in America"
                desc = "Money-back Guarantee"
                bgImage = "solar-panel.jpg"
                leftBtn = "Order Now"
                rightBtn = "Learn More"
            />
            <Section
                title = "Solar for New Roofs"
                desc = "Solar Roof Costs Lesss Than a New Roof Plus Solar Panels"
                bgImage = "solar-roof.jpg"
                leftBtn = "Order Now"
                rightBtn = "Learn More"
            />
            <Section
                title = "Accessories"
                desc = ""
                bgImage = "accessories.jpg"
                leftBtn = "Shop Now"
            />
        </Container>
    )
}

export default Home


const Container = styled.div`
    height: 100vh;
`