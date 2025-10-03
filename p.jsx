import React, { useEffect, useState } from 'react'
import axios from 'axios'

const P = () => {
    const [img, setimg] = useState([])


    const Responed = async () => {
        const apikey = '49378987-d996b381ffc2dc41573f0a78b';
        const query = 'yellow flowers';
        const url = `https://pixabay.com/api/?key=${apikey}&q=${encodeURIComponent(query)}&image_type=photo`
        try {
            console.log(`fetching images for : '${query}'...`)
            const response = await axios.get(url)
            console.log(response)

            const images = response.data.hits
            setimg(images)

            if (images.length > 0) {
                console.log('Success! ✅ Found', images.length, 'images.');
                // Let's log the URL of the first image found
                console.log('URL of the first image:', images[0].webformatURL);
                // You can now use the 'images' array in your application
            } else {
                console.log('No images found for this query.');
            }
        } catch (error) {
            console.error('An error occurred while fetching data ❌');
            console.error(error);
        }
    }

    useEffect(() => {
        Responed()
    }, [])
    

    return (
        <>
            <div className='w-[500px] h-[500px]'>
                <img src={img} />
            </div>
        </>
    )
}
export default P