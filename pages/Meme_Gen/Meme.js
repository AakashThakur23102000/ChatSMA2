import React from 'react';

export const Meme = ({template, onClick}) => {
    return (<div className="bg-gray-50"> 
        <img 
                        style={{ width: 200 }} 
                        key={template.id} 
                        src={template.url} 
                        alt={template.name}
                        onClick={onClick} />
    </div>)
}