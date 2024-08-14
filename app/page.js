import Layout from "@/components/layout/Layout"
import Cta21 from "@/components/sections/Cta21"
import Cta3 from "@/components/sections/Cta3"
import Cta22 from "@/components/sections/Cta22"
import Faqs1 from "@/components/sections/Faqs1"
import Feature1 from "@/components/sections/Feature1"
import Pagetitle2 from "@/components/sections/Pagetitle2"
import Partner3 from "@/components/sections/Partner3"
import Threestep from "@/components/sections/Threestep"
import Roadmap from "@/components/sections/Roadmap1"
import Team2 from "@/components/sections/Team2"
import Technology from "@/components/sections/Technology"
import Token1 from "@/components/sections/Token1"
export default function Home() {

    return (
        <>

                    <Layout headerStyle={1} footerStyle={1}>
                    <Pagetitle2/>
                    <Feature1 />
                    <Threestep />
                    <Token1 />
                    <Technology />
                    <Cta22 />
                    <Roadmap />
                    <Partner3 />
                    <Cta3 />
                    <Team2 />
                    <Faqs1 />
                    <Cta21 />  
                   </Layout>
        </>
    )
}