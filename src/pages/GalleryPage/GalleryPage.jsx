import "./GalleryPage.css";
import Gallery from "../../components/Gallery/Gallery";
import { useEffect } from "react";

function GalleryPage(){
    
useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
    return(

        <div className="gallery-page">

            <p>

               <Gallery />

            </p>

        </div>

    );

}

export default GalleryPage;