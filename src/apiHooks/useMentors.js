import { useEffect, useState } from "react";
import axios from "axios";

const useMentors = (industry, last) => {
    const [mentors, setMentors] = useState([]);

    useEffect(() => {
        const getMentors = async () => {
            try {
                const { data } = await axios({
                    baseURL: "https://pji3ct6u5g.execute-api.us-west-2.amazonaws.com/hackathon",
                    url: `/${industry}/getmentors`,
                    method: "get",
                    params: {
                        limit: 6,
                        last: "null",
                    },
                });
                setMentors(data.mentors);
                return data.mentors;
            } catch (e) {
                console.log(e);
            }
        };
        getMentors().then(console.log).catch(console.log);
    }, [industry, last]);

    return mentors;
};

export default useMentors;
