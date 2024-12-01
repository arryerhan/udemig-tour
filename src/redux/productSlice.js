import { createSlice } from '@reduxjs/toolkit';
import Miami from '../assets/images/miami.png';
import Orlando from '../assets/images/orlando.png';
import KeyWest from '../assets/images/keywest.png';
import Tampa from '../assets/images/tampa.png';
import Newyork from '../assets/images/newyork.png';
import Chicago from '../assets/images/chicago.png';
import WashingtonDC from '../assets/images/washingtondc.png';
import SanFrancisco from '../assets/images/sanfransisco.png';
import Berlin from '../assets/images/berlin.png';
import Paris from '../assets/images/paris.png';
import Rome from '../assets/images/rome.png';
import London from '../assets/images/london.png';
import Barcelona from '../assets/images/barcelona.png';
import Stockholm from '../assets/images/stockholm.png';
import Budapest from '../assets/images/budapest.png';
import StPetersburg from '../assets/images/st.petersburg.png';
import Athens from '../assets/images/athens.png';
import Istanbul from '../assets/images/istanbul.png';
import Cairo from '../assets/images/cairo.png';
import Marrakesh from '../assets/images/marrakesh.png';


const productSlice = createSlice({
    name: 'products',
    initialState: {
        list: [
            {
                id: 1201, name: "Miami", state: "Florida",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, doloribus. Temporibus hic eaque voluptatem quidem perspiciatis aliquid alias", price: 1730, image: Miami
            },

            {
                id: 1202, name: "Orlando", state: "Florida",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, doloribus. Temporibus hic eaque voluptatem quidem perspiciatis aliquid alias", price: 2370, image: Orlando
            },

            {
                id: 1203, name: "Key West", state: "Florida",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, doloribus. Temporibus hic eaque voluptatem quidem perspiciatis aliquid alias", price: 2150, image: KeyWest
            },

            {
                id: 1204, name: "Tampa", state: "Florida",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, doloribus. Temporibus hic eaque voluptatem quidem perspiciatis aliquid alias", price: 1960, image: Tampa
            },
            {
                id: 1205, name: "New York", state: "New York",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, doloribus. Temporibus hic eaque voluptatem quidem perspiciatis aliquid alias", price: 2470, image: Newyork
            },

            {
                id: 1206, name: "Chicago", state: "Illinois",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, doloribus. Temporibus hic eaque voluptatem quidem perspiciatis aliquid alias", price: 2310, image: Chicago
            },
            {
                id: 1207, name: "Washington DC", state: "District of Columbia",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, doloribus. Temporibus hic eaque voluptatem quidem perspiciatis aliquid alias", price: 2790, image: WashingtonDC
            },

            {
                id: 1208, name: "San Francisco", state: "California",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, doloribus. Temporibus hic eaque voluptatem quidem perspiciatis aliquid alias", price: 3260, image: SanFrancisco
            },

            {
                id: 1209, name: "Berlin", state: "Berlin",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, doloribus. Temporibus hic eaque voluptatem quidem perspiciatis aliquid alias", price: 4620, image: Berlin
            },
            {
                id: 1210, name: "Paris", state: "Paris",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, doloribus. Temporibus hic eaque voluptatem quidem perspiciatis aliquid alias", price: 4860, image: Paris
            },
            {
                id: 1211, name: "Rome", state: "Italy",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, doloribus. Temporibus hic eaque voluptatem quidem perspiciatis aliquid alias", price: 3980, image: Rome
            },


            {
                id: 1212, name: "London", state: "England",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, doloribus. Temporibus hic eaque voluptatem quidem perspiciatis aliquid alias", price: 3750, image: London
            },

            {
                id: 1213, name: "Barcelona", state: "Spain",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, doloribus. Temporibus hic eaque voluptatem quidem perspiciatis aliquid alias", price: 3540, image: Barcelona
            },
            {
                id: 1214, name: "Stockholm", state: "Sweden",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, doloribus. Temporibus hic eaque voluptatem quidem perspiciatis aliquid alias", price: 3150, image: Stockholm
            },
            {
                id: 1215, name: "Budapest", state: "Hungary",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, doloribus. Temporibus hic eaque voluptatem quidem perspiciatis aliquid alias", price: 2980, image: Budapest
            },
            {
                id: 1216, name: "St. Petersburg", state: "Russia",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, doloribus. Temporibus hic eaque voluptatem quidem perspiciatis aliquid alias", price: 4020, image: StPetersburg
            },

            {
                id: 1217, name: "Athens", state: "Greece",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, doloribus. Temporibus hic eaque voluptatem quidem perspiciatis aliquid alias", price: 3780, image: Athens
            },

            {
                id: 1218, name: "Istanbul", state: "Turkey",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, doloribus. Temporibus hic eaque voluptatem quidem perspiciatis aliquid alias", price: 3470, image: Istanbul
            },
            {
                id: 1219, name: "Cairo", state: "Egypt",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, doloribus. Temporibus hic eaque voluptatem quidem perspiciatis aliquid alias", price: 2970, image: Cairo
            },
            {
                id: 1220, name: "Marrakesh", state: "Morocco",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, doloribus. Temporibus hic eaque voluptatem quidem perspiciatis aliquid alias", price: 2890, image: Marrakesh
            }
        ],
    },
    reducers: {
        setProducts: (state, action) => {
            state.list = action.payload;
        },
    },
});

export const { setProducts } = productSlice.actions;
export default productSlice.reducer;
