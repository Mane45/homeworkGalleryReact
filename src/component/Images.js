import "./Images.css"

function Images(props) {
    return (
        <>
        <div className="wrapperImages" >
        {props.images.length
          ? props.images.map((image, index) => {
              return(
                  <div className="imageItem" key={index}>
                      <img src={`https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}_m.jpg`}/>
                  </div>
              )
          })
          : null}
        </div>
      </>
    )
}

export default Images