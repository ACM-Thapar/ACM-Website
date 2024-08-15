import { Fragment } from "react";
import Team from "../../Components/Team/Team";
import { Teamdata } from "../../data.mjs";
import arrow from '../../assets/Images/arrow.png'
import dots from '../../assets/Images/dots.png'
const TeamPage = () => {
    const EBData = {
        homeheadline: Teamdata.ebheadline,
        EB: Teamdata.EB
    };
    const CoreData = {
        homeheadline: Teamdata.coreheadline,
        core: Teamdata.core
    };
    return ( 
        <Fragment>
            <div style={{
                display:"flex",
                justifyContent:"space-between",
                width:"90%",
                marginInline:"auto",
                padding:"3vw"
            }}>
                {/* <a href="/" style={{textDecoration:"none",color:"black"}}><img src={arrow} style={{
                    height:"100%",
                }}></img></a>
                <img src={dots}  style={{
                    height:"100%",
                }}></img> */}
            </div>
            <Team teamData={EBData} />
            <Team teamData={CoreData} />
        </Fragment>
     );
}
 
export default TeamPage;