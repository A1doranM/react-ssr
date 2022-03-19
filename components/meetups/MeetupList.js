import MeetupItem from './MeetupItem';
import classes from './MeetupList.module.css';
import {logDOM} from "@testing-library/react";

function MeetupList(props) {
    return (
        <ul className={classes.list}>
            {props.meetups.map((meetup) => {
                return <MeetupItem
                    key={meetup.id}
                    id={meetup.id}
                    image={meetup.image}
                    title={meetup.title}
                    address={meetup.address}
                />
            })}
        </ul>
    );
}

export default MeetupList;
