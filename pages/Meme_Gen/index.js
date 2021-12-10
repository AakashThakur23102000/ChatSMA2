import React, {useState, useEffect} from "react"
import Header from "../../components/Header";
import { Meme } from "./Meme";

const objectToQueryParam = (obj) => {
    const params = Object.entries(obj).map(([key, value]) => `${key}=${value}`)
    return '?' + params.join('&')
}

function index() {
    const [templates, setTemplates] = useState([]);
    const [template, setTemplate] = useState(null);
    const [topText, setTopText] = useState('');
    const [bottomText, setBottomText] = useState('');
    const [meme, setMeme] = useState(null);
   
    useEffect(() => {
        fetch('https://api.imgflip.com/get_memes').then(x => 
            x.json().then(response =>setTemplates(response.data.memes))
        );
    }, [])

    if (meme) {
        return(
        <div  style={{textAlign: 'center'}}>
            <img                
                style={{width: 400}} 
                src={meme} 
                alt="custom meme" />
        </div>
        );
    }

    return (
        
        <div className="bg-gray-50" style={{textAlign: "center"}}>
            <Header/>
            {template && (
            <form onSubmit={async e => {
                e.preventDefault();
                const params = {
                    template_id: template.id,
                    text0: topText,
                    text1: bottomText,
                    username: 'Aakash23102000',
                    password: 'Aakash23102000'
                }
                const response = await fetch(`https://api.imgflip.com/caption_image${objectToQueryParam(params)}`)
                const json = await response.json();
                setMeme(json.data.url);
               

            }}>
                <Meme template={template} />
                
                <input class="rounded px-2 pt-3 pb-3 mb-4 shadow-md text-gray-700 text-sm font-bold " placeholder="Top Text" value={topText} onChange={e => setTopText(e.target.value)}/>
                <input class="rounded px-2 pt-3 pb-3 mb-4 shadow-md text-gray-700 text-sm font-bold " placeholder="Bottom Text" value={bottomText} onChange={e => setBottomText(e.target.value)}/>
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded" type="submit">Create Meme</button>
            </form>
            ) }
            {!template &&
            (
                <>
                <h1><b>Pick a Template</b></h1>
                {
             templates.map(template => {
                return(
                    <div className="centerMeme">
                    <Meme
                        template={template}
                        onClick={() => {
                            setTemplate(template)
                        }} />
                    </div>
                )
            })}</>)}
            </div>
    )
}

export default index
