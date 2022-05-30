import React from 'react';
import '../css/About.css';
import useSWR from 'swr'

export default function Test() {

    const fetcher = url => fetch(url, {method: "GET"}).then(r => r.json()).then(json => json.body.Contents);
    const { data } = useSWR('https://na1.api.riotgames.com/tft/summoner/v1/summoners/by-name/Delarious', fetcher);
    
    return (
        <div>
            { data }
        </div>
    )
}