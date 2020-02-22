import React from 'react';
import './SeasonDetails.css'


const SeasonDetails = (props) =>{
    const season = getSeason( props.lat, new Date().getMonth());
    const { iconName, text} = seasonConfig[season];
    return (
        <div className={`season-disp ${season}`}>
            <i className={`icon-left massive ${iconName} icon`} />
            <h1>{text}</h1>
            <i className={`icon-right massive ${iconName} icon`} />
        </div>
    );
}
const seasonConfig ={
    summer: {
        text : "Lets go to the beach",
        iconName : "sun"
    },
    winter: {
        text : "Burr!! It is chilly",
        iconName : "snowflake"
    }
}
const getSeason = (lat, month) => {
    if (month >2 &&month>9) {
        return lat >0 ?'summer':'winter';
    }
    else {
        return lat >0 ?'winter':'summer';
    }
}



export default SeasonDetails;
