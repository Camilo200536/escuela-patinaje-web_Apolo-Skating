import "./GalleryCard.css";

function GalleryCard({ item }) {

    return (

        <div className="gallery-card">

            {item.type === "image" ? (

                <img
                    src={item.src}
                    alt={item.title}
                />

            ) : (

                <video controls>

                    <source
                        src={item.src}
                        type="video/mp4"
                    />

                </video>

            )}

            <div className="gallery-overlay">

                <h3>{item.title}</h3>

            </div>

        </div>

    );

}

export default GalleryCard;