import { useState } from "react";
import ConfigContainer from "./ConfigContainer";
import NavigationItem from "./NavigationItem";

function Navigation() {
    const [dotPosition, setDotPosition] = useState(0);
    const [dotOpacity, setDotOpacity] = useState(0);

    const handleAppear = (position) => {
        setDotPosition(position);
        setDotOpacity(1);
    }

    return ( 
    <nav className="navMenu">
        <ul>
            <NavigationItem handleAppear={handleAppear} setDotOpacity={setDotOpacity} position={0} text={'01.home'}/>

            <NavigationItem handleAppear={handleAppear} setDotOpacity={setDotOpacity} position={31} text={'02.about'}/>

            <NavigationItem handleAppear={handleAppear} setDotOpacity={setDotOpacity} position={62} text={'03.work'}/>

            <NavigationItem handleAppear={handleAppear} setDotOpacity={setDotOpacity} position={99} text={'04.contact'}/>
        </ul>

        <div className="dot_container">
            <div className="dot" />
        </div>

        <ConfigContainer />
       

        <style jsx>{`

        .navMenu{
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: space-evenly;
            position: relative;
        }

        ul{
            display: flex;
            width: 83%;
            justify-content: flex-end;
        }
            `}</style>
    </nav>
     );
}

export default Navigation;