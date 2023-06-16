import axios from 'axios';

export const getTemp = async (req,res) =>{
    try{
        const { city } = req.body;
        if(!city) return res.send("City is required.");
        const accessKey = "478f6249ca8b69915660611ff52d0eb9";
        const response = await axios.post(`http://api.weatherstack.com/forecast?access_key=${accessKey}&query=${city}`);
        let dat = response.data.current.temperature;
        return res.send(dat.toString());

    }catch(err){
        return res.send(err);
    }
}

export const getAstro = async (req,res) =>{
    try{
        const { city } = req.body;
        if(!city) return res.send("City is required.");
        const accessKey = "478f6249ca8b69915660611ff52d0eb9";
        const response = await axios.post(`http://api.weatherstack.com/forecast?access_key=${accessKey}&query=${city}`);
        let dat = response.data.forecast['2023-06-15'].astro;
        return res.send(dat);
        
    }catch(err){
        return res.send(err);
    }
}

export const getWind = async (req,res) =>{
    try{
        const {city} = req.body;
        if(!city) return res.send("city is required.");
        const accessKey = "478f6249ca8b69915660611ff52d0eb9";
        const response = await axios.post(`http://api.weatherstack.com/forecast?access_key=${accessKey}&query=${city}`);
        let dat = response.data.current.wind_speed;
        return res.send(dat.toString());
    }catch(err){
        return res.send(err);
    }
}