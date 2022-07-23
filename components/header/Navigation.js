import { useState } from "react";
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
            <NavigationItem handleAppear={handleAppear} setDotOpacity={setDotOpacity} position={0} text={'home'}/>

            <NavigationItem handleAppear={handleAppear} setDotOpacity={setDotOpacity} position={31} text={'about'}/>

            <NavigationItem handleAppear={handleAppear} setDotOpacity={setDotOpacity} position={62} text={'work'}/>

            <NavigationItem handleAppear={handleAppear} setDotOpacity={setDotOpacity} position={99} text={'contact'}/>
        </ul>

        <div className="dot_container">
            <div className="dot" />
        </div>
       

        <style jsx>{`
        .navMenu{
            width: 67%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
        }

        ul{
            display: flex;
            width: 50%;
            justify-content: center;
        }

        .dot_container{
            height: 10px;
            width: 25%;
            bottom: 5px;
            border-radius: 20px;
            position: absolute;
        }

        .dot{
            transition: all 0.2s ease-in-out;
            position:absolute;
            opacity: ${dotOpacity};
            width:3%;
            height: 80%;
            border-radius: 20px;
            background-color: var(--light-color);
            left: ${dotPosition}%;
        }
            `}</style>
    </nav>
     );
}

export default Navigation;