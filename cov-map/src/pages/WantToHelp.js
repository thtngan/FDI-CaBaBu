import Header from "../components/header/Header";
import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl'
mapboxgl.accessToken = 'pk.eyJ1IjoidGhxdWFuZyIsImEiOiJja3NlaG11bm4xMHJhMm9wM3kzeDk3eWFyIn0.UaKcxdXdZmPIUa0PfbBqZw';
export default function WantToHelp(){
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(-70.9);
    const [lat, setLat] = useState(42.35);
    const [zoom, setZoom] = useState(9);

    useEffect(() => {
        if (map.current) return; // initialize map only once
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [lng, lat],
            zoom: zoom
        });
    });

    useEffect(() => {
        if (!map.current) return; // wait for map to initialize
        map.current.on('move', () => {
            setLng(map.current.getCenter().lng.toFixed(4));
            setLat(map.current.getCenter().lat.toFixed(4));
            setZoom(map.current.getZoom().toFixed(2));
        });
    });
    return (
        <div>
            <div className="pb-7">
                <Header />
            </div>
            <div class="flex flex-row pt-7 mt-5">
                <div class="basis-1/2 mx-3">
                    <div ref={mapContainer} className="map-container"/>
                </div>
                <div class="basis-1/2 mx-3">
                    <div class="rounded-lg  bg-orange-500">
                        <div class="text-white">STATISTICS</div>
                        <div>There are <span>10</span> people need help in your area.</div>
                        <div>You’ve helped <span>5</span> people!</div>
                    </div>
                    <div class="text-orange-500">Want to see other areas?</div>
                    <div class="grid grid-flow-row auto-rows-max">
                        <select id="" name="city" class="rounded-lg border-2 border-black my-3">
                            <option value="" disabled selected>City</option>
                            <option value="">HCM</option>
                            <option value="">Hanoi</option>
                            <option value="">Da Nang</option>
                        </select>
                        <select id="" name="district" class="rounded-lg border-2 border-black my-3">
                            <option value="" disabled selected>District</option>
                            <option value="">HCM</option>
                            <option value="">Hanoi</option>
                            <option value="">Da Nang</option>
                        </select><select id="" name="ward" class="rounded-lg border-2 border-black my-3">
                            <option value="" disabled selected>Ward</option>
                            <option value="">HCM</option>
                            <option value="">Hanoi</option>
                            <option value="">Da Nang</option>
                        </select>
                    </div>
                    <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                        <button type="submit" className="inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-orange-500 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Apply</button>
                    </div>
                </div>
            </div>

        </div>

    );
}
